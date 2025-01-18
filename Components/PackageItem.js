import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import {View, Text, Box, Pressable, VStack} from 'native-base';
import Purchases from 'react-native-purchases';
import { useNavigation } from '@react-navigation/native';
import { ENTITLEMENT_ID } from '../constants';
//import styles from './styles.js';
import * as Animatable from 'react-native-animatable';

const PackageItem = ({ purchasePackage, setIsPurchasing }) => {
  const {
    product: { title, description, currencyCode, price, currency,subscriptionPeriod, priceString },
  } = purchasePackage;

  const [num, setNum] = useState();

  /*
  useEffect(
    () =>{
      let matches = subscriptionPeriod.match(/(\d+)/);
  
      let numMatch = matches.toString();
      let finalNum = numMatch.slice(0,1);
      console.log("FinalNum=>"+finalNum);
      const list = [];
      list.push(finalNum);
      setNum(list);
      const newArr = [...num, ...finalNum];
      setNum(newArr);
  console.log(newArr)

    },[]
  )*/

  const [pdur, setPdur] = useState();


  const navigation = useNavigation();

  /*const onSelection = async () => {
    setIsPurchasing(true);

    const { purchaseProduct } = await Purchases.purchaseStoreProduct();

    setPdur(purchaseProduct);

    try {
      const { purchaserInfo } = await Purchases.purchasePackage(purchasePackage);

   



      if (typeof purchaserInfo.entitlements.active[ENTITLEMENT_ID] !== 'undefined') {
      console.log("success")
      }
    } catch (e) {
     
        Alert.alert('Error purchasing package', e.message);

        console.log('Error purchasing package'+ e.message)
    
    } finally {
      setIsPurchasing(false);
      navigation.navigate("Home");
    }
  };*/

  const onSelection = async () => {
    setIsPurchasing(true);

    try {
      const { customerInfo } = await Purchases.purchasePackage(purchasePackage);

      if (typeof customerInfo.entitlements.active[ENTITLEMENT_ID] !== 'undefined') {
        navigation.goBack();
      }
    } catch (e) {
      if (e.code === Purchases.PURCHASES_ERROR_CODE.PURCHASE_CANCELLED_ERROR) {
        Alert.alert('Error purchasing package', e.message);
      }
    } finally {
      setIsPurchasing(false);
      navigation.navigate("Home");
    }
  };

  return (
    <Animatable.View animation="pulse" easing="ease-out" iterationCount="infinite">
    <Pressable mx="2" my="5" borderWidth={3} rounded={"lg"} bg={"muted.800"} padding={"4"} alignItems={"center"} justifyContent={"space-between"} onPress={onSelection} borderBottomColor={"coolGray.300"} borderTopColor={"coolGray.400"}>
      <VStack>
        <Text fontSize={"25"} color="white" fontWeight={"bold"}>{subscriptionPeriod == "P1W" ? "1 Week" : null}{subscriptionPeriod == "P1M" ? "1 Month" : null}
      {subscriptionPeriod == "P3M" ? "3 Months" : null}
      {subscriptionPeriod == "P6M" ? "6 Months" : null}
      {subscriptionPeriod == "P1Y" ? "1 Year" : null}</Text>
        <Text fontSize={"20"} color="white" fontWeight={"bold"}>{priceString}</Text>
      
      <Text fontSize={"16"} fontWeight={"bold"} color="white">{priceString.slice(2,3)}{subscriptionPeriod == "P1Y" ? (price/12).toFixed(2) :(price/parseInt(subscriptionPeriod.match(/(\d+)/)).toString().slice(0,1)).toFixed(2)}{/*priceString.replace("US", "")*/}/month</Text>
      </VStack>
    </Pressable>
    </Animatable.View>
  );
};

export default PackageItem;