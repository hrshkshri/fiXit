import { Box, Center, Heading } from '@chakra-ui/react';
import Chatbotkit from './Chatbot/Chatbotkit';
import './heading.css';

const Home = ({ isLoggedIn }) => {
  return (
    <>
      <style>
        {`
          @keyframes text-reveal {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .text-reveal-animation {
            animation: text-reveal 4s ease 0.72s 1 normal forwards running;
          }

          .heading1 {
            font-size: 3em;
          }

          .heading2 {
            font-size: 4em;
          }

          @media (max-width: 768px) {
            .heading1 {
              font-size: 2em; /* Adjust as needed for smaller screens */
            }

            .heading2 {
              font-size: 3em; /* Adjust as needed for smaller screens */
            }
          }
        `}
      </style>

      <Box
        bg="#212520"
        color="grey"
        h="100vh"
        textAlign="center"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Center>
          <div className='flex p-0 md:pt-36 px-10 lg:p-0 pb-0 flex-col text-center text-white items-center gap-8 sm:-mt-[2%] justify-between'>
            <Heading
              className='heading1 overflow-hidden leading-6 h-full font-semibold font-proximaBold -mt-[2%] xl:mt-10 bg-clip-text text-[#c4dffe] text-reveal-animation'
            >
              Fix your Sales
            </Heading>
            <Heading
              className='heading2 w-full leading-tight md:mt-5 p-0 text-center font-proximaBold -mt-[2%] bg-clip-text text-[#c4dffe] text-reveal-animation'
              mt="4"
            >
              Human Intelligence with Enabling Artificial Intelligence
            </Heading>
          </div>
        </Center>
      </Box>

      {isLoggedIn && <Chatbotkit />}
    </>
  );
}

export default Home;
