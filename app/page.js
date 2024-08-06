"use client";


import { Box, Typography, TextField } from '@mui/material';
import './page.css'
import { Chat } from "@phosphor-icons/react/dist/ssr/Chat";
import { useEffect } from 'react';
import { blue } from '@mui/material/colors';
import useIntersectionObserver from './useIntersectionObserver'


export default function Home() {

  /** Animation When The Program Runs*/
  useIntersectionObserver();




  return (

    <Box
      width={"100vw"}
      height={"100vh"}
      bgcolor={"#E5E4E2	"}
    >
      {/*CHAT BOX CONTAINER*/}
      <Box
        overflow={"scroll"}
        className="hidden"
        alignItems="center"
        width={"20%"}
        height={"60%"}
        bgcolor={"#FFFFFF	"}
        position={"fixed"}
        zIndex={0}
        bottom={0}
        right={"1%"}
        boxShadow={"rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;"}
        sx={{
          borderTopLeftRadius: "30px",
          borderTopRightRadius: "30px",
          border: "none"

        }}
      >
        {/*HEADER*/}
        <Box
          bgcolor={"#89CFF0	"}
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
          <h4 className='title'>CHAT BOT</h4>
        </Box>

        <div className='container'>
          <div className='bot-text-container'>
            <p className='bot-text'>Bot text</p>
          </div>

          <div className='person-text-container'>
            <p className='person-text'>Person text
            </p>
          </div>    
          <div className='bot-text-container'>
            <p className='bot-text'>Bot text</p>
          </div>

          <div className='person-text-container'>
            <p className='person-text'>Person text
            </p>
          </div>    

          <div className='bot-text-container'>
            <p className='bot-text'>Bot text</p>
          </div>

          <div className='person-text-container'>
            <p className='person-text'>Person text
            </p>
          </div>    
          <div className='bot-text-container'>
            <p className='bot-text'>Bot text</p>
          </div>

          <div className='person-text-container'>
            <p className='person-text'>Person text
            </p>
          </div>    
        </div>









        <div className='text-chat-container'>
          <input className='input-label' placeholder='Type Here...' type='text' />
          <button className='send-btn'>
            <Chat size={25} color='white' />
          </button>
        </div>
      </Box>
    </Box>
  );
}
