import React from 'react'
import {FlatList, StyleSheet, View, Text, Alert, Image} from 'react-native';

import TouchableOpacity from "react-native-web/src/exports/TouchableOpacity";
import SkiImage from '../assets/images/ski.png'

export default function ProductListItem(props) {
    const {product, onAddToCartClick} = props;
    return (
        <View style={styles.shadow}>
            <View style={styles.container}>
                {/*<TouchableOpacity onPress ={onAddToCartClick}>*/}
                {/*    <Image style={styles.image} source={SkiImage}/>*/}
                {/*</TouchableOpacity>*/}
                <Text>inside product list</Text>
                <Text>{product.id}</Text>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        borderRadius: 4,
        backgroundColor: '#bdffc2',
        overflow: 'hidden'
    },
    shadow: {
        shadowColor: 'red',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 30,
        shadowOffset: {width: 0, height: 0}
    },
    image: {
        height: 150
    }
});
