import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Portal, Dialog, Paragraph, Button as PaperButton } from 'react-native-paper';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import Input from '../components/Input';
import Button from '../components/Button';
import { register } from '../services/api';
import { RootStackParamList } from '../types';

const RegisterScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);
    const [dialogMessage, setDialogMessage] = useState('');

    const handleRegister = async () => {
        setLoading(true);
        try {
            await register(username, password, email);
            setDialogMessage('Registration successful!');
            setVisible(true);
        } catch (error: any) {
            console.error('Failed to register:', error.message);
            setDialogMessage('Registration failed. Please try again.');
            setVisible(true);
        } finally {
            setLoading(false);
        }
    };

    const handleDialogDismiss = () => {
        setVisible(false);
        if (dialogMessage.includes('successful')) {
            navigation.navigate('Login');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create an Account</Text>
            <Input
                placeholder="Enter Username"
                value={username}
                onChangeText={setUsername}
                placeholderTextColor="#ff8a80"  // Modern soft red placeholder
                style={styles.input}
            />
            <Input
                placeholder="Enter Email"
                value={email}
                onChangeText={setEmail}
                placeholderTextColor="#ff8a80"  // Modern soft red placeholder
                style={styles.input}
            />
            <Input
                placeholder="Enter Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                placeholderTextColor="#ff8a80"  // Modern soft red placeholder
                style={styles.input}
            />
            <Button
                title={loading ? 'Processing...' : 'Register'}
                onPress={handleRegister}
                disabled={loading}
                style={styles.button}
            />
            <Portal>
                <Dialog visible={visible} onDismiss={handleDialogDismiss}>
                    <Dialog.Title style={styles.dialogTitle}>{dialogMessage.includes('successful') ? 'Success' : 'Error'}</Dialog.Title>
                    <Dialog.Content>
                        <Paragraph style={styles.dialogContent}>{dialogMessage}</Paragraph>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <PaperButton onPress={handleDialogDismiss} labelStyle={styles.dialogButton}>OK</PaperButton>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#ffebee', // Modern soft red background
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#d32f2f', // Modern soft red for title
        marginBottom: 25,
        textAlign: 'center',
    },
    input: {
        backgroundColor: '#ffcdd2', // Light red for input background
        color: '#d32f2f', // Modern soft red for input text
        marginBottom: 15,
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#e57373', // Subtle border color
    },
    button: {
        backgroundColor: '#d32f2f', // Modern soft red button
        borderRadius: 8,
        padding: 12,
        alignItems: 'center',
        marginTop: 10,
    },
    dialogTitle: {
        color: '#d32f2f',
        fontSize: 20,
        fontWeight: 'bold',
    },
    dialogContent: {
        color: '#d32f2f',
        fontSize: 16,
    },
    dialogButton: {
        color: '#d32f2f',
        fontWeight: 'bold',
    },
});

export default RegisterScreen;
