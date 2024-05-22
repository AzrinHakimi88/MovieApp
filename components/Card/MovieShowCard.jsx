import React from 'react';
import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { useRouter } from 'expo-router';

const MovieShowCard = ({ movie, type }) => {
    const router = useRouter();
    const movieData = movie;

    return (
        <View>
            <Text numberOfLines={2} style={{ color: '#fff', fontSize: 24, fontWeight: 'bold', margin: 12, marginLeft: 20 }}>{movieData.title}</Text>
            {movieData.movies && (
                <FlatList
                    data={movieData.movies}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => { router.push(`details/${item.contentType}/${item._id}`) }} style={{ height: 220, width: 100, marginRight: 16, marginLeft: 16 }}>
                            <Image resizeMode='cover' source={{ uri: item.poster_path }} style={{ height: '80%', width: '100%' }} />
                            <Text numberOfLines={2} style={{ color: '#fff', textAlign: 'center' }}>{item.title}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item._id}
                    horizontal
                />
            )}
        </View>
    );
}

export default MovieShowCard;
