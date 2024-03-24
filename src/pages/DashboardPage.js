// src/pages/DashboardPage.js
import React from 'react';
import { Flex, Heading, Text, VStack } from '@chakra-ui/react';
import PageShell from '../util/PageShell';
import GithubLink from '../util/GithubLink';
import InfoBox from '../util/InfoBox';
import RocketImage from '../util/RocketImage';


const DashboardPage = () => {
  return (
    <PageShell title="Welcome" isAuthenticated>
      <Flex direction="column" align="center" justify="center" minHeight="70vh">
        <RocketImage />
        <Heading as="h1" size="2xl" mb={4} textAlign="center">
          Welcome to ChakraUI React Starter
        </Heading>
        <Text fontSize="xl" textAlign="center" mb={8}>
          A more opinionated React.js starter that includes ChakraUI, React Router, and React Icons.
        </Text>
        <VStack spacing={4} align="stretch" maxWidth="500px" width="100%">
          <InfoBox
            icon="FaReact"
            title="Getting Started"
            description="Start by exploring the `project.js` file in the `src` folder."
          />
          <InfoBox
            icon="IoRocketSharp"
            title="Main Entry Point"
            description="The main entry point of the application is `App.js`."
          />
          <InfoBox
            icon="FaReact"
            title="Pages"
            description="All the pages of the application are located in the `src/pages` folder."
          />
        </VStack>
        <GithubLink />
      </Flex>
    </PageShell>
  );
};

export default DashboardPage;