import { NavigationContainer, useNavigationState, NavigationHelpersContext, useFocusEffect, useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect} from "react";
import { StyleSheet, View, Image, Share, BackHandler, ImageBackground, ToastAndroid, Alert} from "react-native";
//import {Html5Entities} from "html-entities";
import { NativeBaseProvider, ColorMode, StorageManager, useColorMode, useColorModeValue, Text, Spacer, Icon, Button, Factory, Flex, Menu, Divider, useToast, Pressable, Container, Heading, Center, ScrollView, Box, AlertDialog, HStack, resolveStackStyleInput, VStack, IconButton,} from 'native-base';
import mobileAds, {AppOpenAd, AdsConsent, AdsConsentStatus, AdsConsentDebugGeography, InterstitialAd, RewardedAd, BannerAdSize, BannerAd, AdEventType,  TestIds} from 'react-native-google-mobile-ads';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import LoadingScreen from './LoadingScreen';

import * as Application from 'expo-application';
import { Linking } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { requestTrackingPermissionsAsync } from 'expo-tracking-transparency';
//This will be used to manage ATT



  const adUnitIdInter = __DEV__ ? TestIds.INTERSTITIAL : process.env.ADMOB_INTERSTITIAL_AD;



function HomeScreen() {

  const navigation = useNavigation();

  const interstitial = InterstitialAd.createForAdRequest(adUnitIdInter, {
    requestNonPersonalizedAdsOnly: nonPersonalized
    //To control nonPersonalized changes made by ATT code

  });

  const adUnitId = __DEV__ ? TestIds.BANNER :  process.env.ADMOB_BANNER_AD;
  

  const [showLoad, setShowLoad] = React.useState(false);
  const [loaded, setLoaded] = React.useState(false);
 const [nonPersonalized, setNonPersonalized] = useState(true)


  //ATT Code here

  async function initiateATT() {

    const {status} =  await requestTrackingPermissionsAsync();
    //waiting on user consent before we proceed

    if(status === "granted") {

      alert("Personalized ads can be served")
      //now user gave us the permission to track data

      setNonPersonalized(false);

      //so now serve nonpersonalized ads will be set to false
      //we can now serve personalised ads

      console.log("personalized ads allowed");
    }

    else
    {

      //user didn't grant us permission to track data
      //we can only serve nonpersonalized ads

      setNonPersonalized(true)

      return alert("User Denied serving Personalized ads")

      //we cannot serve personalized ads because user denied ATT permission
    }
    
  }

  //We have finished our ATT code
  //Let's run it in a side effect hook

  useEffect(() =>{

initiateATT();

//This will run on start app
//After user makes a choice, ATT dialogue will not show again unless the app is deleted and re installed
  },[]);

  //So let's see the results in our app

  





  //Show Ad
useEffect(() => {
 
    const unsubscribe = interstitial.addAdEventListener(AdEventType.LOADED, () => {
      setLoaded(true);
     
    });

    const unsubscribeClosed = interstitial.addAdEventListener(
      AdEventType.CLOSED,
      () => {
        setLoaded(false);
        interstitial.load();
      }
    );


    interstitial.load();
    setShowLoad(true)
    return () => {
      unsubscribe();
      unsubscribeClosed();
     
    }
  
    //return unsubscribe;
  }, []);

  

  
useEffect(() =>{

  setShowLoad(true)
});



  async function ShowAd()
  {

    if(interstitial.loaded)
      {
        
      interstitial.show().catch(error => console.warn(error));
      }
  
      else
      {
  
        console.log("failed to load ads");
      }
  }




  //App Theme manager

const {
  toggleColorMode
} = useColorMode();

const text = useColorModeValue("Light", "Dark");
const themeTxt = useColorModeValue("bedtime", "lightbulb");
const themevalue = useColorModeValue("dark", "light");
const bgSafeArea = useColorModeValue("muted.800","coolGray.900");
const bgMain = useColorModeValue("muted.700","coolGray.800");
const bg = useColorModeValue("warmGray.50", "coolGray.800");
const MenuTheme = useColorModeValue("white","coolGray.700");
const bgSideMenu = useColorModeValue("white","coolGray.800");
const MenuColor = useColorModeValue("coolGray.500","warmGray.50");
const MenuColor2 = useColorModeValue("white","warmGray.50");
  const [isOpen, setIsOpen] = useState(false); 


  const colorModeManager = {
    get: async () => {
      try {
        let val = await AsyncStorage.getItem('@color-mode');
        return val === 'dark' ? 'dark' : 'light';
      } catch (e) {
        return 'light';
      }
    },
    set: async (value) => {
      try {
        await AsyncStorage.setItem('@color-mode', value);
      } catch (e) {
        console.log(e);
      }
    },
  };


  //Load font
  const [font, setFont] = useState("");
  async function getFont()
{
  try {
 
    const value = await AsyncStorage.getItem('Fonts');

  
    //await AsyncStorage.removeItem('Favs');
  
    if (value !== null) {
     
      setFont(value);

      console.log(font);
  
   
    }

    else{

        setFont("FuturaBold");
    }
  
  
  } catch (e) {
    // saving error
    
  }

}

useEffect(() =>{getFont()},[font]);



  
function AppTopBar(props) {

  return (
    
     
         <>
        <Box safeAreaTop bg={props.bg} />
        <Box bg={props.bg}>
        <Box bg={props.bgMain} p="3" borderBottomRadius="2xl" >
    <HStack justifyContent={"center"}>
    <Heading color="white" pl="5" mt="1.5">
      <Text style={{fontFamily: props.font}}>
{props.title}
</Text>
</Heading>

<Spacer />

<IconButton onPress={()=> alert("Like and subscribe")} icon={<Icon size="2xl" as={Ionicons} name="megaphone" color={props.BarColor} />} />
          

</HStack>
  </Box>
  </Box>
     </>
    );
}



  
  if(!showLoad)
  {

    return <LoadingScreen bgMain={bg} MenuColor={MenuColor} fontFamily={font} bgSafeArea={bgSafeArea}/>
  }
 
  
else
{

    return (
   
       <NativeBaseProvider colorModeManager={colorModeManager}>
<StatusBar style="light" />
<AppTopBar font={font} bg={bgSafeArea} bgMain={bgMain} BarColor={MenuColor2} bgSideMenu={bgSideMenu} title={Truncate("ATT App", 20)} />

<Box bg={bg} h="90%" pb="5" pt="30%">

<ScrollView>

<Box bg="gray.300" p="4" m="5" rounded="md">
<Center><Box bg="primary.400" rounded="full"><Icon as={Ionicons} m="4" size="4xl" color="gray.50" name="person" /></Box></Center>
<Center><Heading p="4" justifyContent="center" size="lg" color={MenuColor} ><Text style={{fontFamily: font}}>Welcome </Text></Heading></Center>



<Heading p="4" justifyContent="center" size="md" color={MenuColor} ><Text style={{fontFamily: font}}>I hope this tutorial on ATT was helpful.
  {"\n\n"}
  Subscribe to Tech Savvy for more React Native Expo tutorials.</Text></Heading>
</Box>


<Center>
  <Button onPress={() =>{navigation.navigate("AnotherScreen", {nonPersonalized: nonPersonalized})}}>Next Screen</Button>
</Center>

 
    </ScrollView>

   <Center mt="5%" pt="2">
   <Box justifyContent={"center"}>
<BannerAd 
unitId={adUnitId}
size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
requestOptions={{
  requestNonPersonalizedAdsOnly: nonPersonalized
}}
/> 
</Box></Center>
    </Box>

           

      </NativeBaseProvider>


    );

}



  }


const styles= StyleSheet.create ({

    showData: {
        justifyContent: "center",
        alignItems: "center",
        flex:1
          }

});


function Truncate(str, length)
  {
    if (str.length > length) {
      return str.slice(0, length) + '...';
    } else return str;
  
  }

  const DateGet=new Date().getFullYear();
  let Ver = Application.nativeApplicationVersion +  Application.nativeBuildVersion;


export default HomeScreen;
