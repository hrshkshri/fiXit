import { useState } from 'react';
import Chatbot from "react-chatbot-kit";
import config from './config/config';
import MessageParser from './config/MessageParser';
import ActionProvider from './config/ActionProvider';
import 'react-chatbot-kit/build/main.css';
import { Image, Flex, Box, Input, Button } from '@chakra-ui/react';
import logo from '../../assets/fixit_white_bg.3734d2d4.svg';

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
      display: flex !important;
      align-items: center !important;
      border: 1px solid #212520 !important;
      border-top-left-radius: 10px !important;
      border-bottom-left-radius: 10px !important;
    }

    .react-chatbot-kit-chat-input input {
      border: none !important;
      flex: 1 !important;
      padding: 10px !important;
    }

    .react-chatbot-kit-chat-btn-send {
      background-color: #303130 !important;
      cursor: pointer !important;
      border-top-right-radius: 10px !important;
      border-bottom-right-radius: 10px !important;
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
      background-color: #303130 !important;
      color: white !important;
    }
    .react-chatbot-kit-chat-bot-message-arrow {
      border-right: #303130 !important;
    }
  `;

  return (
    <div className='p-10'>
      <style>{customStyles}</style>
      <Flex alignItems="center" justifyContent="center" className='pb-5'>
        <Box>
          <Image src={logo} alt="logo" h={8} filter="invert(1)" />
        </Box>
        <Box ml={4}>
          <h1 className='text-4xl font-sm-bold text-center'>
            fiXit
          </h1>
        </Box>
      </Flex>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};

export default Chatbotkit;
