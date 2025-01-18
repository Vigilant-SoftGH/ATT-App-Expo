import React, {useEffect, useState} from "react";
import { Platform, Share } from "react-native";
import { useNavigation } from "@react-navigation/native";
//import {AsyncStorage} from "@react-native-community/async-storage";
import {Box, HStack, IconButton, Icon, Heading, Menu, Spacer, Pressable, Button, Text, useToast, Center, AlertDialog} from "native-base";
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import Anchor from "../Components/Anchor";
import ShareApp from "../Components/ShareApp";
import * as Application from 'expo-application';
import { Linking } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';

function HomeBar(props) {

  const [nonPersonalized, setNonPersonalized] = useState(false);
const [consentStatus, setConsentStatus] = useState(null);
const [userChoices, setUserChoices] = useState(null);

    const getConsent  = async() =>{



      try {
         
        const val = await AsyncStorage.getItem('consentStatus');
    
        const val2 = await AsyncStorage.getItem('userChoices');
  

          
        setConsentStatus(val);
        setUserChoices(val2);

              //await AsyncStorage.removeItem('Favs');
           
          
           
            } catch (e) {
              // saving error
              //setShowScore(true);
            }
  
    }
  
  
    useEffect(() =>{
      
  
  getConsent();
      
    });

  let Ver = Application.nativeApplicationVersion;
  let MailAddr = "mailto:vigilantsoftgh@gmail.com?subject=Kenya Schools V."+Ver+" User Feedback";
  const [shouldOverlapWithTrigger] = React.useState(true);
const [data, setData] = useState('');
const navigation = useNavigation();

const ShareApp = async () => {
  try {
    const result = await Share.share({
      message:
      'Hi, Get Kenya Schools from the app store: ',
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    alert(error.message);
  }
};

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

<IconButton onPress={()=> navigation.navigate("Settings")} icon={<Icon size="2xl" as={Ionicons} name="settings" color={props.BarColor} />} />
    

{/*<Button variant={"outline"} borderWidth={0}><Text color="white" fontSize="18" style={{fontFamily: props.font}}>MENU</Text></Button>*/}


{/*<Menu closeOnSelect={true} bg={props.bgSideMenu} w="220" onOpen={() => console.log("opened")} placement='top right' onClose={() => console.log("closed")} trigger={triggerProps => {
      return <Button {...triggerProps} variant={"outline"} borderWidth={0}><Text color="white" fontSize="18" style={{fontFamily: props.font}}>MENU</Text></Button>;
    }}>
      
       <Menu.Item  onPress={() =>{ShareApp();}}><Icon as={MaterialIcons} name="share" size="xl" color="gray.500" />
       <Heading size="sm" color="gray.500"><Text style={{fontFamily: props.font}}>Share App</Text></Heading></Menu.Item>
       <Menu.Item  onPress={() =>{navigation.navigate("Search")}}><Icon as={MaterialIcons} name="search" size="xl" color="gray.500" />
       <Heading size="sm" color="gray.500"><Text style={{fontFamily: props.font}}>Search</Text></Heading></Menu.Item>
       <Menu.Item  onPress={() =>{navigation.navigate("MyFavs")}}><Icon as={MaterialIcons} name="favorite" size="xl" color="gray.500" />
       <Heading size="sm" color="gray.500"><Text style={{fontFamily: props.font}}>Favorites</Text></Heading></Menu.Item>
       <Menu.Item  onPress={() =>{navigation.navigate("About")}}><Icon as={MaterialIcons} name="person" size="xl" color="gray.500" />
       <Heading size="sm" color="gray.500"><Text style={{fontFamily: props.font}}>About App</Text></Heading></Menu.Item>

       <Menu.Item   onPress={() =>{Linking.openURL("")}}><Icon as={MaterialIcons} name="star" size="xl" color="gray.500" />
       <Heading size="sm" color="gray.500"><Text style={{fontFamily: props.font}}>Rate App</Text></Heading></Menu.Item>
       
       <Menu.Item  onPress={() =>{navigation.navigate("Settings")}}><Icon as={MaterialIcons} name="settings" size="xl" color="gray.500" />
       
       <Heading size="sm" color="gray.500"><Text style={{fontFamily: props.font}}>Settings</Text></Heading></Menu.Item>

        <Menu.Item  onPress={() =>{Linking.openURL(MailAddr)}}><Icon as={MaterialIcons} name="mail" size="xl" color="gray.500" />
       <Heading size="sm" color="gray.500"><Text style={{fontFamily: props.font}}>Contact Developer</Text></Heading></Menu.Item>
        </Menu>*/}
        

</HStack>
  </Box>
  </Box>
     </>
    );
}



export default HomeBar;