import React, { useState } from 'react';
import { View, ActivityIndicator, TextInput, Alert } from 'react-native';
import { Image, Text, Button } from 'react-native-elements';
import DismissKeyboard from '../components/DismissKeyboard';

const EnterPasswordScreen = (props) => {
  const [password, setPassword] = useState('');

  return (
    <DismissKeyboard>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          backgroundColor: '#fff',
        }}
      >
        <Image
          source={require('../assets/images/security.png')}
          style={{ height: 200, marginBottom: 10 }}
          PlaceholderContent={<ActivityIndicator />}
        />

        <Text
          h3
          style={{ textAlign: 'center', marginVertical: 15, color: '#0E76A8' }}
        >
          Nhập mật khẩu
        </Text>
        <Text style={{ textAlign: 'center', padding: 30, paddingTop: 10 }}>
          Hãy nhập mật khẩu của khu cách ly, nơi bạn đang ở, để tiếp tục sử
          dụng.
        </Text>

        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 10,
            width: 300,
            alignSelf: 'center',
            padding: 10,
          }}
          secureTextEntry={true}
          placeholder='Mật khẩu'
          autoCompleteType='password'
          onChangeText={(text) => setPassword(text)}
          value={password}
        />

        <Button
          title='Xác nhận'
          style={{
            width: 300,
            alignSelf: 'center',
            marginTop: 40,
          }}
          onPress={() => {
            if (password === 'hanoi123') {
              props.navigation.navigate('HomeScreen');
            } else {
              Alert.alert(
                'Mật khẩu không đúng!',
                'Xin vui lòng kiểm tra lại mật khẩu',
                [
                  {
                    text: 'OK',
                    onPress: () => console.log('OK Pressed'),
                    style: 'cancel',
                  },
                ],
                { cancelable: false }
              );
            }
          }}
        />
      </View>
    </DismissKeyboard>
  );
};
export default EnterPasswordScreen;
