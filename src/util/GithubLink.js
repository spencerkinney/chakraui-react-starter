// src/util/GithubLink.js
import React from 'react';
import { Flex, Icon, Link, Text } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

const GithubLink = () => {
  return (
    <Flex align="center" mt={8}>
      <Icon as={FaGithub} boxSize={6} mr={2} />
      <Link href="https://github.com/spencerkinney/chakraui-react-starter" isExternal>
        <Text fontSize="xl">github.com/spencerkinney/chakraui-react-starter</Text>
      </Link>
    </Flex>
  );
};

export default GithubLink;