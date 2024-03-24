import React, { useRef } from 'react';
import { Box, FormControl, FormLabel, Input, VStack, Heading, useColorModeValue, useToast, Text } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import PageShell from '../util/PageShell';
import ActionButton from '../util/ActionButton';
import { ACCENT_COLOR_SCHEME, ACCENT_COLOR } from '../project';
import { GoogleIcon } from '../util/AuthProviderIcons';
import { chakra } from '@chakra-ui/react';

const RegisterPage = () => {
  const formRef = useRef(null);
  const formBg = useColorModeValue('white', 'gray.800');
  const inputBg = useColorModeValue('gray.100', 'gray.700');
  const buttonColorScheme = useColorModeValue(ACCENT_COLOR_SCHEME.light, ACCENT_COLOR_SCHEME.dark);
  const linkColor = useColorModeValue(ACCENT_COLOR.light, ACCENT_COLOR.dark);
  const toast = useToast();
  const navigate = useNavigate();

  const handleRegistration = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast({
      title: 'Registration Successful',
      description: 'Your account has been created.',
      status: 'success',
      duration: 2000,
      isClosable: true,
    });
    navigate('/');
  };

  const handleGoogleSignUp = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast({
      title: 'Registration Successful',
      description: 'You have registered with Google.',
      status: 'success',
      duration: 2000,
      isClosable: true,
    });
    navigate('/login');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleRegistration();
  };

  const StyledLink = chakra(ReactRouterLink, {
    baseStyle: { color: linkColor },
  });

  return (
    <PageShell title="Register">
      <Box maxW="md" mx="auto" mt={8}>
        <Heading as="h1" size="xl" textAlign="center" mb={8}>
          Create Account
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
              onClick={handleRegistration}
              colorScheme={buttonColorScheme}
              loadingText="Creating Account..."
              width="full"
              type="submit"
              form={formRef.current}
            >
              Join
            </ActionButton>
            <ActionButton
              onClick={handleGoogleSignUp}
              colorScheme="gray"
              loadingText="Redirecting..."
              leftIcon={<GoogleIcon />}
              variant="outline"
              width="full"
            >
              Sign up with Google
            </ActionButton>
            <Text textAlign="center">
              Already have an account?{' '}
              <StyledLink to="/login">Sign in</StyledLink>
            </Text>
          </VStack>
        </Box>
      </Box>
    </PageShell>
  );
};

export default RegisterPage;