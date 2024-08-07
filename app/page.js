"use client";

import { Box, TextField } from '@mui/material';
import './page.css'
import { Chat } from "@phosphor-icons/react/dist/ssr/Chat";
import { useState } from 'react';
import useIntersectionObserver from './useIntersectionObserver';

export default function Home() {

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
    
    // Construct the conversation history as a single string
    const conversationHistory = messages.map(message => `${message.type === 'user' ? 'User' : 'Bot'}: ${message.text}`).join('\n');
    
    // Include the conversation history in the prompt
    const prompt = `ConversationHistory: ${conversationHistory} \nRole: Pretend to be a customer service agent, and if I give you and empty input than say you must type something\nUser: ${userPrompt}\nBot:`;



    const result = await model.generateContent(prompt);

    const response = await result.response;

    const text = await response.text();

    setMessages(prevMessages => [
      ...prevMessages,
      { type: 'user', text: userPrompt },
      { type: 'bot', text: text }
    ]);
  }

  return (
    <Box
      width={"100vw"}
      height={"100vh"}
      bgcolor={"#E5E4E2"}
    >
      {/*CHAT BOX CONTAINER*/}
      <Box
        overflow={"scroll"}
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
          bgcolor={"#89CFF0"}
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
              <p className={message.type === 'user' ? 'person-text' : 'bot-text'}>
                {message.text}
              </p>
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
    </Box>
  );
}
