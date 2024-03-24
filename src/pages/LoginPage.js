// src/pages/LoginPage.js
import React, { useRef } from 'react';
import { Box, FormControl, FormLabel, Input, VStack, Heading, useColorModeValue, useToast, Text } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import PageShell from '../util/PageShell';
import ActionButton from '../util/ActionButton';
import { ACCENT_COLOR, ACCENT_COLOR_SCHEME } from '../project';
import { GoogleIcon } from '../util/AuthProviderIcons';
import { chakra } from '@chakra-ui/react';

const LoginPage = () => {
  const formRef = useRef(null);
  const formBg = useColorModeValue('white', 'gray.800');
  const inputBg = useColorModeValue('gray.100', 'gray.700');
  const buttonColorScheme = useColorModeValue(ACCENT_COLOR_SCHEME.light, ACCENT_COLOR_SCHEME.dark);
  const linkColor = useColorModeValue(ACCENT_COLOR.light, ACCENT_COLOR.dark);
  const toast = useToast();
  const navigate = useNavigate();

  const handleLogin = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast({
      title: 'Login Successful',
      description: 'You have been logged in.',
      status: 'success',
      duration: 2000,
      isClosable: true,
    });
    navigate('/');
  };

  const handleGoogleSignIn = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast({
      title: 'Login Successful',
      description: 'You have logged in with Google.',
      status: 'success',
      duration: 2000,
      isClosable: true,
    });
    navigate('/');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleLogin();
  };

  const StyledLink = chakra(ReactRouterLink, {
    baseStyle: { color: linkColor },
  });

  return (
    <PageShell title="Login">
      <Box maxW="md" mx="auto" mt={8}>
        <Heading as="h1" size="xl" textAlign="center" mb={8}>
          Welcome Back
        </Heading>
        <Box bg={formBg} p={8} borderRadius="md" boxShadow="md">
          <VStack spacing={6} align="stretch" as="form" onSubmit={handleSubmit} ref={formRef}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input autoFocus type="email" bg={inputBg} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" bg={inputBg} />
            </FormControl>
            <ActionButton
              onClick={handleLogin}
              colorScheme={buttonColorScheme}
              loadingText="Submitting..."
              width="full"
              type="submit"
              form={formRef.current}
            >
              Sign in
            </ActionButton>
            <ActionButton
              onClick={handleGoogleSignIn}
              colorScheme="gray"
              loadingText="Redirecting..."
              leftIcon={<GoogleIcon />}
              variant="outline"
              width="full"
            >
              Sign in with Google
            </ActionButton>
            <Text textAlign="center">
              Don't have an account? <StyledLink to="/join">Join</StyledLink>
            </Text>
          </VStack>
        </Box>
      </Box>
    </PageShell>
  );
};

export default LoginPage;