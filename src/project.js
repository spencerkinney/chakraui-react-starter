// project.js

// Project information
export const COMPANY_NAME = "Evil Corp"
export const PROJECT_NAME = 'AwesomeProject';
export const PROJECT_DESCRIPTION = 'A description of your project';
export const PROJECT_VERSION = '1.0.0';

// Colors - Please reference the ChakraUI docs for full color list
// https://chakra-ui.com/docs/styled-system/theme#colors
export const ACCENT_COLOR = {
  light: 'teal.500',
  dark: 'teal.200',
};
export const ACCENT_COLOR_SCHEME = {
  light: 'teal',
  dark: 'teal',
};

// API URLs
export const API_BASE_URL = process.env.NODE_ENV === 'production'
  ? 'https://api.example.com'
  : 'http://localhost:8000';

export const API_ENDPOINTS = {
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  USERS: '/users',
  // Add more API endpoints as needed
};

// Authentication
export const AUTH_TOKEN_KEY = 'auth_token';
export const AUTH_EXPIRATION_KEY = 'auth_expiration';

// Pagination
export const DEFAULT_PAGE_SIZE = 10;

// Date and Time
export const DATE_FORMAT = 'YYYY-MM-DD';
export const TIME_FORMAT = 'HH:mm:ss';

// Regex pattern for validating email addresses
// Checks for characters before @, followed by domain name and top-level domain
export const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

// Regex pattern for validating passwords
// Ensures at least one digit, lowercase letter, uppercase letter, and minimum length of 8
export const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

// Feature Flags
export const FEATURE_NEW_DASHBOARD = process.env.REACT_APP_FEATURE_NEW_DASHBOARD === 'true';
export const FEATURE_ADVANCED_SEARCH = process.env.REACT_APP_FEATURE_ADVANCED_SEARCH === 'true';

// Production Configuration
export const SENTRY_DSN = process.env.REACT_APP_SENTRY_DSN;
export const GOOGLE_ANALYTICS_ID = process.env.REACT_APP_GOOGLE_ANALYTICS_ID;

// Environment Variables
export const NODE_ENV = process.env.NODE_ENV;
export const IS_PRODUCTION = NODE_ENV === 'production';
export const IS_DEVELOPMENT = NODE_ENV === 'development';
export const IS_TEST = NODE_ENV === 'test';

// Conditional Configuration
export const CONFIG = {
  API_TIMEOUT: IS_PRODUCTION ? 10000 : 30000,
  CACHE_EXPIRATION: IS_PRODUCTION ? 3600 : 1800,
  LOG_LEVEL: IS_PRODUCTION ? 'error' : 'debug',
  // Add more conditional configuration as needed
};