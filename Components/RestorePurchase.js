/**
 * @file Restore Purchases Button.
 * @author Vadim Savin
 */

import React from 'react';
import { Alert } from 'react-native';
import { Pressable, Button, Text } from 'native-base';
import Purchases from 'react-native-purchases';
import { ENTITLEMENT_ID } from '../constants';

const RestorePurchase = () => {
  const restorePurchases = async () => {
    try {
      const restore = await Purchases.restorePurchases();

      if (typeof restore.entitlements.active[ENTITLEMENT_ID] == 'undefined') {
        navigation.navigate('PayWall');
      } else {
        Alert.alert("Success")
        navigation.navigate('Home');
        //navigation.navigate('PayWall');
      }
      
    } catch (e) {
      Alert.alert('Error restoring purchases', e.message);
    }
  };

  return (
    <Button  variant={"outline"} onPress={restorePurchases}>
      <Text style={{ color: 'dodgerblue',
    fontFamily: 'ArialRoundedMTBold',
    fontSize: 18,
    paddingVertical: 16,}}>Restore Purchases</Text>
    </Button>
  );
};

export default RestorePurchase;