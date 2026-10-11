import { chromium } from "playwright";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const svg = readFileSync(resolve("/workspace/.grok/favicon.svg"), "utf8");
const browser = await chromium.launch({
  headless: true,
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});

for (const size of [16, 32, 64]) {
  const page = await browser.newPage({
    viewport: { width: size, height: size },
    deviceScaleFactor: 1,
  });
  await page.setContent(
    `<html><body style="margin:0;background:#ddd">${svg.replace(
      "<svg",
      `<svg width="${size}" height="${size}"`,
    )}</body></html>`,
    { waitUntil: "load" },
  );
  await page.screenshot({
    path: `/workspace/.grok/og-card/favicon-${size}.png`,
    clip: { x: 0, y: 0, width: size, height: size },
    type: "png",
  });
  await page.close();
}
await browser.close();
console.log("rasterized favicon at 16/32/64");
