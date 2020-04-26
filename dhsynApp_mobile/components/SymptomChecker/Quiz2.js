import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, Button, Input, CheckBox } from 'react-native-elements';
import DismissKeyboard from '../DismissKeyboard';

const Quiz2 = (props) => {
  const [answer, setAnswer] = useState('');
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
        <Text
          h4
          style={{
            textAlign: 'center',
            marginVertical: 15,
            color: '#0E76A8',
            padding: 20,
          }}
        >
            Bạn có đang khó thở, hoặc khó thở hơn bình thường từ khi vấn đề này bắt đầu?

        </Text>
        <Text
          style={{
            textAlign: 'center',
            marginVertical: 10,
            marginBottom: 30,
            paddingHorizontal: 20
          }}
        >
            Ví dụ, bạn đang thở hổn hển hoặc đau tức phổi?
        </Text>

        <View style={{ marginBottom: 30 }}>
          <CheckBox
            title='Có'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={answer === 'yes'}
            onPress={() => setAnswer('yes')}
          />
          <CheckBox
            title='Không'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={answer === 'no'}
            onPress={() => setAnswer('no')}
          />
        </View>

        <Button
          title='Tiếp theo'
          style={{
            width: 300,
            alignSelf: 'center',
            marginTop: 30,
          }}
          onPress={() => {
            if (answer === 'yes') {
              props.onYes();
            }
            props.onNext(3);
          }}
        />
      </View>
    </DismissKeyboard>
  );
};

export default Quiz2;
