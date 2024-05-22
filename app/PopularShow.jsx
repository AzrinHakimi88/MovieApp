import React from 'react'
import {View,Text, FlatList, ActivityIndicator, TextInput, Image, TouchableOpacity} from 'react-native'
import useFetch from '../hooks/useFetch'
import PopularMovieCard from '../components/Card/PopularMovieCard'
import PopularShowCard from '../components/Card/PopularShowCard'

const PopularShow = () => {
    const [isLoading, error, data] = useFetch({type: 'shows'})

    const movieData = data.movies

    if (isLoading) {
      return (
        <View style={{backgroundColor:'#000', justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size={'large'} />
        </View>
      );
    }
  
    return (
      <View style={{margin:8}}>
        
        <Text style={{color:'#fff', fontSize:24, fontWeight:'bold' ,margin:12, marginLeft:20}}>Popular Shows</Text>
        <FlatList
          data={movieData}
          renderItem={({ item }) => <PopularShowCard movie={item} />} // Pass each movie object as a prop
          keyExtractor={(item) => item._id} // Assuming 'imdbid' is unique for each movie

        />


      </View>
    )
}

export default PopularShow