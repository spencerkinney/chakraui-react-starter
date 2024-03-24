// src/util/ActionButton.js
import React from 'react';
import { Button } from '@chakra-ui/react';

const ActionButton = ({
  children,
  colorScheme,
  onClick,
  loadingText,
  leftIcon,
  isLoading: initialIsLoading = false,
  ...rest
}) => {
  const [isLoading, setIsLoading] = React.useState(initialIsLoading);

  const handleClick = async (event) => {
    setIsLoading(true);
    if (onClick) {
      await onClick(event);
    }
    else {
    }
    setTimeout(() => {
        console.log("Delayed for 1 second.");
      }, 1000);
    setIsLoading(false);
  };

  return (
    <Button
      colorScheme={colorScheme}
      onClick={handleClick}
      isLoading={isLoading}
      loadingText={loadingText}
      leftIcon={leftIcon}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default ActionButton;