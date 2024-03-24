// src/util/RocketImage.js
import React from 'react';
import { Box, keyframes, useColorModeValue } from '@chakra-ui/react';
import { ACCENT_COLOR } from '../project';

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 0.5;
  }
`;

const RocketImage = () => {
  const emojiColor = useColorModeValue('gray.800', 'white');
  const circleBg = useColorModeValue(ACCENT_COLOR.light, ACCENT_COLOR.dark);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="relative"
      width={{ base: '100px', md: '150px' }}
      height={{ base: '100px', md: '150px' }}
      mb={8}
    >
      <Box
        position="absolute"
        width="100%"
        height="100%"
        borderRadius="50%"
        bg={circleBg}
        opacity={0.4}
        animation={`${pulseAnimation} 3s ease-in-out infinite`}
      />
      <Box
        as="span"
        fontSize={{ base: '4xl', md: '5xl' }}
        color={emojiColor}
        zIndex={1}
      >
        🚀
      </Box>
    </Box>
  );
};

export default RocketImage;