import React, {useState} from 'react'
import {View,Text, TextInput, Image, TouchableOpacity} from 'react-native'
import { Stack } from 'expo-router'
import PopularShow from './PopularShow'
import PopularMovie from './PopularMovie'
import GradientText from '../constants/Gradient'
import SearchInput from '../components/SearchInput'
import HomePage from './HomePage'

const Home = () => {
    
 
    return (
      <View style={{flex:1,backgroundColor:'#000', paddingBottom:12 }}>
        <Stack.Screen 
            options={{
                headerStyle: {backgroundColor:'#000'},
                headerTitle: '',
                headerLeft: () => (
                    <Image source={require('../assets/images/movie.png')} width={24} height={24}/>
                )
            }}
        />
        <GradientText style={{ marginVertical: 20}}>
      Looking for something to watch???</GradientText>
        
        <SearchInput/>
            
        <HomePage/>
        
        {/* <PopularMovie/>

        <PopularShow/> */}
      </View>
    );
  }
  
  
  export default Home;