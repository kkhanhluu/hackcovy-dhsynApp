import * as React from 'react';
import {FlatList, StyleSheet, View, Text, Alert} from 'react-native';
import ProductListItem from "../components/ProductListItem";
import axios from 'axios';

export default class Category extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        axios.get('https://my-json-server.typicode.com/Gnol-VN/demo/products?categoryId='+this.props.route.params.categoryId)
        .then(res => {
            this.setState({
                products: res.data
            })
        }).catch(err => {
            console.error(err)
        })
    }

    render() {
        const {route, navigation} = this.props;
        navigation.setOptions({title: route.params.myParam});
        return (
            <FlatList
                data={this.state.products}
                numColumns={3}
                renderItem={({item}) =>
                    <View style={styles.wrapper}>
                        <ProductListItem
                            product={item}
                            // onPress={() => {
                            //     navigation.navigate('Category', {myParam: 'this is my param'});
                            // }}
                            // navigation={navigation}
                        />
                    </View>}
                keyExtractor={(item) => `${item.id}`}
                contentContainerStyle={styles.container}
            />

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        paddingHorizontal: 8,
        paddingVertical: 16
    },
    wrapper: {
        flex: 1,
        paddingHorizontal: 8
    }
});
