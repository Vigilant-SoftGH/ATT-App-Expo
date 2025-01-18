import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, View, Button, Image} from "react-native";
import { NativeBaseProvider, Text, Spinner, HStack, Center, Box, Heading } from 'native-base';

function Loading(props) {
  
    return (
        <NativeBaseProvider>
              <StatusBar style="light" />
           <Box safeAreaTop bg={props.bgSafeAreaTop}/>
            <Box bg={props.bg} w="100%" h="100%">
            <Center p="4">
      <Box rounded="sm" w="80%" minW="310" h="310" mt="25" alignContent={"center"} justifyContent={"center"}   m="7">
      <HStack space={2} justifyContent="center">
      <Spinner accessibilityLabel="Loading app" />
      <Heading fontSize="md">
        <Text color={props.MenuColor}>
        Please wait...
        </Text>
      </Heading>
    </HStack>
</Box>
</Center>
</Box>
      </NativeBaseProvider>
    );
  }

  

export default Loading;
