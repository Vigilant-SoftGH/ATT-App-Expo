import React, {useEffect, useState} from "react";
import { Platform, Share } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {Box, HStack, IconButton, Icon, Heading, Menu, Spacer, Pressable, Button, Text, useToast, Center, AlertDialog} from "native-base";

import {MaterialIcons} from '@expo/vector-icons';
import * as FileSystem from 'expo-file-system';
import { readAsStringAsync } from 'expo-file-system';



function LessonsData2(props) {

  //let Ver = Application.nativeApplicationVersion;

  const [shouldOverlapWithTrigger] = React.useState(true);
const [data, setData] = useState('');
const navigation = useNavigation();


const folderDir = FileSystem.documentDirectory + ".Sabbath_School/CurrentLesson";

const [LS1Num, setLS1Num] = useState("");
const [LS1HeadTxt, setLS1HeadTxt] = useState("");
const [LS1HeadDate, setLS1HeadDate] = useState("");
const [LS1SabbathHead, setLS1SabbathHead] = useState("");
const [LS1SabbathDate, setLS1SabbathDate] = useState("");
const [LS1SabbathMain, setLS1SabbathMain] = useState("");
const [LS1SabbathMainHead, setLS1SabbathMainHead] = useState("");
const [LS1SabbathMonth, setLS1SabbathMonth] = useState("");

const [LS1SundayHead, setLS1SundayHead] = useState("");
const [LS1SundayDate, setLS1SundayDate] = useState("");
const [LS1SundayMain, setLS1SundayMain] = useState("");
const [LS1SundayMainHead, setLS1SundayMainHead] = useState("");
const [LS1undayMonth, setLS1SundayMonth] = useState("");

const [LS1MondayHead, setLS1MondayHead] = useState("");
const [LS1MondayDate, setLS1MondayDate] = useState("");
const [LS1MondayMain, setLS1MondayMain] = useState("");
const [LS1MondayMainHead, setLS1MondayMainHead] = useState("");
const [LS1MondayMonth, setLS1MondayMonth] = useState("");

const [LS1TuesdayHead, setLS1TuesdayHead] = useState("");
const [LS1TuesdayDate, setLS1TuesdayDate] = useState("");
const [LS1TuesdayMain, setLS1TuesdayMain] = useState("");
const [LS1TuesdayMainHead, setLS1TuesdayMainHead] = useState("");
const [LS1TuesdayMonth, setLS1TuesdayMonth] = useState("");

const [LS1WednesdayHead, setLS1WednesdayHead] = useState("");
const [LS1WednesdayDate, setLS1WednesdayDate] = useState("");
const [LS1WednesdayMain, setLS1WednesdayMain] = useState("");
const [LS1WednesdayMainHead, setLS1WednesdayMainHead] = useState("");
const [LS1WednesdayMonth, setLS1WednesdayMonth] = useState("");

const [LS1ThursdayHead, setLS1ThursdayHead] = useState("");
const [LS1ThursdayDate, setLS1ThursdayDate] = useState("");
const [LS1ThursdayMain, setLS1ThursdayMain] = useState("");
const [LS1ThursdayMainHead, setLS1ThursdayMainHead] = useState("");
const [LS1ThurdayMonth, setLS1ThursdayMonth] = useState("");

const [LS1FridayHead, setLS1FridayHead] = useState("");
const [LS1FridayDate, setLS1FridayDate] = useState("");
const [LS1FridayMain, setLS1FridayMain] = useState("");
const [LS1FridayMainHead, setLS1FridayMainHead] = useState("");
const [LS1FridayMMonth, setLS1FridayMonth] = useState("");

/*LESSON 2*/

const [LS2Num, setLS2Num] = useState("");
const [LS2HeadTxt, setLS2HeadTxt] = useState("");
const [LS2HeadDate, setLS2HeadDate] = useState("");
const [LS2SabbathHead, setLS2SabbathHead] = useState("");
const [LS2SabbathDate, setLS2SabbathDate] = useState("");
const [LS2SabbathMain, setLS2SabbathMain] = useState("");
const [LS2SabbathMainHead, setLS2SabbathMainHead] = useState("");
const [LS2SabbathMonth, setLS2SabbathMonth] = useState("");

const [LS2SundayHead, setLS2SundayHead] = useState("");
const [LS2SundayDate, setLS2SundayDate] = useState("");
const [LS2SundayMain, setLS2SundayMain] = useState("");
const [LS2SundayMainHead, setLS2SundayMainHead] = useState("");
const [LS2undayMonth, setLS2SundayMonth] = useState("");

const [LS2MondayHead, setLS2MondayHead] = useState("");
const [LS2MondayDate, setLS2MondayDate] = useState("");
const [LS2MondayMain, setLS2MondayMain] = useState("");
const [LS2MondayMainHead, setLS2MondayMainHead] = useState("");
const [LS2MondayMonth, setLS2MondayMonth] = useState("");

const [LS2TuesdayHead, setLS2TuesdayHead] = useState("");
const [LS2TuesdayDate, setLS2TuesdayDate] = useState("");
const [LS2TuesdayMain, setLS2TuesdayMain] = useState("");
const [LS2TuesdayMainHead, setLS2TuesdayMainHead] = useState("");
const [LS2TuesdayMonth, setLS2TuesdayMonth] = useState("");

const [LS2WednesdayHead, setLS2WednesdayHead] = useState("");
const [LS2WednesdayDate, setLS2WednesdayDate] = useState("");
const [LS2WednesdayMain, setLS2WednesdayMain] = useState("");
const [LS2WednesdayMainHead, setLS2WednesdayMainHead] = useState("");
const [LS2WednesdayMonth, setLS2WednesdayMonth] = useState("");

const [LS2ThursdayHead, setLS2ThursdayHead] = useState("");
const [LS2ThursdayDate, setLS2ThursdayDate] = useState("");
const [LS2ThursdayMain, setLS2ThursdayMain] = useState("");
const [LS2ThursdayMainHead, setLS2ThursdayMainHead] = useState("");
const [LS2ThurdayMonth, setLS2ThursdayMonth] = useState("");

const [LS2FridayHead, setLS2FridayHead] = useState("");
const [LS2FridayDate, setLS2FridayDate] = useState("");
const [LS2FridayMain, setLS2FridayMain] = useState("");
const [LS2FridayMainHead, setLS2FridayMainHead] = useState("");
const [LS2FridayMMonth, setLS2FridayMonth] = useState("");

/*LESSON 3*/

const [LS3Num, setLS3Num] = useState("");
const [LS3HeadTxt, setLS3HeadTxt] = useState("");
const [LS3HeadDate, setLS3HeadDate] = useState("");
const [LS3SabbathHead, setLS3SabbathHead] = useState("");
const [LS3SabbathDate, setLS3SabbathDate] = useState("");
const [LS3SabbathMain, setLS3SabbathMain] = useState("");
const [LS3SabbathMainHead, setLS3SabbathMainHead] = useState("");
const [LS3SabbathMonth, setLS3SabbathMonth] = useState("");

const [LS3SundayHead, setLS3SundayHead] = useState("");
const [LS3SundayDate, setLS3SundayDate] = useState("");
const [LS3SundayMain, setLS3SundayMain] = useState("");
const [LS3SundayMainHead, setLS3SundayMainHead] = useState("");
const [LS3undayMonth, setLS3SundayMonth] = useState("");

const [LS3MondayHead, setLS3MondayHead] = useState("");
const [LS3MondayDate, setLS3MondayDate] = useState("");
const [LS3MondayMain, setLS3MondayMain] = useState("");
const [LS3MondayMainHead, setLS3MondayMainHead] = useState("");
const [LS3MondayMonth, setLS3MondayMonth] = useState("");

const [LS3TuesdayHead, setLS3TuesdayHead] = useState("");
const [LS3TuesdayDate, setLS3TuesdayDate] = useState("");
const [LS3TuesdayMain, setLS3TuesdayMain] = useState("");
const [LS3TuesdayMainHead, setLS3TuesdayMainHead] = useState("");
const [LS3TuesdayMonth, setLS3TuesdayMonth] = useState("");

const [LS3WednesdayHead, setLS3WednesdayHead] = useState("");
const [LS3WednesdayDate, setLS3WednesdayDate] = useState("");
const [LS3WednesdayMain, setLS3WednesdayMain] = useState("");
const [LS3WednesdayMainHead, setLS3WednesdayMainHead] = useState("");
const [LS3WednesdayMonth, setLS3WednesdayMonth] = useState("");

const [LS3ThursdayHead, setLS3ThursdayHead] = useState("");
const [LS3ThursdayDate, setLS3ThursdayDate] = useState("");
const [LS3ThursdayMain, setLS3ThursdayMain] = useState("");
const [LS3ThursdayMainHead, setLS3ThursdayMainHead] = useState("");
const [LS3ThurdayMonth, setLS3ThursdayMonth] = useState("");

const [LS3FridayHead, setLS3FridayHead] = useState("");
const [LS3FridayDate, setLS3FridayDate] = useState("");
const [LS3FridayMain, setLS3FridayMain] = useState("");
const [LS3FridayMainHead, setLS3FridayMainHead] = useState("");
const [LS3FridayMMonth, setLS3FridayMonth] = useState("");

/*LESSON 4*/

const [LS4Num, setLS4Num] = useState("");
const [LS4HeadTxt, setLS4HeadTxt] = useState("");
const [LS4HeadDate, setLS4HeadDate] = useState("");
const [LS4SabbathHead, setLS4SabbathHead] = useState("");
const [LS4SabbathDate, setLS4SabbathDate] = useState("");
const [LS4SabbathMain, setLS4SabbathMain] = useState("");
const [LS4SabbathMainHead, setLS4SabbathMainHead] = useState("");
const [LS4SabbathMonth, setLS4SabbathMonth] = useState("");

const [LS4SundayHead, setLS4SundayHead] = useState("");
const [LS4SundayDate, setLS4SundayDate] = useState("");
const [LS4SundayMain, setLS4SundayMain] = useState("");
const [LS4SundayMainHead, setLS4SundayMainHead] = useState("");
const [LS4undayMonth, setLS4SundayMonth] = useState("");

const [LS4MondayHead, setLS4MondayHead] = useState("");
const [LS4MondayDate, setLS4MondayDate] = useState("");
const [LS4MondayMain, setLS4MondayMain] = useState("");
const [LS4MondayMainHead, setLS4MondayMainHead] = useState("");
const [LS4MondayMonth, setLS4MondayMonth] = useState("");

const [LS4TuesdayHead, setLS4TuesdayHead] = useState("");
const [LS4TuesdayDate, setLS4TuesdayDate] = useState("");
const [LS4TuesdayMain, setLS4TuesdayMain] = useState("");
const [LS4TuesdayMainHead, setLS4TuesdayMainHead] = useState("");
const [LS4TuesdayMonth, setLS4TuesdayMonth] = useState("");

const [LS4WednesdayHead, setLS4WednesdayHead] = useState("");
const [LS4WednesdayDate, setLS4WednesdayDate] = useState("");
const [LS4WednesdayMain, setLS4WednesdayMain] = useState("");
const [LS4WednesdayMainHead, setLS4WednesdayMainHead] = useState("");
const [LS4WednesdayMonth, setLS4WednesdayMonth] = useState("");

const [LS4ThursdayHead, setLS4ThursdayHead] = useState("");
const [LS4ThursdayDate, setLS4ThursdayDate] = useState("");
const [LS4ThursdayMain, setLS4ThursdayMain] = useState("");
const [LS4ThursdayMainHead, setLS4ThursdayMainHead] = useState("");
const [LS4ThurdayMonth, setLS4ThursdayMonth] = useState("");

const [LS4FridayHead, setLS4FridayHead] = useState("");
const [LS4FridayDate, setLS4FridayDate] = useState("");
const [LS4FridayMain, setLS4FridayMain] = useState("");
const [LS4FridayMainHead, setLS4FridayMainHead] = useState("");
const [LS4FridayMMonth, setLS4FridayMonth] = useState("");

/*LESSON 5*/

const [LS5Num, setLS5Num] = useState("");
const [LS5HeadTxt, setLS5HeadTxt] = useState("");
const [LS5HeadDate, setLS5HeadDate] = useState("");
const [LS5SabbathHead, setLS5SabbathHead] = useState("");
const [LS5SabbathDate, setLS5SabbathDate] = useState("");
const [LS5SabbathMain, setLS5SabbathMain] = useState("");
const [LS5SabbathMainHead, setLS5SabbathMainHead] = useState("");
const [LS5SabbathMonth, setLS5SabbathMonth] = useState("");

const [LS5SundayHead, setLS5SundayHead] = useState("");
const [LS5SundayDate, setLS5SundayDate] = useState("");
const [LS5SundayMain, setLS5SundayMain] = useState("");
const [LS5SundayMainHead, setLS5SundayMainHead] = useState("");
const [LS5undayMonth, setLS5SundayMonth] = useState("");

const [LS5MondayHead, setLS5MondayHead] = useState("");
const [LS5MondayDate, setLS5MondayDate] = useState("");
const [LS5MondayMain, setLS5MondayMain] = useState("");
const [LS5MondayMainHead, setLS5MondayMainHead] = useState("");
const [LS5MondayMonth, setLS5MondayMonth] = useState("");

const [LS5TuesdayHead, setLS5TuesdayHead] = useState("");
const [LS5TuesdayDate, setLS5TuesdayDate] = useState("");
const [LS5TuesdayMain, setLS5TuesdayMain] = useState("");
const [LS5TuesdayMainHead, setLS5TuesdayMainHead] = useState("");
const [LS5TuesdayMonth, setLS5TuesdayMonth] = useState("");

const [LS5WednesdayHead, setLS5WednesdayHead] = useState("");
const [LS5WednesdayDate, setLS5WednesdayDate] = useState("");
const [LS5WednesdayMain, setLS5WednesdayMain] = useState("");
const [LS5WednesdayMainHead, setLS5WednesdayMainHead] = useState("");
const [LS5WednesdayMonth, setLS5WednesdayMonth] = useState("");

const [LS5ThursdayHead, setLS5ThursdayHead] = useState("");
const [LS5ThursdayDate, setLS5ThursdayDate] = useState("");
const [LS5ThursdayMain, setLS5ThursdayMain] = useState("");
const [LS5ThursdayMainHead, setLS5ThursdayMainHead] = useState("");
const [LS5ThurdayMonth, setLS5ThursdayMonth] = useState("");

const [LS5FridayHead, setLS5FridayHead] = useState("");
const [LS5FridayDate, setLS5FridayDate] = useState("");
const [LS5FridayMain, setLS5FridayMain] = useState("");
const [LS5FridayMainHead, setLS5FridayMainHead] = useState("");
const [LS5FridayMMonth, setLS5FridayMonth] = useState("");


/*LESSON 6*/

const [LS6Num, setLS6Num] = useState("");
const [LS6HeadTxt, setLS6HeadTxt] = useState("");
const [LS6HeadDate, setLS6HeadDate] = useState("");
const [LS6SabbathHead, setLS6SabbathHead] = useState("");
const [LS6SabbathDate, setLS6SabbathDate] = useState("");
const [LS6SabbathMain, setLS6SabbathMain] = useState("");
const [LS6SabbathMainHead, setLS6SabbathMainHead] = useState("");
const [LS6SabbathMonth, setLS6SabbathMonth] = useState("");

const [LS6SundayHead, setLS6SundayHead] = useState("");
const [LS6SundayDate, setLS6SundayDate] = useState("");
const [LS6SundayMain, setLS6SundayMain] = useState("");
const [LS6SundayMainHead, setLS6SundayMainHead] = useState("");
const [LS6undayMonth, setLS6SundayMonth] = useState("");

const [LS6MondayHead, setLS6MondayHead] = useState("");
const [LS6MondayDate, setLS6MondayDate] = useState("");
const [LS6MondayMain, setLS6MondayMain] = useState("");
const [LS6MondayMainHead, setLS6MondayMainHead] = useState("");
const [LS6MondayMonth, setLS6MondayMonth] = useState("");

const [LS6TuesdayHead, setLS6TuesdayHead] = useState("");
const [LS6TuesdayDate, setLS6TuesdayDate] = useState("");
const [LS6TuesdayMain, setLS6TuesdayMain] = useState("");
const [LS6TuesdayMainHead, setLS6TuesdayMainHead] = useState("");
const [LS6TuesdayMonth, setLS6TuesdayMonth] = useState("");

const [LS6WednesdayHead, setLS6WednesdayHead] = useState("");
const [LS6WednesdayDate, setLS6WednesdayDate] = useState("");
const [LS6WednesdayMain, setLS6WednesdayMain] = useState("");
const [LS6WednesdayMainHead, setLS6WednesdayMainHead] = useState("");
const [LS6WednesdayMonth, setLS6WednesdayMonth] = useState("");

const [LS6ThursdayHead, setLS6ThursdayHead] = useState("");
const [LS6ThursdayDate, setLS6ThursdayDate] = useState("");
const [LS6ThursdayMain, setLS6ThursdayMain] = useState("");
const [LS6ThursdayMainHead, setLS6ThursdayMainHead] = useState("");
const [LS6ThurdayMonth, setLS6ThursdayMonth] = useState("");

const [LS6FridayHead, setLS6FridayHead] = useState("");
const [LS6FridayDate, setLS6FridayDate] = useState("");
const [LS6FridayMain, setLS6FridayMain] = useState("");
const [LS6FridayMainHead, setLS6FridayMainHead] = useState("");
const [LS6FridayMMonth, setLS6FridayMonth] = useState("");


/*LESSON 7*/

const [LS7Num, setLS7Num] = useState("");
const [LS7HeadTxt, setLS7HeadTxt] = useState("");
const [LS7HeadDate, setLS7HeadDate] = useState("");
const [LS7SabbathHead, setLS7SabbathHead] = useState("");
const [LS7SabbathDate, setLS7SabbathDate] = useState("");
const [LS7SabbathMain, setLS7SabbathMain] = useState("");
const [LS7SabbathMainHead, setLS7SabbathMainHead] = useState("");
const [LS7SabbathMonth, setLS7SabbathMonth] = useState("");

const [LS7SundayHead, setLS7SundayHead] = useState("");
const [LS7SundayDate, setLS7SundayDate] = useState("");
const [LS7SundayMain, setLS7SundayMain] = useState("");
const [LS7SundayMainHead, setLS7SundayMainHead] = useState("");
const [LS7undayMonth, setLS7SundayMonth] = useState("");

const [LS7MondayHead, setLS7MondayHead] = useState("");
const [LS7MondayDate, setLS7MondayDate] = useState("");
const [LS7MondayMain, setLS7MondayMain] = useState("");
const [LS7MondayMainHead, setLS7MondayMainHead] = useState("");
const [LS7MondayMonth, setLS7MondayMonth] = useState("");

const [LS7TuesdayHead, setLS7TuesdayHead] = useState("");
const [LS7TuesdayDate, setLS7TuesdayDate] = useState("");
const [LS7TuesdayMain, setLS7TuesdayMain] = useState("");
const [LS7TuesdayMainHead, setLS7TuesdayMainHead] = useState("");
const [LS7TuesdayMonth, setLS7TuesdayMonth] = useState("");

const [LS7WednesdayHead, setLS7WednesdayHead] = useState("");
const [LS7WednesdayDate, setLS7WednesdayDate] = useState("");
const [LS7WednesdayMain, setLS7WednesdayMain] = useState("");
const [LS7WednesdayMainHead, setLS7WednesdayMainHead] = useState("");
const [LS7WednesdayMonth, setLS7WednesdayMonth] = useState("");

const [LS7ThursdayHead, setLS7ThursdayHead] = useState("");
const [LS7ThursdayDate, setLS7ThursdayDate] = useState("");
const [LS7ThursdayMain, setLS7ThursdayMain] = useState("");
const [LS7ThursdayMainHead, setLS7ThursdayMainHead] = useState("");
const [LS7ThurdayMonth, setLS7ThursdayMonth] = useState("");

const [LS7FridayHead, setLS7FridayHead] = useState("");
const [LS7FridayDate, setLS7FridayDate] = useState("");
const [LS7FridayMain, setLS7FridayMain] = useState("");
const [LS7FridayMainHead, setLS7FridayMainHead] = useState("");
const [LS7FridayMMonth, setLS7FridayMonth] = useState("");


/*LESSON 8*/

const [LS8Num, setLS8Num] = useState("");
const [LS8HeadTxt, setLS8HeadTxt] = useState("");
const [LS8HeadDate, setLS8HeadDate] = useState("");
const [LS8SabbathHead, setLS8SabbathHead] = useState("");
const [LS8SabbathDate, setLS8SabbathDate] = useState("");
const [LS8SabbathMain, setLS8SabbathMain] = useState("");
const [LS8SabbathMainHead, setLS8SabbathMainHead] = useState("");
const [LS8SabbathMonth, setLS8SabbathMonth] = useState("");

const [LS8SundayHead, setLS8SundayHead] = useState("");
const [LS8SundayDate, setLS8SundayDate] = useState("");
const [LS8SundayMain, setLS8SundayMain] = useState("");
const [LS8SundayMainHead, setLS8SundayMainHead] = useState("");
const [LS8undayMonth, setLS8SundayMonth] = useState("");

const [LS8MondayHead, setLS8MondayHead] = useState("");
const [LS8MondayDate, setLS8MondayDate] = useState("");
const [LS8MondayMain, setLS8MondayMain] = useState("");
const [LS8MondayMainHead, setLS8MondayMainHead] = useState("");
const [LS8MondayMonth, setLS8MondayMonth] = useState("");

const [LS8TuesdayHead, setLS8TuesdayHead] = useState("");
const [LS8TuesdayDate, setLS8TuesdayDate] = useState("");
const [LS8TuesdayMain, setLS8TuesdayMain] = useState("");
const [LS8TuesdayMainHead, setLS8TuesdayMainHead] = useState("");
const [LS8TuesdayMonth, setLS8TuesdayMonth] = useState("");

const [LS8WednesdayHead, setLS8WednesdayHead] = useState("");
const [LS8WednesdayDate, setLS8WednesdayDate] = useState("");
const [LS8WednesdayMain, setLS8WednesdayMain] = useState("");
const [LS8WednesdayMainHead, setLS8WednesdayMainHead] = useState("");
const [LS8WednesdayMonth, setLS8WednesdayMonth] = useState("");

const [LS8ThursdayHead, setLS8ThursdayHead] = useState("");
const [LS8ThursdayDate, setLS8ThursdayDate] = useState("");
const [LS8ThursdayMain, setLS8ThursdayMain] = useState("");
const [LS8ThursdayMainHead, setLS8ThursdayMainHead] = useState("");
const [LS8ThurdayMonth, setLS8ThursdayMonth] = useState("");

const [LS8FridayHead, setLS8FridayHead] = useState("");
const [LS8FridayDate, setLS8FridayDate] = useState("");
const [LS8FridayMain, setLS8FridayMain] = useState("");
const [LS8FridayMainHead, setLS8FridayMainHead] = useState("");
const [LS8FridayMMonth, setLS8FridayMonth] = useState("");

/*LESSON 9*/

const [LS9Num, setLS9Num] = useState("");
const [LS9HeadTxt, setLS9HeadTxt] = useState("");
const [LS9HeadDate, setLS9HeadDate] = useState("");
const [LS9SabbathHead, setLS9SabbathHead] = useState("");
const [LS9SabbathDate, setLS9SabbathDate] = useState("");
const [LS9SabbathMain, setLS9SabbathMain] = useState("");
const [LS9SabbathMainHead, setLS9SabbathMainHead] = useState("");
const [LS9SabbathMonth, setLS9SabbathMonth] = useState("");

const [LS9SundayHead, setLS9SundayHead] = useState("");
const [LS9SundayDate, setLS9SundayDate] = useState("");
const [LS9SundayMain, setLS9SundayMain] = useState("");
const [LS9SundayMainHead, setLS9SundayMainHead] = useState("");
const [LS9undayMonth, setLS9SundayMonth] = useState("");

const [LS9MondayHead, setLS9MondayHead] = useState("");
const [LS9MondayDate, setLS9MondayDate] = useState("");
const [LS9MondayMain, setLS9MondayMain] = useState("");
const [LS9MondayMainHead, setLS9MondayMainHead] = useState("");
const [LS9MondayMonth, setLS9MondayMonth] = useState("");

const [LS9TuesdayHead, setLS9TuesdayHead] = useState("");
const [LS9TuesdayDate, setLS9TuesdayDate] = useState("");
const [LS9TuesdayMain, setLS9TuesdayMain] = useState("");
const [LS9TuesdayMainHead, setLS9TuesdayMainHead] = useState("");
const [LS9TuesdayMonth, setLS9TuesdayMonth] = useState("");

const [LS9WednesdayHead, setLS9WednesdayHead] = useState("");
const [LS9WednesdayDate, setLS9WednesdayDate] = useState("");
const [LS9WednesdayMain, setLS9WednesdayMain] = useState("");
const [LS9WednesdayMainHead, setLS9WednesdayMainHead] = useState("");
const [LS9WednesdayMonth, setLS9WednesdayMonth] = useState("");

const [LS9ThursdayHead, setLS9ThursdayHead] = useState("");
const [LS9ThursdayDate, setLS9ThursdayDate] = useState("");
const [LS9ThursdayMain, setLS9ThursdayMain] = useState("");
const [LS9ThursdayMainHead, setLS9ThursdayMainHead] = useState("");
const [LS9ThurdayMonth, setLS9ThursdayMonth] = useState("");

const [LS9FridayHead, setLS9FridayHead] = useState("");
const [LS9FridayDate, setLS9FridayDate] = useState("");
const [LS9FridayMain, setLS9FridayMain] = useState("");
const [LS9FridayMainHead, setLS9FridayMainHead] = useState("");
const [LS9FridayMMonth, setLS9FridayMonth] = useState("");

/*LESSON 10*/

const [LS10Num, setLS10Num] = useState("");
const [LS10HeadTxt, setLS10HeadTxt] = useState("");
const [LS10HeadDate, setLS10HeadDate] = useState("");
const [LS10SabbathHead, setLS10SabbathHead] = useState("");
const [LS10SabbathDate, setLS10SabbathDate] = useState("");
const [LS10SabbathMain, setLS10SabbathMain] = useState("");
const [LS10SabbathMainHead, setLS10SabbathMainHead] = useState("");
const [LS10SabbathMonth, setLS10SabbathMonth] = useState("");

const [LS10SundayHead, setLS10SundayHead] = useState("");
const [LS10SundayDate, setLS10SundayDate] = useState("");
const [LS10SundayMain, setLS10SundayMain] = useState("");
const [LS10SundayMainHead, setLS10SundayMainHead] = useState("");
const [LS10undayMonth, setLS10SundayMonth] = useState("");

const [LS10MondayHead, setLS10MondayHead] = useState("");
const [LS10MondayDate, setLS10MondayDate] = useState("");
const [LS10MondayMain, setLS10MondayMain] = useState("");
const [LS10MondayMainHead, setLS10MondayMainHead] = useState("");
const [LS10MondayMonth, setLS10MondayMonth] = useState("");

const [LS10TuesdayHead, setLS10TuesdayHead] = useState("");
const [LS10TuesdayDate, setLS10TuesdayDate] = useState("");
const [LS10TuesdayMain, setLS10TuesdayMain] = useState("");
const [LS10TuesdayMainHead, setLS10TuesdayMainHead] = useState("");
const [LS10TuesdayMonth, setLS10TuesdayMonth] = useState("");

const [LS10WednesdayHead, setLS10WednesdayHead] = useState("");
const [LS10WednesdayDate, setLS10WednesdayDate] = useState("");
const [LS10WednesdayMain, setLS10WednesdayMain] = useState("");
const [LS10WednesdayMainHead, setLS10WednesdayMainHead] = useState("");
const [LS10WednesdayMonth, setLS10WednesdayMonth] = useState("");

const [LS10ThursdayHead, setLS10ThursdayHead] = useState("");
const [LS10ThursdayDate, setLS10ThursdayDate] = useState("");
const [LS10ThursdayMain, setLS10ThursdayMain] = useState("");
const [LS10ThursdayMainHead, setLS10ThursdayMainHead] = useState("");
const [LS10ThurdayMonth, setLS10ThursdayMonth] = useState("");

const [LS10FridayHead, setLS10FridayHead] = useState("");
const [LS10FridayDate, setLS10FridayDate] = useState("");
const [LS10FridayMain, setLS10FridayMain] = useState("");
const [LS10FridayMainHead, setLS10FridayMainHead] = useState("");
const [LS10FridayMMonth, setLS10FridayMonth] = useState("");


/*LESSON 11*/

const [LS11Num, setLS11Num] = useState("");
const [LS11HeadTxt, setLS11HeadTxt] = useState("");
const [LS11HeadDate, setLS11HeadDate] = useState("");
const [LS11SabbathHead, setLS11SabbathHead] = useState("");
const [LS11SabbathDate, setLS11SabbathDate] = useState("");
const [LS11SabbathMain, setLS11SabbathMain] = useState("");
const [LS11SabbathMainHead, setLS11SabbathMainHead] = useState("");
const [LS11SabbathMonth, setLS11SabbathMonth] = useState("");

const [LS11SundayHead, setLS11SundayHead] = useState("");
const [LS11SundayDate, setLS11SundayDate] = useState("");
const [LS11SundayMain, setLS11SundayMain] = useState("");
const [LS11SundayMainHead, setLS11SundayMainHead] = useState("");
const [LS11undayMonth, setLS11SundayMonth] = useState("");

const [LS11MondayHead, setLS11MondayHead] = useState("");
const [LS11MondayDate, setLS11MondayDate] = useState("");
const [LS11MondayMain, setLS11MondayMain] = useState("");
const [LS11MondayMainHead, setLS11MondayMainHead] = useState("");
const [LS11MondayMonth, setLS11MondayMonth] = useState("");

const [LS11TuesdayHead, setLS11TuesdayHead] = useState("");
const [LS11TuesdayDate, setLS11TuesdayDate] = useState("");
const [LS11TuesdayMain, setLS11TuesdayMain] = useState("");
const [LS11TuesdayMainHead, setLS11TuesdayMainHead] = useState("");
const [LS11TuesdayMonth, setLS11TuesdayMonth] = useState("");

const [LS11WednesdayHead, setLS11WednesdayHead] = useState("");
const [LS11WednesdayDate, setLS11WednesdayDate] = useState("");
const [LS11WednesdayMain, setLS11WednesdayMain] = useState("");
const [LS11WednesdayMainHead, setLS11WednesdayMainHead] = useState("");
const [LS11WednesdayMonth, setLS11WednesdayMonth] = useState("");

const [LS11ThursdayHead, setLS11ThursdayHead] = useState("");
const [LS11ThursdayDate, setLS11ThursdayDate] = useState("");
const [LS11ThursdayMain, setLS11ThursdayMain] = useState("");
const [LS11ThursdayMainHead, setLS11ThursdayMainHead] = useState("");
const [LS11ThurdayMonth, setLS11ThursdayMonth] = useState("");

const [LS11FridayHead, setLS11FridayHead] = useState("");
const [LS11FridayDate, setLS11FridayDate] = useState("");
const [LS11FridayMain, setLS11FridayMain] = useState("");
const [LS11FridayMainHead, setLS11FridayMainHead] = useState("");
const [LS11FridayMMonth, setLS11FridayMonth] = useState("");

/*LESSON 12*/

const [LS12Num, setLS12Num] = useState("");
const [LS12HeadTxt, setLS12HeadTxt] = useState("");
const [LS12HeadDate, setLS12HeadDate] = useState("");
const [LS12SabbathHead, setLS12SabbathHead] = useState("");
const [LS12SabbathDate, setLS12SabbathDate] = useState("");
const [LS12SabbathMain, setLS12SabbathMain] = useState("");
const [LS12SabbathMainHead, setLS12SabbathMainHead] = useState("");
const [LS12SabbathMonth, setLS12SabbathMonth] = useState("");

const [LS12SundayHead, setLS12SundayHead] = useState("");
const [LS12SundayDate, setLS12SundayDate] = useState("");
const [LS12SundayMain, setLS12SundayMain] = useState("");
const [LS12SundayMainHead, setLS12SundayMainHead] = useState("");
const [LS12undayMonth, setLS12SundayMonth] = useState("");

const [LS12MondayHead, setLS12MondayHead] = useState("");
const [LS12MondayDate, setLS12MondayDate] = useState("");
const [LS12MondayMain, setLS12MondayMain] = useState("");
const [LS12MondayMainHead, setLS12MondayMainHead] = useState("");
const [LS12MondayMonth, setLS12MondayMonth] = useState("");

const [LS12TuesdayHead, setLS12TuesdayHead] = useState("");
const [LS12TuesdayDate, setLS12TuesdayDate] = useState("");
const [LS12TuesdayMain, setLS12TuesdayMain] = useState("");
const [LS12TuesdayMainHead, setLS12TuesdayMainHead] = useState("");
const [LS12TuesdayMonth, setLS12TuesdayMonth] = useState("");

const [LS12WednesdayHead, setLS12WednesdayHead] = useState("");
const [LS12WednesdayDate, setLS12WednesdayDate] = useState("");
const [LS12WednesdayMain, setLS12WednesdayMain] = useState("");
const [LS12WednesdayMainHead, setLS12WednesdayMainHead] = useState("");
const [LS12WednesdayMonth, setLS12WednesdayMonth] = useState("");

const [LS12ThursdayHead, setLS12ThursdayHead] = useState("");
const [LS12ThursdayDate, setLS12ThursdayDate] = useState("");
const [LS12ThursdayMain, setLS12ThursdayMain] = useState("");
const [LS12ThursdayMainHead, setLS12ThursdayMainHead] = useState("");
const [LS12ThurdayMonth, setLS12ThursdayMonth] = useState("");

const [LS12FridayHead, setLS12FridayHead] = useState("");
const [LS12FridayDate, setLS12FridayDate] = useState("");
const [LS12FridayMain, setLS12FridayMain] = useState("");
const [LS12FridayMainHead, setLS12FridayMainHead] = useState("");
const [LS12FridayMMonth, setLS12FridayMonth] = useState("");


/*LESSON 13*/

const [LS13Num, setLS13Num] = useState("");
const [LS13HeadTxt, setLS13HeadTxt] = useState("");
const [LS13HeadDate, setLS13HeadDate] = useState("");
const [LS13SabbathHead, setLS13SabbathHead] = useState("");
const [LS13SabbathDate, setLS13SabbathDate] = useState("");
const [LS13SabbathMain, setLS13SabbathMain] = useState("");
const [LS13SabbathMainHead, setLS13SabbathMainHead] = useState("");
const [LS13SabbathMonth, setLS13SabbathMonth] = useState("");

const [LS13SundayHead, setLS13SundayHead] = useState("");
const [LS13SundayDate, setLS13SundayDate] = useState("");
const [LS13SundayMain, setLS13SundayMain] = useState("");
const [LS13SundayMainHead, setLS13SundayMainHead] = useState("");
const [LS13undayMonth, setLS13SundayMonth] = useState("");

const [LS13MondayHead, setLS13MondayHead] = useState("");
const [LS13MondayDate, setLS13MondayDate] = useState("");
const [LS13MondayMain, setLS13MondayMain] = useState("");
const [LS13MondayMainHead, setLS13MondayMainHead] = useState("");
const [LS13MondayMonth, setLS13MondayMonth] = useState("");

const [LS13TuesdayHead, setLS13TuesdayHead] = useState("");
const [LS13TuesdayDate, setLS13TuesdayDate] = useState("");
const [LS13TuesdayMain, setLS13TuesdayMain] = useState("");
const [LS13TuesdayMainHead, setLS13TuesdayMainHead] = useState("");
const [LS13TuesdayMonth, setLS13TuesdayMonth] = useState("");

const [LS13WednesdayHead, setLS13WednesdayHead] = useState("");
const [LS13WednesdayDate, setLS13WednesdayDate] = useState("");
const [LS13WednesdayMain, setLS13WednesdayMain] = useState("");
const [LS13WednesdayMainHead, setLS13WednesdayMainHead] = useState("");
const [LS13WednesdayMonth, setLS13WednesdayMonth] = useState("");

const [LS13ThursdayHead, setLS13ThursdayHead] = useState("");
const [LS13ThursdayDate, setLS13ThursdayDate] = useState("");
const [LS13ThursdayMain, setLS13ThursdayMain] = useState("");
const [LS13ThursdayMainHead, setLS13ThursdayMainHead] = useState("");
const [LS13ThurdayMonth, setLS13ThursdayMonth] = useState("");

const [LS13FridayHead, setLS13FridayHead] = useState("");
const [LS13FridayDate, setLS13FridayDate] = useState("");
const [LS13FridayMain, setLS13FridayMain] = useState("");
const [LS13FridayMainHead, setLS13FridayMainHead] = useState("");
const [LS13FridayMMonth, setLS13FridayMonth] = useState("");


/*LESSON 14*/

/*
const [LS14Num, setLS14Num] = useState("");
const [LS14HeadTxt, setLS14HeadTxt] = useState("");
const [LS14HeadDate, setLS14HeadDate] = useState("");
const [LS14SabbathHead, setLS14SabbathHead] = useState("");
const [LS14SabbathDate, setLS14SabbathDate] = useState("");
const [LS14SabbathMain, setLS14SabbathMain] = useState("");
const [LS14SabbathMainHead, setLS14SabbathMainHead] = useState("");
const [LS14SabbathMonth, setLS14SabbathMonth] = useState("");

const [LS14SundayHead, setLS14SundayHead] = useState("");
const [LS14SundayDate, setLS14SundayDate] = useState("");
const [LS14SundayMain, setLS14SundayMain] = useState("");
const [LS14SundayMainHead, setLS14SundayMainHead] = useState("");
const [LS14undayMonth, setLS14SundayMonth] = useState("");

const [LS14MondayHead, setLS14MondayHead] = useState("");
const [LS14MondayDate, setLS14MondayDate] = useState("");
const [LS14MondayMain, setLS14MondayMain] = useState("");
const [LS14MondayMainHead, setLS14MondayMainHead] = useState("");
const [LS14MondayMonth, setLS14MondayMonth] = useState("");

const [LS14TuesdayHead, setLS14TuesdayHead] = useState("");
const [LS14TuesdayDate, setLS14TuesdayDate] = useState("");
const [LS14TuesdayMain, setLS14TuesdayMain] = useState("");
const [LS14TuesdayMainHead, setLS14TuesdayMainHead] = useState("");
const [LS14TuesdayMonth, setLS14TuesdayMonth] = useState("");

const [LS14WednesdayHead, setLS14WednesdayHead] = useState("");
const [LS14WednesdayDate, setLS14WednesdayDate] = useState("");
const [LS14WednesdayMain, setLS14WednesdayMain] = useState("");
const [LS14WednesdayMainHead, setLS14WednesdayMainHead] = useState("");
const [LS14WednesdayMonth, setLS14WednesdayMonth] = useState("");

const [LS14ThursdayHead, setLS14ThursdayHead] = useState("");
const [LS14ThursdayDate, setLS14ThursdayDate] = useState("");
const [LS14ThursdayMain, setLS14ThursdayMain] = useState("");
const [LS14ThursdayMainHead, setLS14ThursdayMainHead] = useState("");
const [LS14ThurdayMonth, setLS14ThursdayMonth] = useState("");

const [LS14FridayHead, setLS14FridayHead] = useState("");
const [LS14FridayDate, setLS14FridayDate] = useState("");
const [LS14FridayMain, setLS14FridayMain] = useState("");
const [LS14FridayMainHead, setLS14FridayMainHead] = useState("");
const [LS14FridayMMonth, setLS14FridayMonth] = useState("");
 */


useEffect(() =>{
async function LoadLessons()
{
  const fileUri = FileSystem.documentDirectory+"/.Sabbath_School";

  try {
      const fileContent = await readAsStringAsync(fileUri);
      console.log('File content:', fileContent);
  } catch (error) {
      console.error('Error reading file:', error);
  }

}

LoadLessons()
},[])



}



export default LessonsData2;