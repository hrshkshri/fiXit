import { useState } from 'react';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);

    const handleUserInput = (input) => {
        // Your logic to handle user input and generate bot responses
        // For simplicity, let's just echo back the user's input in this example
        const newMessages = [...messages, { role: 'user', text: input }];
        setMessages(newMessages);

        // Simulate bot response after a brief delay
        setTimeout(() => {
            const botResponse = 'I am a simple Chatbot. You said: ' + input;
            const updatedMessages = [...newMessages, { role: 'bot', text: botResponse }];
            setMessages(updatedMessages);
        }, 500);
    };

    return (
        <div className='p-10'>
            <h1 className='text-2xl font-bold text-center'>Chatbot</h1>
            <div style={{ height: '300px', overflowY: 'auto', padding: '10px' }}>
                {messages.map((message, index) => (
                    <div key={index} style={{ textAlign: message.role === 'user' ? 'right' : 'left' }}>
                        <span style={{ padding: '5px', borderRadius: '5px', background: message.role === 'user' ? '#3498db' : '#2ecc71', color: 'white' }}>
                            {message.text}
                        </span>
                    </div>
                ))}
            </div>
            <input
                className='w-full'
                type="text"
                placeholder="Type a message..."
                onKeyDown={(e) => {
                    if (e.key === 'Enter' && e.target.value.trim() !== '') {
                        handleUserInput(e.target.value);
                        e.target.value = '';
                    }
                }}
                style={{ marginTop: '10px', padding: '5px' }}
            />
        </div>
    );
};

export default Chatbot;
