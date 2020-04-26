import React from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default function Post(props) {
  const { post } = props;
  return (
    <View style={styles.post}>
      <Text
        style={{ color: '#90918b', marginBottom: 10, paddingHorizontal: 10 }}
      >
        {new Date(post.createdDate).toLocaleDateString()} - {post.creatorName}{' '}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          marginBottom: 20,
          paddingHorizontal: 10,
        }}
      >
        {post.title}
      </Text>
      <Text style={styles.content}>{post.content}</Text>
      <Image source={{ uri: post.mediaURL }} style={styles.image} />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          paddingHorizontal: 10,
          justifyContent: 'space-between',
          marginTop: 10,
          width: 150,
        }}
      >
        <TouchableOpacity
          activeOpacity={0.2}
          onPress={() => console.log('pressed')}
        >
          <Image
            source={require('../assets/images/heart-outline.png')}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.2}
          onPress={() => console.log('pressed')}
        >
          <Image
            source={require('../assets/images/chat-outline.png')}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.2}
          onPress={() => console.log('pressed')}
        >
          <Image
            source={require('../assets/images/bookmark-outline.png')}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>
      </View>
      <TextInput
        style={{ fontSize: 14, paddingHorizontal: 10, marginTop: 10 }}
        placeholder='Add a comment...'
        onChangeText={(input) => this.setState({ input: input })}
        placeholderTextColor='#90918b'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  post: {
    display: 'flex',
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: '#C1C7C7',
    borderTopWidth: 0,
    paddingVertical: 15,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  content: {
    fontFamily: 'Damascus',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  image: {
    alignSelf: 'stretch',
    minHeight: 250,
  },
});
