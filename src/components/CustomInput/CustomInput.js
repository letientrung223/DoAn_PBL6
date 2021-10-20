//rnfe
import React from 'react';
import { View, Text,TextInput,StyleSheet } from 'react-native';

const CustomInput = ({value,setValue,placeholder,secureTextEntry}) => {
    return (
        <View style={styles.contrainer}>
            <TextInput 
            value ={value}
            onChangeText = {setValue}
            placeholder={placeholder} 
            style={styles.input}
            secureTextEntry={secureTextEntry}
            />

        </View>
    )
}
const styles = StyleSheet.create({
    contrainer:{
        backgroundColor:'white',
        width:'100%',
        borderColor:'#e8e8e8',
        borderWidth:1,
        borderRadius:5,

        paddingHorizontal:10,
        marginVertical:5,

    },
    input:{
        height:50,
    }
})
export default CustomInput
 