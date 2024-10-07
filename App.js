import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import { EditProfile } from './screens';
import EditProfile from './screens/EditProfile';
import BottomTabNav from './navigations/BottomTabNav';

SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();


export default function App() {
  const [fontsLoaded] = useFonts({
    black: require('./assets/fonts/Poppins/Poppins-Black.ttf'),
    bold: require('./assets/fonts/Poppins/Poppins-Bold.ttf'),
    medium: require('./assets/fonts/Poppins/Poppins-Medium.ttf'),
    regular: require('./assets/fonts/Poppins/Poppins-Regular.ttf'),
    semiBold: require('./assets/fonts/Poppins/Poppins-SemiBold.ttf'),
  })

  const onLayoutRootView = useCallback(async ()=>{
    if(fontsLoaded){
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if(!fontsLoaded){
    return null
  }
  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <Stack.Navigator
        initialRouteName='BottomTabNavigation'
      >
        <Stack.Screen
          name="BottomTabNavigation"
          component={BottomTabNav}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{
          headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

