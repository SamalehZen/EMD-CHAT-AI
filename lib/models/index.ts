import { google } from "@ai-sdk/google"
import { ModelConfig } from "./types"

// Define the Gemini model explicitly
const GEMINI_MODEL: ModelConfig = {
  id: "gemini-2.5-flash-preview-05-20",
  name: "Gemini 2.5 Flash Preview",
  provider: "Google",
  providerId: "google",
  contextWindow: 128000,
  tools: true,
  vision: true,
  apiSdk: () => google("gemini-2.5-flash-preview-05-20")
}

// Only Gemini 2.5 Flash Preview 05-20 is available
export const STATIC_MODELS: ModelConfig[] = [GEMINI_MODEL]

// Function to get all models
export async function getAllModels(): Promise<ModelConfig[]> {
  return [GEMINI_MODEL];
}

export function getModelInfo(modelId: string): ModelConfig | undefined {
  return modelId === GEMINI_MODEL.id ? GEMINI_MODEL : undefined;
}

// For backward compatibility
export const MODELS: ModelConfig[] = [GEMINI_MODEL]

// Function to refresh the models cache - No longer needed
export function refreshModelsCache(): void {}
