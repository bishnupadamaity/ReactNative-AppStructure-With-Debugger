import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLOR } from '~/utils/Color/Color'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '~/types/RootStackParams'

const Signup = () => {
        const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }} >
            <Text style={{ fontSize: 30, color: 'black', fontWeight: 'bold' }} >Signup</Text>
            <TouchableOpacity style={{ flexDirection: 'column', marginTop: 20, alignItems: 'center', position: 'absolute', bottom: 40 }} onPress={() => { navigation.navigate('Homepage') }} >
                <Text style={{ fontSize: 15, color: 'black', fontWeight: 'semibold' }} >Go to -{'>'} </Text>
                <Text style={{ fontSize: 18, color: COLOR.darkblue, fontWeight: 'bold' }} >Home</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Signup