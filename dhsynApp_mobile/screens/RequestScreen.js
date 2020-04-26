import React, { useState } from 'react';
import { View } from 'react-native';
import { Input, Icon, Button, CheckBox } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import DismissKeyboard from '../components/DismissKeyboard';

const RequestScreen = (props) => {
  const [fullname, setFullname] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const [content, setContent] = useState('');
  const [isErmegent, setIsEmergent] = useState(false);

  const submitRequest = () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: {
        userId: 1,
        title: fullname,
        body: content,
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  return (
    <DismissKeyboard>
      <View
        style={{
          backgroundColor: '#fff',
          paddingTop: 30,
          paddingHorizontal: 10,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          flex: 1,
        }}
      >
        <View style={{ marginBottom: 30 }}>
          <Input
            placeholder='Nguyễn Văn A '
            leftIcon={<Icon name='ios-person' color='#517fa4' type='ionicon' />}
            label='Họ và tên '
            leftIconContainerStyle={{
              marginLeft: -2,
              marginRight: 10,
            }}
            labelStyle={{
              marginBottom: 5,
              fontSize: 18,
            }}
            onChangeText={(fullname) => setFullname(fullname)}
          />
        </View>

        <View style={{ marginBottom: 30, borderBottomWidth: 1 }}>
          <DatePicker
            style={{ width: 200 }}
            // date={state.date} //initial date from state
            mode='date' //The enum of date, datetime and time
            placeholder='Ngày sinh '
            format='DD-MM-YYYY'
            minDate='23-04-2020'
            maxDate='01-01-3019'
            confirmBtnText='Confirm'
            cancelBtnText='Cancel'
            iconComponent={
              <Icon
                name='ios-calendar'
                color='#517fa4'
                type='ionicon'
                iconStyle={{ position: 'absolute', left: -190 }}
              />
            }
            customStyles={{
              dateInput: {
                marginLeft: -40,
                borderWidth: 0,
                width: 300,
              },
            }}
            onDateChange={(date) => {
              setDateOfBirth(date);
            }}
          />
        </View>

        <View style={{ marginBottom: 30 }}>
          <Input
            multiline={true}
            numberOfLines={20}
            inputStyle={{
              height: 100,
              textAlignVertical: 'top',
            }}
            placeholder='Bạn muốn gửi yêu cầu gì? '
            leftIcon={<Icon name='ios-mail' color='#517fa4' type='ionicon' />}
            label='Nội dung yêu cầu '
            leftIconContainerStyle={{
              marginLeft: -2,
              marginRight: 10,
              marginTop: -70,
            }}
            labelStyle={{
              marginBottom: 5,
              fontSize: 18,
            }}
            onChangeText={(content) => setContent(content)}
          />
        </View>

        <View style={{ marginBottom: 30 }}>
          <Input
            placeholder='Số phòng '
            leftIcon={<Icon name='ios-bed' color='#517fa4' type='ionicon' />}
            label='Hiện tại bạn đang ở phòng nào? '
            leftIconContainerStyle={{
              marginLeft: -2,
              marginRight: 10,
            }}
            labelStyle={{
              marginBottom: 5,
              fontSize: 18,
            }}
            onChangeText={(roomNumber) => setRoomNumber(roomNumber)}
          />
        </View>

        <View style={{ marginBottom: 30 }}>
          <CheckBox
            title='Đây có phải yêu cầu khẩn cấp? '
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={isErmegent}
            onPress={() => setIsEmergent(!isErmegent)}
          />
        </View>

        <View style={{ marginBottom: 30 }}>
          <Button
            title='Gửi yêu cầu '
            icon={<Icon name='ios-send' color='white' type='ionicon' />}
            buttonStyle={{
              display: 'flex',
              alignItems: 'center',
            }}
            titleStyle={{ marginLeft: 10 }}
            onPress={() => submitRequest()}
          />
        </View>
      </View>
    </DismissKeyboard>
  );
};

export default RequestScreen;
