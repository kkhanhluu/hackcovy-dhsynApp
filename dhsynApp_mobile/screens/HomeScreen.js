import * as React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

export default class HomeScreen extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { route, navigation } = this.props;
    // navigation.setOptions({title: route.params.myParam});
    return (
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          backgroundColor: '#fff',
          flex: 1,
          padding: 10,
          paddingVertical: 30,
        }}
      >
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <TouchableOpacity
            activeOpacity={0.2}
            onPress={() => navigation.navigate('PostScreen')}
            style={styles.shadow}
          >
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderWidth: 2,
                borderRadius: 10,
                padding: 10,
                backgroundColor: '#fff',
                borderColor: 'white',
                width: 170,
              }}
            >
              <Text
                style={{
                  marginRight: 10,
                  textTransform: 'uppercase',
                  maxWidth: 100,
                }}
              >
                Bảng tin
              </Text>
              <Image
                source={require('../assets/images/new_icon/posts.png')}
                style={{ width: 80, height: 80 }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.2}
            onPress={() => navigation.navigate('SymptomCheckScreen')}
            style={styles.shadow}
          >
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderWidth: 2,
                borderRadius: 10,
                padding: 10,
                backgroundColor: '#fff',
                borderColor: 'white',
                width: 170,
                marginLeft: 10,
              }}
            >
              <Text
                style={{
                  marginRight: 0,
                  textTransform: 'uppercase',
                  maxWidth: 90,
                }}
              >
                Kiểm tra triệu chứng
              </Text>
              <Image
                source={require('../assets/images/new_icon/trieuchung.jpg')}
                style={{ width: 80, height: 80 }}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <TouchableOpacity
            activeOpacity={0.2}
            onPress={() => navigation.navigate('RequestScreen')}
            style={styles.shadow}
          >
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderWidth: 2,
                borderRadius: 10,
                padding: 10,
                backgroundColor: '#fff',
                borderColor: 'white',
                width: 170,
              }}
            >
              <Text
                style={{
                  marginRight: 15,
                  textTransform: 'uppercase',
                  maxWidth: 100,
                }}
              >
                Yêu cầu
              </Text>
              <Image
                source={require('../assets/images/new_icon/request.png')}
                style={{ width: 80, height: 80 }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.2}
            onPress={() => navigation.navigate('HotlineScreen')}
            style={styles.shadow}
          >
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderWidth: 2,
                borderRadius: 10,
                padding: 10,
                backgroundColor: '#fff',
                borderColor: 'white',
                width: 170,
              }}
            >
              <Text
                style={{
                  marginRight: 20,
                  textTransform: 'uppercase',
                  maxWidth: 90,
                }}
              >
                Hotline
              </Text>
              <Image
                source={require('../assets/images/new_icon/phone.png')}
                style={{ width: 80, height: 80 }}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <TouchableOpacity
            activeOpacity={0.2}
            onPress={() => navigation.navigate('RegulationScreen')}
            style={styles.shadow}
          >
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderWidth: 2,
                borderRadius: 10,
                padding: 10,
                backgroundColor: '#fff',
                borderColor: 'white',
                width: 170,
              }}
            >
              <Text
                style={{
                  marginRight: 20,
                  textTransform: 'uppercase',
                  maxWidth: 100,
                }}
              >
                Nội quy
              </Text>
              <Image
                source={require('../assets/images/new_icon/regulation.png')}
                style={{ width: 80, height: 80 }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.2}
            onPress={() => navigation.navigate('ChatScreen')}
            style={styles.shadow}
          >
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderWidth: 2,
                borderRadius: 10,
                padding: 10,
                backgroundColor: '#fff',
                borderColor: 'white',
                width: 170,
              }}
            >
              <Text
                style={{
                  marginRight: 0,
                  textTransform: 'uppercase',
                  maxWidth: 90,
                }}
              >
                Nhóm chat
              </Text>
              <Image
                source={require('../assets/images/new_icon/chat.png')}
                style={{ width: 80, height: 80 }}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <TouchableOpacity
            activeOpacity={0.2}
            onPress={() => navigation.navigate('TimetableScreen')}
            style={styles.shadow}
          >
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderWidth: 2,
                borderRadius: 10,
                padding: 10,
                backgroundColor: '#fff',
                borderColor: 'white',
                width: 170,
              }}
            >
              <Text
                style={{
                  marginRight: 0,
                  textTransform: 'uppercase',
                  maxWidth: 100,
                }}
              >
                Thời gian biểu
              </Text>
              <Image
                source={require('../assets/images/new_icon/timetable.png')}
                style={{ width: 80, height: 80 }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.2}
            onPress={() => navigation.navigate('MapScreen')}
            style={styles.shadow}
          >
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderWidth: 2,
                borderRadius: 10,
                padding: 10,
                backgroundColor: '#fff',
                borderColor: 'white',
                width: 170,
              }}
            >
              <Text
                style={{
                  marginRight: 20,
                  textTransform: 'uppercase',
                  maxWidth: 90,
                }}
              >
                Bản đồ
              </Text>
              <Image
                source={require('../assets/images/new_icon/map.png')}
                style={{ width: 80, height: 80 }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 8,
  },
  button: {
    // marginBottom: 20,
    borderRadius: 4,
    backgroundColor: '#FFF',
    overflow: 'hidden',
  },
  myImage: {
    width: 100,
    height: 100,
  },
  shadow: {
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 30,
    shadowOffset: { width: 0, height: 0 },
  },
});
