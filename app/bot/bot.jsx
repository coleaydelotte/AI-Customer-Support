

import { Box, TextField } from '@mui/material';
import '../page.css'
import { Chat } from "@phosphor-icons/react/dist/ssr/Chat";
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import useIntersectionObserver from '../useIntersectionObserver';

export default function Bot() {


    /** Animation When The Program Runs*/

    useIntersectionObserver();

    /**This make sure that the google generative ai takes the API KEY*/

    const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    const { GoogleGenerativeAI } = require("@google/generative-ai");
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Initialize the messages state with the base message
    const [messages, setMessages] = useState([
        { type: 'bot', text: "Hello! I am a customer service agent, how can I help you today?" }
    ]);
    const [input, setInput] = useState('');

    /**This is the function that runs the program */
    async function run(userPrompt) {
        // Construct the conversation history as a single string without "User:" and "Bot:" prefixes
        const conversationHistory = messages.map(message => message.text).join('\n');
    
        // Include the conversation history in the prompt
        const prompt = `ConversationHistory: ${conversationHistory} \nRole: I am an AI assistant created to help customers of the "Sell Your Products with Ease" website. IF THE USERS SAY NOTHING OR LEAVE EMPTY SPACE, TELL THE USER TO TYPE SOMETHING. I'm the customer service agent for this platform. How can I assist you today? I'd be happy to provide more information about our key features, share some customer testimonials, help you with the sign-up process, or answer any other questions you may have. Some of the main features of our platform include: - Easy-to-use online store builder - Secure payment processing - Comprehensive analytics and reporting - Customizable marketing tools Our customers love how easy it is to set up and manage their online stores with our platform. Here's what a couple of them have said: "Using this platform has been a game-changer for my business. It's never been easier to sell online." - John Doe, Small Business Owner "The features and support have helped me grow my sales exponentially. Highly recommended!" - Jane Smith, Ecommerce Entrepreneur If you're ready to get started, you can sign up on our website at sellproducts.com. Just click the "Sign Up Now" button and I'll be happy to walk you through the process. Please let me know if there's anything else I can assist you with. I'm here to help ensure you have a smooth experience selling your products online.\nUser: ${userPrompt}\n`;
    
        const result = await model.generateContent(prompt);
    
        const text = result.response.text();
    
        setMessages(prevMessages => [
            ...prevMessages,
            { type: 'user', text: userPrompt },
            { type: 'bot', text }
        ]);
    }

    return (
        <Box
            className="main-container hidden"
            alignItems="center"
            width={"20%"}
            height={"60%"}
            bgcolor={"#FFFFFF"}
            position={"fixed"}
            zIndex={0}
            bottom={0}
            right={"1%"}
            boxShadow={"rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;"}
            sx={{
                borderTopLeftRadius: "30px",
                borderTopRightRadius: "30px",
                border: "1px solid #89CFF0"
            }}
        >
            {/*HEADER*/}
            <Box

                bgcolor={"#00a8e8"}
                position={"absolute"}
                top={0}
                width={"100%"}
                height={"10%"}
                display={"flex"}
                justifyContent={"center"}
                textAlign={"center"}
                alignItems={"center"}
                sx={{
                    borderTopLeftRadius: "30px",
                    borderTopRightRadius: "30px",
                    border: "none"
                }}
                zIndex={-1}
            >
                <h4 className='title'>Support Bot</h4>
            </Box>

            <div className='container'>
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={message.type === 'user' ? 'person-text-container' : 'bot-text-container'}
                    >
                        <div className={message.type === 'user' ? 'person-text' : 'bot-text'}>
                            <ReactMarkdown>{message.text}</ReactMarkdown>
                        </div>
                    </div>
                ))}
            </div>

            <div className='text-chat-container'>
                <input className='input-label'
                    type='text'
                    placeholder='Type Here'
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                />
                <button className='send-btn' onClick={() => {
                    run(input);
                    setInput('');
                }}>
                    <Chat size={25} color='white' />
                </button>
            </div>
        </Box>

    );
}
