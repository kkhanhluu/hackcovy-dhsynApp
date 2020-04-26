import * as React from 'react';
import { FlatList, StyleSheet, View, Alert } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import CategoryListItem from '../components/CategoryListItem';
import axios from 'axios';
import Post from '../components/Post';
export default class PostScreen extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://178.128.60.189:8082/api/posts')
      .then((res) => {
        this.setState({
          posts: res.data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  renderSeparatorView = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#CEDCCE',
        }}
      />
    );
  };
  render() {
    return (
      <View style={{ backgroundColor: '##FAFBFD' }}>
        <FlatList
          data={this.state.posts}
          renderItem={({ item }) => (
            <Post
              post={item}
              //   onPress={() => {
              //       navigation.navigate('Category',
              //           {myParam: 'this is my param',
              //               categoryId: item.id});
              //   }}
              //   navigation={navigation}
            />
          )}
          keyExtractor={(item) => `${item.id}`}
          ItemSeparatorComponent={this.renderSeparatorView}
        />
      </View>
    );
  }
}
