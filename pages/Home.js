import { Alert, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, SafeAreaView ,  View } from "react-native";

function Home() {
    return(
        <>
        <SafeAreaView>
            <View style={style.style}>
                <View>
                <Text>Get Started</Text>
                </View>
                <View>
                <Text>Home Page</Text>
                </View>
                <View>
                <Text>Home Page</Text>
                </View>
            </View>
        </SafeAreaView>
        </>
    )
} 

export default Home

const style = StyleSheet.create({
    style: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
});


