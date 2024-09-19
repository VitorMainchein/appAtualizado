import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Iconsenha from 'react-native-vector-icons/Ionicons';

export default function App() {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState('');

    const handleChange = (name, value) => {
        setUserData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        if (!userData.name || !userData.email || !userData.password) {
            Alert.alert("Todos os campos devem ser preenchidos");
            return;
        }
        try {
            const response = await fetch('https://taskhub-s37f.onrender.com/auth/signup', {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                throw new Error('Erro na solicitação: ' + response.statusText);
            }

            const data = await response.json();
            setNotificationMessage("Cadastro realizado com sucesso!");
            setUserData({
                name: '',
                email: '',
                password: '',
            });
        } catch (error) {
            console.error(error);
            setNotificationMessage("Houve um erro ao realizar o cadastro.");
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.label}>Sign Up</Text>
            </View>
            <View style={styles.inputWrapper}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite o nome..."
                        value={userData.name}
                        onChangeText={(text) => handleChange('name', text)}
                    />
                    <Icon style={styles.iconUser} name='user' size={25} color="#003366" />
                </View>
            </View>
            <View style={styles.inputWrapper}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        keyboardType="email-address"
                        placeholder="Digite o email..."
                        value={userData.email}
                        onChangeText={(text) => handleChange('email', text)}
                    />
                    <Icon style={styles.iconMail} name='mail' size={25} color="#003366" />
                </View>
            </View>
            <View style={styles.inputWrapper}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite a senha..."
                        value={userData.password}
                        onChangeText={(text) => handleChange('password', text)}
                        secureTextEntry={isPasswordVisible}
                    />
                    <TouchableOpacity style={styles.icon} onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                        <Iconsenha style={styles.icon} name={isPasswordVisible ? 'eye' : 'eye-off'} color="#003366" size={30} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <Pressable style={styles.signUpButton} onPress={handleSubmit}>
                    <Text style={styles.signUpText}>Sign Up</Text>
                </Pressable>
                <Pressable style={styles.googleButton}>
                    <Text style={styles.googleText}>Continue with Google</Text>
                </Pressable>
            </View>
            {notificationMessage ? <Text style={styles.notificationMessage}>{notificationMessage}</Text> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e0f7fa', // Azul claro
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
    },
    icon: {
        color: '#003366', // Azul escuro
        marginRight: 3,
    },
    iconUser: {
        color: '#003366', // Azul escuro
        marginRight: 8,
    },
    iconMail: {
        color: '#003366', // Azul escuro
        marginRight: 8,
    },
    headerContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 30,
        margin: 20,
        color: '#003366', // Azul escuro
    },
    buttonContainer: {
        marginTop: 110,
        flexDirection: 'column',
    },
    inputWrapper: {
        width: '100%',
        alignItems: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#b0bec5',
        borderRadius: 10,
        backgroundColor: '#ffffff',
        paddingHorizontal: 15,
        paddingVertical: 10,
        width: 300,
    },
    input: {
        flex: 1,
        height: 40,
        fontSize: 15,
        color: '#333',
    },
    signUpButton: {
        width: 300,
        height: 57,
        backgroundColor: '#007bb5', // Azul vibrante
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },
    signUpText: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
    },
    googleButton: {
        width: 300,
        height: 60,
        backgroundColor: '#ff5722', // Laranja
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        elevation: 3,
    },
    googleText: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
    },
    notificationMessage: {
        fontSize: 16,
        color: '#d32f2f', // Vermelho
        marginTop: 10,
    },
});
