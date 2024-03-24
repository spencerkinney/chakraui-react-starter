// src/util/InfoBox.js
import React from 'react';
import { Box, Flex, Icon, Text, useColorModeValue, Code } from '@chakra-ui/react';
import { FaReact } from 'react-icons/fa';
import { IoRocketSharp } from 'react-icons/io5';
import { ACCENT_COLOR } from '../project';

const iconMap = {
  FaReact,
  IoRocketSharp,
};

const InfoBox = ({ icon, title, description }) => {
  const IconComponent = iconMap[icon];
  const boxBg = useColorModeValue('white', 'gray.800');
  const iconColor = useColorModeValue(ACCENT_COLOR.light, ACCENT_COLOR.dark);

  const renderDescription = () => {
    const parts = description.split(/(`[\w./]+`)/);
    return parts.map((part, index) => {
      if (part.startsWith('`') && part.endsWith('`')) {
        return <Code key={index}>{part.slice(1, -1)}</Code>;
      }
      return part;
    });
  };

  return (
    <Box p={6} borderRadius="md" boxShadow="md" bg={boxBg}>
      <Flex align="center" mb={2}>
        <Icon as={IconComponent} boxSize={6} color={iconColor} mr={2} />
        <Text fontWeight="bold">{title}</Text>
      </Flex>
      <Text>{renderDescription()}</Text>
    </Box>
  );
};

export default InfoBox;