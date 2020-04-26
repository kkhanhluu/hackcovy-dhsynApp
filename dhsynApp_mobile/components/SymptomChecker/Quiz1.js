import React from 'react';
import { View } from 'react-native';
import { Text, Button, Input, CheckBox } from 'react-native-elements';
import DismissKeyboard from '../DismissKeyboard';

const Quiz1 = (props) => (
  <DismissKeyboard>
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#fff',
      }}
    >
      <Text
        h4
        style={{
          textAlign: 'center',
          marginVertical: 15,
          color: '#0E76A8',
          padding: 20,
        }}
      >
        Hãy cho biết trình trạng sức khỏe của bạn
      </Text>

      <View style={{ marginBottom: 30 }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: '#777',
            marginLeft: 10,
            marginBottom: 10,
          }}
        >
          Giới tính
        </Text>
        <CheckBox
          title='Nam'
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          checked={props.gender === 'male'}
          onPress={() => props.onGenderChange('male')}
        />
        <CheckBox
          title='Nữ'
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          checked={props.gender === 'female'}
          onPress={() => props.onGenderChange('female')}
        />
      </View>

      <Input
        placeholder='20'
        label='Tuổi'
        leftIconContainerStyle={{
          marginLeft: -2,
          marginRight: 10,
        }}
        labelStyle={{
          marginBottom: 5,
          fontSize: 18,
        }}
        onChangeText={(age) => props.onAgeChange(age)}
      />
      <Button
        title='Tiếp theo'
        style={{
          width: 300,
          alignSelf: 'center',
          marginTop: 30,
        }}
        onPress={() => {
          props.onNext(2);
        }}
      />
    </View>
  </DismissKeyboard>
);

export default Quiz1;
