import React from 'react'
import {
    Image,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Alert
} from 'react-native'
import SkiImage from '../assets/images/ski.png'

export default function CategoryListItem(properties) {
    const {prop1, onPress} = properties;
    return (
        <TouchableOpacity activeOpacity={0.2} onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.mytext}>{prop1.name}</Text>
                <Image source={SkiImage} style={styles.myImage}/>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    myImage: {
        width: 128,
        height: 128
    },
    container: {
        alignItems: 'center',
        padding: 100,
        borderRadius: 4,
        backgroundColor: 'white',
        shadowColor: 'blue',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 30,
        shadowOffset: {width: 0, height: 0},
        marginBottom: 20
    },
    mytext: {
        textTransform: 'uppercase'
    }
});
