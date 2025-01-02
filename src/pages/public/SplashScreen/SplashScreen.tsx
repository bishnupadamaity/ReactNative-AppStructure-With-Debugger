import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { isUserLoggedIn } from '~/functions/Auth/AuthFunctions';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '~/types/RootStackParams';

const SplashScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [initialRoute, setInitialRoute] = useState('');

    
    useEffect(() => {
        // const checkLoginStatus = async () => {
        //     const loggedIn = await isUserLoggedIn();
        //     setInitialRoute(loggedIn ? 'Homepage' : 'Login');
        // };
        // checkLoginStatus();
        setInitialRoute('Login');
    }, [])
    useEffect(() => {
        setTimeout(() => {
            if (initialRoute !== '') {
                navigation.reset({
                    index: 0,
                    routes: [{ name: initialRoute as keyof RootStackParamList }],
                })
            }
        }, 3000);
    }, [initialRoute])
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center' , backgroundColor:'white'}} >
            <Text style={{fontSize: 30, color: 'black', fontWeight: 'bold'}} >SplashScreen</Text>
        </View>
    )
}

export default SplashScreen