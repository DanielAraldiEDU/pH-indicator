import { ImageRequireSource } from 'react-native';

declare module '*.png' {
  const value: ImageRequireSource;
  export default value;
}
