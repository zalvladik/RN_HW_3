import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import RegistrationScreen from './src/Screens/RegistrationScreen';
// import LoginScreen from './src/Screens/LoginScreen';
import { useFonts } from 'expo-font'

import Roboto500 from './src/Screens/assets/fonts/Roboto-Medium.ttf'
import Roboto400 from './src/Screens/assets/fonts/Roboto-Regular.ttf'

export default function App() {

  const [fontsLoaded] = useFonts({
    'Roboto-500': Roboto500,
    'Roboto-400': Roboto400,
  })

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <RegistrationScreen/>
      {/* <LoginScreen/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:20,
  },
});

