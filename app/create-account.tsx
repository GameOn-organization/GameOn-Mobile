import { Icon, Input } from "@rneui/themed";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function CreateAccount() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const router = useRouter();

    const handleCreateAccount = () => {
        if (password !== confirmPassword) {
            setErrorMessage("As senhas não coincidem");
        } else {
            console.log("Conta criada com sucesso!");
            setErrorMessage(""); // Clear error message
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <TouchableOpacity
                    onPress={() => router.navigate("/")}
                    style={[styles.backLink, {cursor: 'pointer'}]}
                >
                    <Icon name="arrow-back" type="ionicon" color="#000" />
                </TouchableOpacity>
                <View style={{ width: "100%", alignItems: "center" }}>
                    <Text style={styles.header}>
                        Game On
                    </Text>
                    <Text style={styles.subHeader}>
                        Criar uma conta
                    </Text>
                    <Input
                        placeholder="(99) 99999-9999"
                        autoCapitalize="none"
                        autoComplete="tel"
                        autoCorrect={false}
                        textContentType="telephoneNumber"
                        keyboardType="phone-pad"
                        leftIcon={<Icon name="phone" type="font-awesome" />}
                        containerStyle={styles.inputContainer}
                        inputStyle={styles.input}
                        leftIconContainerStyle={styles.iconContainer}
                    />
                    <Input
                        placeholder="Email"
                        autoCapitalize="none"
                        autoComplete="email"
                        autoCorrect={false}
                        textContentType="emailAddress"
                        keyboardType="email-address"
                        leftIcon={<Icon name="user" type="font-awesome" />}
                        containerStyle={styles.inputContainer}
                        inputStyle={styles.input}
                        leftIconContainerStyle={styles.iconContainer}
                    />
                    <Input
                        placeholder="Senha"
                        autoCapitalize="none"
                        autoComplete="password"
                        autoCorrect={false}
                        textContentType="password"
                        leftIcon={
                            password === confirmPassword
                                ? <Icon name="lock" type="entypo" />
                                : <Icon name="lock-open" type="entypo" />
                        }
                        secureTextEntry={true}
                        containerStyle={styles.inputContainer}
                        inputStyle={styles.input}
                        leftIconContainerStyle={styles.iconContainer}
                        onChangeText={(value) => setPassword(value)} // Update password state
                    />
                    <Input
                        placeholder="Confirmar Senha"
                        autoCapitalize="none"
                        autoComplete="password"
                        autoCorrect={false}
                        textContentType="password"
                        leftIcon={
                            password === confirmPassword
                                ? <Icon name="lock" type="entypo" />
                                : <Icon name="lock-open" type="entypo" />
                        }
                        secureTextEntry={true}
                        containerStyle={styles.inputContainer}
                        inputStyle={styles.input}
                        leftIconContainerStyle={styles.iconContainer}
                        onChangeText={(value) => setConfirmPassword(value)} // Update confirmPassword state
                    />
                    {errorMessage ? (
                        <Text style={styles.errorText}>{errorMessage}</Text>
                    ) : null}
                </View>
                <TouchableOpacity style={styles.button} onPress={handleCreateAccount}>
                    <Icon name="user-plus" type="font-awesome" color="#fff" />
                    <Text style={styles.buttonText}>Criar conta</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const width = Platform.OS === "web" ? "100%" : "90%";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
    },
    form: {
        justifyContent: "space-between",
        width: width,
        height: "100%",
        maxWidth: 400,
        padding: 20,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    backLink: {
        position: "absolute",
        borderRadius: 5,
        zIndex: 1,
    },
    backLinkText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        textDecorationLine: "none",
    },
    header: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#333",
        textAlign: "center",
    },
    subHeader: {
        fontSize: 24,
        marginBottom: 20,
        color: "#333",
        textAlign: "center",
    },
    inputContainer: {
        width: "100%",
        maxWidth: 400,
        marginBottom: 15,
    },
    input: {
        color: "#333",
        borderColor: "#ccc",
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        backgroundColor: "#fff",
    },
    iconContainer: {
        marginRight: 10,
    },
    errorText: {
        color: "red",
        marginBottom: 10,
        textAlign: "center",
    },
    button: {
        backgroundColor: "#000",
        paddingVertical: 15,
        borderRadius: 5,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        maxWidth: 400,
        marginTop: 20,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 10,
    },
});