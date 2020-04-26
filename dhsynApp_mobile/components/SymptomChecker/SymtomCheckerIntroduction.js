import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Image, Text, Button } from 'react-native-elements';

const SymtompCheckerIntroduction = (props) => (
  <View
    style={{
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      backgroundColor: '#fff',
    }}
  >
    <Image
      source={require('../../assets/images/medical_care.png')}
      style={{ height: 300 }}
      PlaceholderContent={<ActivityIndicator />}
    />

    <Text
      h3
      style={{ textAlign: 'center', marginVertical: 15, color: '#0E76A8' }}
    >
      Kiểm tra triệu chứng
    </Text>
    <Text style={{ textAlign: 'center', padding: 30 }}>
        Nếu bạn đang băn khoăn liệu mình có mắc COVID-19, hãy sử dụng chức năng này.
    </Text>
    <Button
      title='Làm kiểm tra'
      style={{
        width: 300,
        alignSelf: 'center',
        marginTop: 30,
      }}
      onPress={() => props.onNext(1)}
    />
  </View>
);

export default SymtompCheckerIntroduction;
