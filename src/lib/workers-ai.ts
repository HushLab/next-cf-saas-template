import { createWorkersAI } from "workers-ai-provider";

export const DEFAULT_WORKERS_AI_MODEL = "@cf/meta/llama-3.1-8b-instruct-fp8";

export const MODEL_NAME_MAP: Record<string, string> = {
	"basic": DEFAULT_WORKERS_AI_MODEL,
	"flagship": "@cf/zai-org/glm-4.7-flash",
};

export function resolveWorkersAiModelName(modelName: string) {
	return MODEL_NAME_MAP[modelName] ?? modelName;
}

export function createWorkersAiModel(ai: Ai, modelName?: string) {
	const workersai = createWorkersAI({ binding: ai });
	const modelId = modelName ? resolveWorkersAiModelName(modelName) : DEFAULT_WORKERS_AI_MODEL;
	return workersai(modelId);
}
