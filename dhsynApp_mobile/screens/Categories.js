import * as React from 'react';
import {FlatList, StyleSheet, View, Alert} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import CategoryListItem from "../components/CategoryListItem";
import axios from 'axios';
export default class Categories extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        axios.get('https://my-json-server.typicode.com/Gnol-VN/demo/categories').then(res => {
            this.setState({
                categories: res.data
            })
        }).catch(error => {
            console.error(error)
        })
    }

    render() {
        const {route, navigation} = this.props;

        return (
            <View>
                <FlatList
                    data={this.state.categories}
                    renderItem={({item}) =>
                        <CategoryListItem
                            prop1={item}
                            onPress={() => {
                                navigation.navigate('Category',
                                    {myParam: 'this is my param',
                                    categoryId: item.id});
                            }}
                            navigation={navigation}
                        />}
                    keyExtractor={(item) => `${item.id}`}
                    contentContainerStyle={styles.container}
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 16,
        paddingRight: 16,
        paddingVertical: 16
    }
});
