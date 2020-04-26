import React from 'react';
import { View, Linking } from 'react-native';
import { Text, Button } from 'react-native-elements';
import DismissKeyboard from '../DismissKeyboard';

const SymptomCheckerResult = (props) => (
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
        {props.active
          ? 'Hãy báo cho cơ sở y tế ngay!'
          : 'Bạn không có vẻ nhiễm COVID-19'}
      </Text>
      {props.active ? (
        <Button
          title='GỌI CẤP CỨU'
          style={{
            width: 300,
            alignSelf: 'center',
            marginTop: 30,
          }}
          buttonStyle={{
            backgroundColor: '#f56c6c',
          }}
          onPress={() => {
            Linking.openURL(`tel:114`);
          }}
        />
      ) : (
        ''
      )}
      {/*<Button*/}
      {/*  title='Tiếp theo'*/}
      {/*  style={{*/}
      {/*    width: 300,*/}
      {/*    alignSelf: 'center',*/}
      {/*    marginTop: 30,*/}
      {/*  }}*/}
      {/*  onPress={() => {*/}
      {/*    props.onNext(0);*/}
      {/*  }}*/}
      {/*/>*/}
    </View>
  </DismissKeyboard>
);

export default SymptomCheckerResult;
