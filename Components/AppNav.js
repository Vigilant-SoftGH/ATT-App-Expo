import React, {useState} from "react";
import { Platform, Share } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {Box, HStack, IconButton, Icon, Heading, Menu, Spacer, Pressable, Button, Text, useToast, Center, AlertDialog, Backdrop} from "native-base";

import {MaterialIcons, Ionicons} from '@expo/vector-icons';

function AppNav(props) {

  //let Ver = Application.nativeApplicationVersion;

  const [shouldOverlapWithTrigger] = React.useState(true);
const [data, setData] = useState('');
const navigation = useNavigation();


  return (
    
     
         <>
        
        <Box safeAreaTop bg={props.bgSafeArea}/>
        <Box bg={props.bg}>
        <Box p="1">
    <HStack justifyContent={"center"}>
    <IconButton onPress={()=> navigation.goBack()} icon={<Icon size="2xl" as={Ionicons} name="chevron-back" color={props.BarColor} />} />
    

      <Box><Text mt="2" fontSize={18} color={props.BarColor} style={{fontFamily: props.font}}>
{props.title}
</Text></Box>


<Spacer />

{/*
<Menu closeOnSelect={true} bg={"gray.300"} w="220" onOpen={() => console.log("opened")} placement='top right' onClose={() => console.log("closed")} trigger={triggerProps => {
      return <Pressable {...triggerProps}>
              <Icon as={MaterialIcons} name="menu" size="xl" color="gray.100" />
            </Pressable>;
    }}>
      
      

       
       <Menu.Item  onPress={() =>{navigation.navigate("AboutApp")}}>
       <Heading size="sm" color="gray.500"><Text>About App</Text></Heading></Menu.Item>

       
       <Menu.Item  onPress={() =>{navigation.navigate("SearchApp")}}>
       <Heading size="sm" color="gray.500"><Text>Search</Text></Heading></Menu.Item>
       </Menu>*/}

       
</HStack>
  </Box>
  </Box>
     </>
    );
}



export default AppNav;