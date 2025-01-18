import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import { StyleSheet, View, ToastAndroid, Image, ImageBackground, Linking} from "react-native";
import { NativeBaseProvider, Button, useColorMode, useColorModeValue, Text, VStack, HStack, Pressable, Factory, Divider, ScrollView, Center, Box, Spacer, Heading, Icon } from 'native-base';
import * as Application from 'expo-application';
import mobileAds, {AppOpenAd, InterstitialAd, RewardedAd, BannerAdSize, BannerAd, AdEventType,  TestIds} from 'react-native-google-mobile-ads';
import AppNav from "../Components/AppNav";
import LoadingScreen from './LoadingScreen';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';



const adUnitIdInter = __DEV__ ? TestIds.INTERSTITIAL : process.env.ADMOB_INTERSTITIAL_AD;
  const interstitial = InterstitialAd.createForAdRequest(adUnitIdInter, {
    requestNonPersonalizedAdsOnly: true  });
    const adUnitId = __DEV__ ? TestIds.BANNER : process.env.ADMOB_BANNER_AD;


function AnotherScreen() {
  const ImageExt = Factory(Image);
  const ImageBackground =  Factory(ImageBackground);

  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = React.useState(false);

const navigation = useNavigation();
  
  const {
    toggleColorMode
  } = useColorMode();
  
  const textTheme = useColorModeValue("Light", "Dark");
  const bgSafeArea = useColorModeValue("red.800","coolGray.900");
  const bgMain = useColorModeValue("red.700","coolGray.800");
  const bg = useColorModeValue("white", "coolGray.800");
  const MenuTheme = useColorModeValue("white","coolGray.700");
  const borderColor = useColorModeValue("gray.300","coolGray.700");
  const SideMenuBack = useColorModeValue("white","coolGray.800");
     const MenuColor = useColorModeValue("black","warmGray.50");
   const MenuColor2 = useColorModeValue("white","warmGray.50");
    const BarColor = useColorModeValue("red.700","warmGray.50");
  const deleteColor = useColorModeValue("danger.500","warmGray.50");
  const donate = useColorModeValue("danger.500","warmGray.50");

  

    useEffect(() =>{

      const timing = setTimeout(() =>{
        setLoading(true);
      }, 500);

      // return clearTimeout(timing);
    }
    );


    useEffect(() =>{

      alert("User ATT status passed from Homescreen to this screen");
    },[]);
 
  
    
    if(!loading)
    {
  
      return <LoadingScreen />
    }
   
    
  else
  {

 
    return (
      <NativeBaseProvider>
            
            <StatusBar style="light" />
            <Box safeAreaTop bg="coolGray.800" />
           
<Box h="100%" w="100%" bg={bg}>
            <Box h="80%"><ScrollView>
            
            <Box bg="purple.800" mt="30%" p="4" m="5" rounded="md">
            <Center><Box bg="primary.400" rounded="full"><Icon as={Ionicons} m="4" size="4xl" color="gray.50" name="person" /></Box></Center>
            <Center><Heading p="4" justifyContent="center" size="lg" color={"white"} ><Text style={{fontFamily: "FuturaBold"}}>This is another screen </Text></Heading></Center>
            
            
            
            <Heading p="4" justifyContent="center" size="md" color={"white"} ><Text style={{fontFamily: "FuturaBold"}}>This screen will also show nonpersonalized ads because user denied ATT and the nonpersonalized state was passed to this screen from Homescreen.</Text></Heading>
            </Box>
            
            <Center>
              <Button size="lg" onPress={() =>{navigation.goBack()}}>Back to Home</Button>
            </Center>
            
             
                </ScrollView>
      </Box>
<Box h="30%" justifyContent={"center"}>
      <BannerAd 
unitId={adUnitId}
size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER }
requestOptions={{
  requestNonPersonalizedAdsOnly: true
}}
/>
</Box>

</Box>
      </NativeBaseProvider>
    );
  }
  }




export default AnotherScreen;
