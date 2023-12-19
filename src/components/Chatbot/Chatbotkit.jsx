import { useState } from 'react';
import Chatbot from "react-chatbot-kit";
import config from './config/config';
import MessageParser from './config/MessageParser';
import ActionProvider from './config/ActionProvider';
import 'react-chatbot-kit/build/main.css';


const Chatbotkit = () => {
    const [messages, setMessages] = useState([]);

    const customStyles = `
    .react-chatbot-kit-chat-container {
      width: 100% !important;
    }

    .react-chatbot-kit-chat-inner-container {
      height: 400px !important;
      background-color: white !important;
      border-radius: 0 !important;
      padding-bottom: 45px;
    }

    .react-chatbot-kit-chat-header {
      display: none !important;
    }

    .react-chatbot-kit-chat-input {
      border-bottom-left-radius: 0px !important;
    }

    .react-chatbot-kit-chat-btn-send {
      border-bottom-right-radius: 0px !important;
    }

    .react-chatbot-kit-chat-message-container {
      overflow-x: hidden !important;
      padding: 5px;
      height: 340px !important;
      width: 100%;
    }

    .react-chatbot-kit-chat-message-container::-webkit-scrollbar {
      display: none !important;
    }

    .react-chatbot-kit-chat-bot-message {
      width: 60% !important;
      margin-left: 0 !important;
    }
  `;


    return (
        <div className='p-10'>
            <style>{customStyles}</style>
            <h1 className='text-2xl font-bold text-center'>Chatbot</h1>
            <Chatbot
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
            />
        </div>
    );
};

export default Chatbotkit;
