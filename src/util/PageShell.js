// src/util/PageShell.js
import React from 'react';
import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  useColorMode,
  useColorModeValue,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  HStack,
} from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { COMPANY_NAME } from '../project';

const PageShell = ({ title, children, isAuthenticated = false }) => {
  const { toggleColorMode } = useColorMode();
  const color = useColorModeValue('gray.800', 'white');

  return (
    <Flex direction="column" minHeight="100vh" color={color}>
      <Box as="header" py={4}>
        <Container maxW="container.lg">
          <Flex align="center" justify="space-between">
            <Heading as="h1" fontWeight={"semibold"} size={{ base: 'md', md: 'lg' }}>
              {title}
            </Heading>
            <HStack spacing={4}>
              <IconButton
                icon={useColorModeValue(<FaMoon />, <FaSun />)}
                onClick={toggleColorMode}
                variant="ghost"
                aria-label="Toggle color mode"
              />
              {isAuthenticated && (
                <Menu>
                  <MenuButton as={Avatar} size="sm" cursor="pointer" />
                  <MenuList>
                    <MenuItem>Profile</MenuItem>
                    <MenuItem>Settings</MenuItem>
                    <MenuItem>Logout</MenuItem>
                  </MenuList>
                </Menu>
              )}
            </HStack>
          </Flex>
        </Container>
      </Box>

      <Container maxW="container.lg" flex={1} py={8}>
        {children}
      </Container>

      <Box as="footer" py={4}>
        <Container maxW="container.lg" textAlign="center" fontSize="sm">
          &copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
        </Container>
      </Box>
    </Flex>
  );
};

export default PageShell;