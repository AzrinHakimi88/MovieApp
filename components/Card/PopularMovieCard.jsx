import React from 'react';
import { Text, View, Image, TouchableOpacity, } from 'react-native';
import { useRouter } from 'expo-router';

const PopularMovieCard = ( {movie,type} ) => {

    const router = useRouter()
    const movieData = movie

   

  return (
    <TouchableOpacity onPress={() => {router.push(`movieDetail/${movieData._id}`)}} style={{ height: 220, width: 100, marginRight:16, marginLeft:16  }}>
      <Image resizeMode='cover' source={{ uri: movieData.poster_path }} style={{ height: '80%', width: '100%' }} />
      <Text numberOfLines={2} style={{ color: '#fff', textAlign: 'center' }}>{movieData.title}</Text>
    </TouchableOpacity>
  );
}

export default PopularMovieCard;
