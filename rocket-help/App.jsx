import React from 'react';
import { SignIn } from './src/screens/SignIn';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto"
import { THEME } from './src/assets/theme';
import { NativeBaseProvider, StatusBar } from 'native-base';
import { Loading } from './src/components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  return (
    <NativeBaseProvider theme={THEME}>

      <StatusBar 
        barStyle="light-content"
        background="transparent"
        translucent
      />
      {fontsLoaded ? <SignIn/> : <Loading/>}
    </NativeBaseProvider>
  );
}

