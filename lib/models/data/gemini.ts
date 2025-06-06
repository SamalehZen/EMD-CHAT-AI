import { ModelConfig } from "../types"

export const geminiModels: ModelConfig[] = [
  {
    id: "gemini-2.0-flash-001",
    name: "Gemini 2.0 Flash",
    provider: "Google",
    providerId: "google",
    contextWindow: 30720,
    tools: true
  },
  {
    id: "gemini-2.5-flash-preview-05-20",
    name: "Gemini 2.5 Flash Preview",
    provider: "Google",
    providerId: "google",
    contextWindow: 128000,
    tools: true,
    vision: true
  },
]
