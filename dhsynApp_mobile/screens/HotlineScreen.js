import React from 'react';
import { FlatList, Linking } from 'react-native';
import { ListItem } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

const contacts = [
  {
    contactName: 'Cấp cứu',
    contactNumber: '114',
  },
  {
    contactName: 'Bệnh viện Bạch Mai',
    contactNumber: '089-759-5138',
  },
  {
    contactName: 'Phòng bảo vệ',
    contactNumber: '086-732-4542',
  },
  {
    contactName: 'Phòng cấp cứu',
    contactNumber: '087-127-2035',
  },
  {
    contactName: 'Trung tâm cứu hộ',
    contactNumber: '083-132-3543',
  }
];

const keyExtractor = (item, index) => index.toString();

const renderItem = ({ item }) => (
  <TouchableOpacity
    activeOpacity={0.2}
    onPress={() => {
      Linking.openURL(`tel:${item.contactNumber}`);
    }}
  >
    <ListItem
      title={item.contactName}
      titleStyle={{
        fontWeight: '200',
        marginBottom: 20,
      }}
      subtitle={item.contactNumber}
      subtitleStyle={{ fontWeight: '500' }}
      rightAvatar={{
        source: require('../assets/images/new_icon/phone_contact.png'),
        overlayContainerStyle: {
          backgroundColor: '#fff',
          borderWidth: 1,
          borderRadius: 100,
          borderColor: '#777',
        },
      }}
      bottomDivider
      chevron
    />
  </TouchableOpacity>
);

const HotlineScreen = (props) => {
  return (
    <FlatList
      keyExtractor={keyExtractor}
      data={contacts}
      renderItem={renderItem}
    />
    // <Text>Hello</Text>
  );
};

export default HotlineScreen;
