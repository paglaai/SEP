# PaglaGPT

**Local-first AI Architect for the PaglaAI ecosystem.**

PaglaGPT is the model-facing surface of PaglaAI / AYNAGHOR: the place where humans and agents reason about architecture, products, hybrid local+cloud orchestration, Apple Silicon constraints, and design-first delivery.

> Intelligence, Unhinged.

## What it is

| Layer | Role |
|-------|------|
| **Identity** | Official AI Architect of PaglaAI |
| **Audience** | Human · Machine |
| **Status** | Active (repo) · Custom GPT design complete |
| **Consumes** | PaglaDESIGN tokens, ecosystem registry |
| **Hardware** | Optimised for Apple Silicon (M2 Pro 16 GB hard ceiling) |

PaglaGPT is **not** a generic chatbot. It is the structured peer that:

- Keeps every decision inside the PaglaAI stack (PaglaMLX, PaglaROUTER, PaglaSHELL, PaglaDESIGN, SANCTUM, …)
- Enforces design-first sequencing (Vision → Research → Documentation → Design → Review → Prototype → Implementation)
- Never exceeds the 16 GB unified-memory constraint
- Prefers hybrid local (MLX / Ollama via PaglaMLX) + cloud when needed
- Produces PRD-, SOP-, Agent-Registry- and Skills-Registry-ready output

## Custom GPT

A full Custom GPT configuration (name, description, instructions, conversation starters, knowledge list) is available for ChatGPT GPT Builder.

Key behaviours encoded in the system instructions:

- Local-first, hybrid, design-first
- 16 GB hard ceiling on Apple Silicon
- Never invent design tokens or brand values — reference PaglaDESIGN
- Structured phases + decision checkpoints
- Bangla + English fluency when relevant

## Ecosystem position

From the canonical registry (`paglaai/pagladesign` → `ecosystem.json`):

```json
{
  "id": "paglagpt",
  "displayName": "PaglaGPT",
  "repo": "paglaai/PaglaGPT",
  "role": "product",
  "category": "model",
  "status": "planned → active",
  "audience": ["human", "machine"],
  "provides": ["model-interface"],
  "consumes": ["pagladesign/tokens"]
}
```

## Related surfaces

- [PaglaAI.space](https://paglaai.space) — public website
- [PaglaDESIGN](https://github.com/paglaai/pagladesign) — design authority
- [PaglaMLX](https://github.com/paglaai/PaglaMLX) — local MLX orchestration
- [PaglaROUTER](https://github.com/paglaai/PaglaROUTER) — LLM gateway
- [PaglaSHELL](https://github.com/paglaai/PaglaSHELL) — execution kernel

## Development notes

This repository currently hosts an App Builder / TanStack Start workspace used for interactive prototypes. The product identity and agent contract live in this README and in the Custom GPT instructions. Production packaging and public release follow the PaglaDESIGN release pipeline.

## License

MIT — see repository license when published.

---

*PaglaAI · AYNAGHOR · Dhaka*
