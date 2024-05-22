import React from 'react';
import { Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const GradientText = ({ children, style }) => {
  return (
        <LinearGradient
          colors={['#F16938', '#D52027', '#AA4127']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          locations={[0.13, 0.488, 0.859]}
          style={{
            ...style,
            padding: 10, // Adjust padding as needed
            borderRadius:8
          }}
        >
      <Text style={{ color: '#fff', textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>{children}</Text>
    </LinearGradient>
  );
};

export default GradientText;
