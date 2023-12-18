import { Box, Flex, Spacer, Image, Text } from '@chakra-ui/react';
import logo from '../assets/fixit_white_bg.3734d2d4.svg';

const Navbar = () => {
  return (
    <Flex p={4} color="white" className='bg-[#212520]'>
      <Box className='flex space-x-3' marginLeft="20">
        <Image src={logo} alt="logo" h={8} />
        <Text fontSize="xl" fontWeight="bold">fiXit</Text>
      </Box>
      <Spacer />
      <Box marginRight="20">
        <button style={{ fontWeight: 'bold' }}>Sign In</button>
      </Box>
    </Flex>
  );
}

export default Navbar;
