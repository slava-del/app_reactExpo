import React, { useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MyPopup = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [passwordTyped, setPasswordTyped] = useState(false);
    const [buttonVisible, setButtonVisible] = useState(true);

    const handleInputFocus = () => {
        setButtonVisible(false);
    };
    const handleInputBlur = () => {
        setButtonVisible(true);
    };

    const handlePasswordChange = (text) => {
        setPassword(text);
        setPasswordTyped(true);
    };

    const handleClose = () => {
        props.onClose();
        setPassword('');
        setShowPassword(false);
        setPasswordTyped(false);
    };

    return (
        <Modal visible={props.isVisible} animationType="slide" transparent={true}>
            <KeyboardAvoidingView style={styles.centerContainer} behavior='padding'>
                <Text style={styles.title}>Autentificare</Text>
                <TouchableOpacity
                    onPress={handleClose}
                    style={[
                        styles.closeButton,
                        {
                            position: 'absolute',
                            right: 10,
                            top: 27,
                        },
                    ]}
                >
                    <Ionicons name="close" size={24} color="#000" />
                </TouchableOpacity>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputTitle}>Email</Text>
                    <TextInput
                    style={styles.input}
                    placeholder="ex: bconnect@gmail.com"
                   value={email}
                    onChangeText={setEmail}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
               />
               <View style={styles.inputContainer}></View>
                    <Text style={styles.inputTitle}>Parolă</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput
                            style={[styles.input, { flex: 1 }]}
                            placeholder="Parola ta"
                            secureTextEntry={!showPassword}
                            value={password}
                            onChangeText={handlePasswordChange}
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                        />
                        <TouchableOpacity
                            onPress={() => setShowPassword(!showPassword)}
                            style={[
                                styles.showPasswordButton,
                                {
                                    position: 'absolute',
                                    top: '50%',
                                    transform: [{ translateY: -13 }],
                                    right: 10,
                                },
                            ]}
                        >
                            <Ionicons
                                name={showPassword ? 'eye-off' : 'eye'}
                                size={24}
                                color="#777"
                            />
                        </TouchableOpacity>
                    </View>
                    {passwordTyped && password.length < 8 && (
                        <Text style={styles.warningText}>Parola trebuie să conțină cel puțin 8 caractere</Text>
                    )}
                </View>
                {buttonVisible && (
                    <TouchableOpacity
                        onPress={handleClose}
                        style={[styles.button, { marginTop: 32 }]}
                    >
                        <Text style={styles.buttonText}>Autentifică-te</Text>
                    </TouchableOpacity>
                )}
            </KeyboardAvoidingView>
        </Modal>
    );
}

export default MyPopup;

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: 50,
    },
    centerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
      },
    button: {
        width: "65%",
        backgroundColor: '#3F95EB',
        height: 50,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        position: 'absolute',
        bottom: 80,
    },
    buttonText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10
    },
    inputContainer: {
        marginBottom: 10,
        width: '100%',
    },
    inputTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    input: {
        backgroundColor: '#f2f2f2',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 15,
        fontSize: 16,
        textAlign: 'left',
        fontStyle: 'italic'
    },
    warningText: {
        color: "red",
        marginTop: 8,
    },
};