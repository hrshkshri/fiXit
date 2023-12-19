import { Box, Flex, Spacer, Image, Text, Button } from '@chakra-ui/react';
import logo from '../assets/fixit_white_bg.3734d2d4.svg';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

const Navbar = ({ isLoggedIn, handleLoginSuccess, handleLogout }) => {
    const id = import.meta.env.VITE_CLIENT_ID;

    return (
        <Flex p={4} color="white" className='bg-[#212520]'>
            <Box className='flex space-x-3' marginLeft="20">
                <Image src={logo} alt="logo" h={8} />
                <Text fontSize="xl" fontWeight="bold">fiXit</Text>
            </Box>
            <Spacer />
            <Box marginRight="20">
                <GoogleOAuthProvider clientId={id}>
                    {isLoggedIn ? (
                        <Button onClick={handleLogout}>
                            Logout
                        </Button>
                    ) : (
                        <GoogleLogin
                            onSuccess={handleLoginSuccess}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                        />
                    )}
                </GoogleOAuthProvider>
            </Box>
        </Flex>
    );
}

export default Navbar;
