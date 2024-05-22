import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Image } from 'react-native';

const SearchInput = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (text) => {
    setSearchText(text);
  };

  const handleSearchSubmit = () => {
    // Handle search submit action here
    console.log('Search Text:', searchText);
  };

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        value={searchText}
        onChangeText={handleSearchChange}
        placeholder="Search..."
        style={{
          flex: 1,
          backgroundColor: '#fff',
          padding: 4,
          margin: 8,
          marginRight: 16,
          marginLeft: 16,
          borderRadius: 8,
        }}
      />
      <TouchableOpacity onPress={handleSearchSubmit} style={{ backgroundColor: 'red', padding: 8, borderRadius: 8 }}>
        <Image source={require('../assets/images/search.png')} style={{ width: 24, height: 24 }} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;


