import React, { useState, useEffect } from 'react';
import { View, Text, Slider, Box, Icon, Pressable, } from 'native-base';
import { Audio } from 'expo-av';
import {MaterialIcons, Ionicons} from '@expo/vector-icons';

const AudioPlayer = (props) => {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [positionMillis, setPositionMillis] = useState(0);
  const [durationMillis, setDurationMillis] = useState(0);

  useEffect(() => {

    async function loadSound() {
      console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync({uri: props.title } );
      setSound(sound);
  
      console.log('Playing Sound');
      //await sound.playAsync();
    }
  

    loadSound();
    
    sound.setOnPlaybackStatusUpdate((status) => {
      if (status.isLoaded) {
        setPositionMillis(status.positionMillis);
        setDurationMillis(status.durationMillis);
      }
    });
  }, []);

  const handleSeek = (value) => {
    // Seek to the specified position (value) in milliseconds
    sound.setPositionAsync(value);
  };

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);
  

  return (
    <Box>
      {/* Display seek bar */}
      <Pressable onPress={() =>{sound.PlayAsync()}}><Icon as={Ionicons} name="play-outline" size="xl" /></Pressable> <Slider
        minimumValue={0}
        maximumValue={durationMillis}
        value={positionMillis}
        onSlidingComplete={handleSeek}
      />

      {/* Display current time and total duration */}
      <Text>
        {formatTime(positionMillis)} / {formatTime(durationMillis)}
      </Text>

      {/* Other audio controls (play, pause, etc.) */}
      {/* ... */}
    </Box>
  );
};

// Helper function to format time (e.g., 00:00)
const formatTime = (milliseconds) => {
  // Implement your own logic here
  // ...
};

export default AudioPlayer;
