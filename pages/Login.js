import axios from "axios";
import React , { useEffect, useState } from "react";
import { Alert, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Login({navigation}) {
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

    useEffect(() => {
        axios.get('https://lazy-puce-narwhal-cuff.cyclic.app/user').then((data) => {
            console.log('---->',data.data.user);
            data.data.user.map((data)=>{
                console.log(data.email);
            })
        })
    }, []);

    const handlerUser = () => {
        console.log(email);
        if(email == '' || password == ''){
            Alert.alert('Please Fill The Input');
        }
        else{
            const object = {
                email : email,
                password : password,
            }
            axios.post('https://lazy-puce-narwhal-cuff.cyclic.app/user' , object);
            Alert.alert('Login Successfully');
            navigation.navigate('Home')
            setEmail('');
            setPassword('');
        }
    }

    return (
        <>
            <SafeAreaView>
                <View style={style.style}>
                    <Text style={style.heading}>Login Page</Text>
                    <KeyboardAvoidingView>
                        <TextInput defaultValue={email} onChangeText={e => setEmail(e)} style={style.input} placeholder="enter your email..." placeholderTextColor={'red'}></TextInput>
                        <TextInput defaultValue={password} onChangeText={e => setPassword(e)} style={style.input} placeholder="enter your Password..." placeholderTextColor={'red'}></TextInput>
                    </KeyboardAvoidingView>
                    <TouchableOpacity>
                        <Text onPress={handlerUser} style={style.btn}>Login</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </>
    )
}

export default Login

const style = StyleSheet.create({
    style: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
    input: {
        borderWidth: 2,
        borderColor: 'red',
        marginTop: 10,
        marginBottom: 10,
        paddingLeft: 20,
        width: 350
    },
    btn: {
        textAlign: 'center',
        backgroundColor: 'red',
        padding: 12,
        color: '#fff',
        width: 350
    },
    heading: {
        textAlign: 'center',
        fontSize: 30,
        color: 'red',
        fontWeight: 'bold'
    }
});



