import { useState } from 'react';
import Chatbot from "react-chatbot-kit";
import config from './config/config';
import MessageParser from './config/MessageParser';
import ActionProvider from './config/ActionProvider';
import './bot.css';
import 'react-chatbot-kit/build/main.css';


const Chatbotkit = () => {
    const [messages, setMessages] = useState([]);

    return (
        <div className='p-10'>
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
