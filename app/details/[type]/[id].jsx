import React from 'react';
import { View ,StyleSheet} from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import MovieDetail from '../../movieDetail/MovieDetail';
import ShowDetail from '../../showDetail/ShowDetail';

const Details = () => {
  const params = useLocalSearchParams();
  const isMovie = params.type === 'movie'; // Assuming you have a type parameter in your route params to distinguish between movie and show

  return (
    <View style={styles.container}>
      {isMovie ? <MovieDetail id={params.id} /> : <ShowDetail id={params.id} />}
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#000',
     alignItems: 'center',
   },
})
