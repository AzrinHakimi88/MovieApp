import React from 'react'
import {View,Text, FlatList, ActivityIndicator, TextInput, Image, TouchableOpacity} from 'react-native'
import useFetch from '../hooks/useFetch'
import PopularMovieCard from '../components/Card/PopularMovieCard'
import MovieShowCard from '../components/Card/MovieShowCard'

const HomePage = () => {
    const [isLoading, error, data] = useFetch({type: 'home'})

    const movieData = data

    if (isLoading) {
      return (
        <View style={{backgroundColor:'#000', justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size={'large'} />
        </View>
      );
    }
  
    return (
      <View>
        <FlatList       
          data={movieData}
          renderItem={({ item }) => <MovieShowCard type={'movie'} movie={item} />} // Pass each movie object as a prop
          keyExtractor={(item) => item.title} // Assuming 'imdbid' is unique for each movie
          style={{marginBottom: 150}}
        />
      </View>
    )
}

export default HomePage