import React, { useEffect } from 'react';
import { useLocalSearchParams, Stack } from 'expo-router';
import { Text, View, ActivityIndicator, ImageBackground, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import fetchMovieDetail from '../../hooks/fetchDetailData';

const MovieDetail = ({id}) => {
  const params = useLocalSearchParams();
  const [isLoading, error, data, fetchData] = fetchMovieDetail({type:'movie', id: id });

  useEffect(() => {
    fetchData(); // Fetch data when component mounts
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size={'large'} />
        <Stack.Screen
        options={{
            headerStyle: { backgroundColor: '#000' },
            headerTitleStyle: { color: '#fff' }, // Style for header title
            headerTintColor: '#fff', // Color of the navigate up button
            headerTitle: '', // Empty header title
        }}
        />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center' }}>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  if (!data || !data.movie || !data.movie.poster_path || !data.movie.backdrop_path) {
    return null; // Render nothing if data is not available or poster_path is missing
  }

  const movieDetail = data.movie;

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
            headerStyle: { backgroundColor: '#000' },
            headerTitleStyle: { color: '#fff' }, // Style for header title
            headerTintColor: '#fff', // Color of the navigate up button
            headerTitle: movieDetail.title, // Empty header title
        }}
        />

      {/* Background Image with Blur */}
      <ImageBackground
        resizeMode='cover'
        source={{ uri: movieDetail.backdrop_path }}
        style={styles.backdrop}
        blurRadius={4} // Adjust blur radius as needed
      >
        {/* Content */}
        <View style={styles.overlay}>
          <Image resizeMode='contain' source={{ uri: movieDetail.poster_path }} style={styles.poster} />
          <View style={styles.detailBg}>
            <Text style={styles.title}>{movieDetail.title}</Text>
            <Text style={styles.overview}>{movieDetail.overview}</Text>
            <View>
                <TouchableOpacity style={styles.trailerBtn} onPress={() => {Linking.openURL(movieDetail.youtube_trailer)}}>
                    <Text style={styles.trailerBtnText}>Watch Trailer</Text>
                </TouchableOpacity>
            </View>
          </View>
          
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  backdrop: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  overlay: {
    padding: 20,
    alignItems: 'center',
  },
  poster: {
    height: 400,
    width: 200,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  overview: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
  },
  detailBg:{
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 20,
    alignItems: 'center',
  },
  trailerBtn:{
    backgroundColor: 'red',
    paddingHorizontal: 20,
    paddingVertical: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  trailerBtnText:{
    color: '#fff',
    fontWeight: '500'
  }
});

export default MovieDetail;



