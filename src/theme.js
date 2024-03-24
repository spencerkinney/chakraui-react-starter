// src/theme.js
import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  colors: {
    primary: {
      50: '#F8F8F8', // Near-white shade for light backgrounds
      100: '#F0F0F0', // Light gray for secondary elements
      200: '#E0E0E0', // Gray for tertiary elements
      300: '#C0C0C0', // Darker gray for accents
      400: '#A0A0A0', // Even darker gray for accents
      500: '#808080', // Middle gray for text and icons
      600: '#606060', // Slightly darker gray for text and icons
      700: '#404040', // Dark gray for text and icons
      800: '#202020', // Very dark gray for text and icons
      900: '#0A0A0A', // Near-black shade for dark backgrounds
    },
    gray: {
      50: '#F8F8F8', // Near-white shade for light backgrounds
      100: '#F0F0F0', // Light gray for secondary elements
      200: '#E0E0E0', // Gray for tertiary elements
      300: '#C0C0C0', // Darker gray for accents
      400: '#A0A0A0', // Even darker gray for accents
      500: '#808080', // Middle gray for text and icons
      600: '#606060', // Slightly darker gray for text and icons
      700: '#404040', // Dark gray for text and icons
      800: '#202020', // Very dark gray for text and icons
      900: '#0A0A0A', // Near-black shade for dark backgrounds
    },
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'primary.900' : 'primary.50',
        color: props.colorMode === 'dark' ? 'primary.100' : 'primary.800',
      },
    }),
  },
});

export default customTheme;