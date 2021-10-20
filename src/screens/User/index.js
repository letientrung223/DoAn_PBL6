import React from 'react'
import { View, Text,StyleSheet,Image } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
const User = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>HOME</Text>
            <FontAwesome name = 'ambulance' />
            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor:'#ff0000'
    },
    text: {
        fontSize:30,
        fontWeight: 'bold',
    },
    logo: {
        marginTop: 10,
        width:'70%',
        height:60,      
    },
})
export default User
