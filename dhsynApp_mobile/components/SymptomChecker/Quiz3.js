import React, {useState} from 'react';
import {View} from 'react-native';
import {Button, CheckBox, Text} from 'react-native-elements';
import DismissKeyboard from '../DismissKeyboard';

const Quiz3 = (props) => {
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
                    Bạn có bị sưng môi, mặt, lưỡi, miệng hoặc cổ họng nhanh chóng không?
                </Text>
                <Text
                    style={{
                        textAlign: 'center',
                        marginVertical: 10,
                        marginBottom: 30,
                        paddingHorizontal: 20
                    }}
                >
                    Triệu chứng xuất hiện trong vài giây hoặc vài phút, không quá vài giờ. </Text>

                <View style={{marginBottom: 30}}>
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
                        props.onNext(4);
                    }}
                />
            </View>
        </DismissKeyboard>
    );
};

export default Quiz3;
