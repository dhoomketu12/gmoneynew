export const DEFAULT_CHAT_MODEL: string = "chat-model";

export type ChatModel = {
  id: string;
  name: string;
  description: string;
};

export const chatModels: ChatModel[] = [
  {
    id: "chat-model",
    name: "Gemini 3 Pro",
    description: "Google's most intelligent multimodal model with advanced reasoning",
  },
  {
    id: "chat-model-reasoning",
    name: "Gemini 3 Pro (Reasoning)",
    description:
      "Uses advanced chain-of-thought reasoning for complex problems",
  },
];
