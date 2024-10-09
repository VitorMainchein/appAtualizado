import React from 'react';
import { Link } from 'expo-router';
import { View, StyleSheet, Text } from 'react-native';

const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Exercícios</Text>
            <View style={styles.linksContainer}>
                <Link href='/calculadora' style={styles.link}>
                    <Text style={styles.linkText}>Calculadora</Text>
                </Link>
                <Link href='/listaTarefas' style={styles.link}>
                    <Text style={styles.linkText}>Lista de Tarefas</Text>
                </Link>
                <Link href='/pokemon' style={styles.link}>
                    <Text style={styles.linkText}>Pokémon</Text>
                </Link>
                <Link href='/santander' style={styles.link}>
                    <Text style={styles.linkText}>Santander</Text>
                </Link>
                <Link href='/singup' style={styles.link}>
                    <Text style={styles.linkText}>Signup</Text>
                </Link>
                <Link href='/splashScreen' style={styles.link}>
                    <Text style={styles.linkText}>Splash Screen</Text>
                </Link>
                <Link href='/ifome' style={styles.link}>
                    <Text style={styles.linkText}>Ifome</Text>
                </Link>
                <Link href='/camera' style={styles.link}>
                    <Text style={styles.linkText}>Camera</Text>
                </Link>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0F4F8', 
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2C3E50', 
        marginBottom: 20,
    },
    linksContainer: {
        width: '100%',
        alignItems: 'center',
    },
    link: {
        marginVertical: 8,
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        backgroundColor: '#3498DB', 
        width: '80%', 
        alignItems: 'center',
    },
    linkText: {
        fontSize: 14,
        color: '#FFFFFF', 
    },
});

export default Home;
