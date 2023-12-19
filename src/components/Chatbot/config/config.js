import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  initialMessages: [createChatBotMessage(`Hello! Please say "Hi" to start a conversation with me.`, {widget: "options"})],
  botName: "LearningBot",
  state: {},
};

export default config;
