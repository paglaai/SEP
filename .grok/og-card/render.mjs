import { chromium } from "playwright";
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";

const html = pathToFileURL(resolve("/workspace/.grok/og-card/index.html")).href;
const out = resolve("/workspace/.grok/og-card-raw.png");

const browser = await chromium.launch({
  headless: true,
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});
const page = await browser.newPage({
  viewport: { width: 1920, height: 1080 },
  deviceScaleFactor: 1,
});
await page.goto(html, { waitUntil: "load", timeout: 30000 });
await page.evaluate(async () => {
  await document.fonts.ready;
  const imgs = [...document.images];
  await Promise.all(imgs.map((img) => (img.complete ? null : new Promise((res, rej) => {
    img.onload = res;
    img.onerror = rej;
  }))));
});
const fonts = await page.evaluate(() => {
  const title = document.querySelector(".title");
  const cs = getComputedStyle(title);
  return {
    family: cs.fontFamily,
    weight: cs.fontWeight,
    size: cs.fontSize,
    titleWidth: title.getBoundingClientRect().width,
    loaded: [...document.fonts].map((f) => `${f.family} ${f.weight} ${f.status}`),
  };
});
console.log(JSON.stringify(fonts, null, 2));
await page.screenshot({ path: out, fullPage: false, type: "png" });
await browser.close();
console.log("wrote", out);
