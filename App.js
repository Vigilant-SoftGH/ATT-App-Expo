import React, {useCallback, useEffect, useState} from 'react';
import { Text, View, StatusBar, Settings } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Factory, Button, NativeBaseProvider, ColorMode, StorageManager, useColorMode, useColorModeValue, extendTheme } from 'native-base';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator, createTopTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./Screens/HomeScreen";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import AsyncStorage from '@react-native-async-storage/async-storage';
import AnotherScreen from './Screens/AnotherScreen';









// Keep the splash screen visible while we fetch resources
//SplashScreen.preventAutoHideAsync();
const Tab = createBottomTabNavigator();
const RootNav = createNativeStackNavigator();
const getIcon=  Factory(Text);

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('./assets/icon.png')}
    />
  );
}





//GetTheme();


/*
const config = {
  useSystemColorMode: false,
  initialColorMode: themeVal,
};

// extend the theme
const customTheme = extendTheme({ config });
*/


SplashScreen.preventAutoHideAsync();

export default function App() {


  const [themeData, setThemeData] = useState('');
  var themeVal;
const GetTheme = async() =>
{

  try {

  

//const parser =  JSON.parse(value);


//const getData = parser.find(checkData);
const value = await AsyncStorage.getItem("theme");


console.log("theme value =>"+value)
//alert(themeVal);

setThemeData(value);

   themeVal=value;
  // alert(themeVal);
  } catch (e) {
    // saving error
  }

  //return value;

}

useEffect(() =>

{
GetTheme();

},[themeData])



const config = {
  useSystemColorMode: false,
  initialColorMode: themeData,
};

// extend the theme
const customTheme = extendTheme({ config });


  const [appIsReady, setAppIsReady] = useState(false);

  const [loaded, setLoaded] = useFonts({
   Futura: require('./Fonts/Futura.ttf'),  FuturaBold: require('./Fonts/FuturaBold.ttf'), Chilanka: require('./Fonts/Chilanka.ttf'), ComingSoon: require('./Fonts/ComingSoon.ttf'), PlayFair: require('./Fonts/PlayfairDisplay.ttf'), Nunito: require('./Fonts/Nunito.ttf'), SourceSansPro: require('./Fonts/SourceSansPro.ttf'), Righteous: require('./Fonts/Righteous.ttf'), SansitaSwashed: require('./Fonts/SansitaSwashed.ttf'), MontSerrat: require('./Fonts/Montserrat.ttf'), Kalam: require('./Fonts/Kalam.ttf'),
  });

useEffect(() => {
 async function prepare() {
  try {
    // Keep the splash screen visible while we fetch resources
    

    // Pre-load fonts, make any API calls you need to do here
   // await Font.loadAsync({ Montserrat_900Black });
    
    // Artificially delay for two seconds to simulate a slow loading
    // experience. Please remove this if you copy and paste the code!
    await new Promise(resolve => setTimeout(resolve, 1500));
  } catch (e) {
    console.warn(e);
  } finally {
    // Tell the application to render
    setAppIsReady(true);
  }
}

prepare();
}, []);

const onLayoutRootView = useCallback(async () => {
  if (appIsReady) {
   // This tells the splash screen to hide immediately! If we call this after
   // `setAppIsReady`, then we may see a blank screen while the app is
   // loading its initial state and rendering its first pixels. So instead,
   // we hide the splash screen once we know the root view has already
   // performed layout.
   await SplashScreen.hideAsync();
 }
 }, [appIsReady]);
 
 if (!appIsReady) {
  return null;
 }
 
  return (
   <NativeBaseProvider theme={customTheme}>
    <NavigationContainer>
  <View onLayout={onLayoutRootView} />
      {/*
      <Tab.Navigator
      
      screenOptions={({ route }) => ({
     
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
        <Tab.Screen name="Home" component={HomeScreen} options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: 'green',
            height: 0,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Tab.Screen name="Settings" component={SettingsScreen} options ={{headerStyle:
          {height: 0,},
          }} />
        <Tab.Screen name="About" component={AboutScreen} options=
        {
          {
            headerStyle :
            {
              height: 0,
            }
          }}/>
      </Tab.Navigator>
        */}
      
      
      <RootNav.Navigator initialRouteName='Home'
      screenOptions={{
        headerStyle: {
          backgroundColor: '#18181b',
        }, headerShown:false,
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        
        <RootNav.Screen name="Home" component={HomeScreen} />
        <RootNav.Screen name="AnotherScreen" component={AnotherScreen} />
  
       
    
      
      </RootNav.Navigator>
     
    </NavigationContainer>
    </NativeBaseProvider>
  );
}