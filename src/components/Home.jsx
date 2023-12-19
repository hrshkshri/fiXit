import { Box, Center, Heading } from '@chakra-ui/react';
import Chatbotkit from './Chatbot/Chatbotkit';
import { useEffect, useState } from 'react';

const Home = ({ isLoggedIn }) => {
  const [revealHeading1, setRevealHeading1] = useState(false);
  const [revealHeading2, setRevealHeading2] = useState(false);

  useEffect(() => {
    const delay = 50;

    const revealText = (text, setReveal) => {
      let index = 0;

      const intervalId = setInterval(() => {
        if (index <= text.length) {
          const partialText = text.slice(0, index);
          setReveal(partialText);
          index++;
        } else {
          clearInterval(intervalId);
        }
      }, delay);
    };

    revealText('Fix your Sales', setRevealHeading1);
    setTimeout(() => revealText('Enabling Human Intelligence with Artificial Intelligence', setRevealHeading2), 1000);
  }, []);

  return (
    <>
      <style>
        {`
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
              className={`heading1 overflow-hidden leading-6 h-full font-semibold font-proximaBold -mt-[2%] xl:mt-10 bg-clip-text ${revealHeading1 ? 'text-[#c4dffe]' : ''
                }`}
            >
              {revealHeading1}
            </Heading>
            <Heading
              className={`heading2 w-full leading-tight md:mt-5 p-0 text-center font-proximaBold -mt-[2%] bg-clip-text ${revealHeading2 ? 'text-[#c4dffe]' : ''
                }`}
              mt="4"
            >
              {revealHeading2}
            </Heading>
          </div>
        </Center>
      </Box>

      {isLoggedIn && <Chatbotkit />}
    </>
  );
}

export default Home;
