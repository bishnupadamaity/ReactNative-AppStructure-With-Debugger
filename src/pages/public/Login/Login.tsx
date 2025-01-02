import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLOR } from '~/utils/Color/Color'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '~/types/RootStackParams'

const Login = () => {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }} >
            <Text style={{ fontSize: 30, color: 'black', fontWeight: 'bold' }} >Login</Text>

            <TouchableOpacity style={{ flexDirection: 'column', marginTop: 20, alignItems: 'center', position: 'absolute', bottom: 40 }} onPress={() => { navigation.navigate('Signup') }} >
                <Text style={{ fontSize: 15, color: 'black', fontWeight: 'semibold' }} >don't have and account? </Text>
                <Text style={{ fontSize: 18, color: COLOR.darkblue, fontWeight: 'bold' }} >Signup</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login