import React from 'react';
import { Text, View, Image, TouchableOpacity,StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const PopularShowCard = ( {movie} ) => {

    const router = useRouter()
    const movieData = movie

   

  return (
    <TouchableOpacity onPress={() => {router.push(`showDetail/${movieData._id}`)}} style={styles.showsCard}>
      <Image resizeMode='contain' source={{ uri: movieData.poster_path }} style={{ height: '95%', width:'30%'}} />
      <View style={{width: '70%'}}>
        <Text numberOfLines={2} style={{ color: '#fff',  fontWeight:'700', marginBottom:12 }}>{movieData.title}</Text>
        <Text numberOfLines={5}  style={styles.overview}>{movieData.overview}</Text>
      </View>
      
    </TouchableOpacity>
  );
}

export default PopularShowCard;


const styles = StyleSheet.create({
    showsCard:{
        height: 150,
        marginHorizontal:12,
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal:8,
    },
    overview:{
        color: '#fff',
    }
});