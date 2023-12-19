import { Box, Center, Heading } from '@chakra-ui/react';
import Chatbotkit from './Chatbot/Chatbotkit';

const Home = ({ isLoggedIn }) => {


  return (
    <>
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
          <div>
            <Heading className='text-6xl'>Fix your Sales</Heading>
            <Heading className='text-5xl' mt="4">Enabling Human Intelligence with Artificial Intelligence</Heading>
          </div>
        </Center>
      </Box>

      {isLoggedIn && <Chatbotkit />}
    </>
  );
}

export default Home;
