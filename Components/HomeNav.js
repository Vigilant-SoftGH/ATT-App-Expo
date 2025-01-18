import React, {useState} from "react";
import { Platform, Share } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {Box, HStack, IconButton, Icon, Heading, Menu, Spacer, Pressable, Button, Text, useToast, Center, AlertDialog} from "native-base";

import {MaterialIcons} from '@expo/vector-icons';

function HomeNav(props) {

  //let Ver = Application.nativeApplicationVersion;

  const [shouldOverlapWithTrigger] = React.useState(true);
const [data, setData] = useState('');
const navigation = useNavigation();


  return (
    
     
         <>
        
        <Box safeAreaTop bg={props.SafeAreabg}/>
        <Box bg={props.Bg}>
        <Box p="3" bg={props.bgMain}>
    <HStack justifyContent={"center"}>
    <IconButton onPress={()=> navigation.goBack()} icon={<Icon size="lg" as={MaterialIcons} name="arrow-back" color="white" />} />
    
    <Heading color="white" pl="5">
      <Text style={{fontFamily: props.font}}>
{props.title}
</Text>
</Heading>

<Spacer />

<Menu closeOnSelect={true} bg={"gray.300"} w="220" onOpen={() => console.log("opened")} placement='top right' onClose={() => console.log("closed")} trigger={triggerProps => {
      return <Pressable {...triggerProps}>
              <Icon as={MaterialIcons} name="menu" size="xl" color="gray.100" />
            </Pressable>;
    }}>
      
      

       
       <Menu.Item  onPress={() =>{navigation.navigate("AboutApp")}}>
       <Heading size="sm" color="gray.500"><Text>About App</Text></Heading></Menu.Item>

       
       <Menu.Item  onPress={() =>{navigation.navigate("SearchApp")}}>
       <Heading size="sm" color="gray.500"><Text>Search</Text></Heading></Menu.Item>
       </Menu>

       
</HStack>
  </Box>
  </Box>
     </>
    );
}



export default HomeNav;