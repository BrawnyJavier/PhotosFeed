import { Navigation } from 'react-native-navigation';
import AuthScreen from './src/screens/Auth/Auth';



// Register components
Navigation.registerComponent("photos.AuthScreen", () => AuthScreen);

// Start App

Navigation.startSingleScreenApp({
  screen: {
    screen: 'photos.AuthScreen',
    title: 'Login'
  }
});