import { Icon, Input } from "@rneui/themed";
import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import { Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.header}>
          Game On
        </Text>
        <Text style={styles.subHeader}>
          Entrar
        </Text>

        <Input
          placeholder="Email ou Telefone"
          leftIcon={<Icon name="user" type="font-awesome" />}
          containerStyle={styles.inputContainer}
          inputStyle={styles.input}
          leftIconContainerStyle={styles.iconContainer}
        />
        <Input
          placeholder="Senha"
          errorStyle={styles.errorText}
          errorMessage="Senha inválida"
          leftIcon={<Icon name="lock" type="font-awesome" />}
          leftIconContainerStyle={styles.iconContainer}
          rightIcon={
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              accessibilityRole="button"
              accessibilityLabel={showPassword ? "Ocultar senha" : "Mostrar senha"}
              style={styles.iconButton}
            >
              <Icon name={showPassword ? "eye" : "eye-slash"} type="font-awesome" color="#333" iconStyle={{cursor: 'pointer'}} />
            </TouchableOpacity>
          }
          inputStyle={styles.input}
          autoCapitalize="none"
          autoComplete="password"
          autoCorrect={false}
          textContentType="password"
          secureTextEntry={!showPassword}
          containerStyle={styles.inputContainer}
        />

          {/* Pressing this button will navigate to the home screen */ }
        <TouchableOpacity style={styles.button} onPress={() => router.navigate("/home")}>
          <Icon name="sign-in" type="font-awesome" color="#fff" />
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <View style={styles.linkContainer}>
          <Link href="/forgot-password">
            <Text style={styles.linkText}>Esqueci minha senha</Text>
          </Link>

          <View style={styles.row}>
            <Text style={styles.text}>Ainda não tem uma conta? </Text>
            <Link href="/create-account" asChild>
              <TouchableOpacity>
                <Text style={styles.linkText}>Cadastre-se</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>

        <View style={styles.separatorContainer}>
          <View style={styles.separator} />
          <Text style={styles.separatorText}>Ou</Text>
          <View style={styles.separator} />
        </View>

        <TouchableOpacity style={styles.button} onPress={() => console.log("Entrar com Google pressed")}>
          <Icon name="logo-google" type="ionicon" color="#fff" />
          <Text style={styles.buttonText}>Entrar com Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => console.log("Entrar com Apple pressed")}>
          <Icon name="logo-apple" type="ionicon" color="#fff" />
          <Text style={styles.buttonText}>Entrar com Apple</Text>
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
  header: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  subHeader: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  inputContainer: {
    width: "100%",
    marginBottom: 15,
  },
  input: {
    color: "#333",
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  iconContainer: {
    marginRight: 10,
  },
  iconButton: {
    padding: 10,
  },
  errorText: {
    color: "red",
  },
  button: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  linkContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  linkText: {
    color: "blue",
    textDecorationLine: "underline",
    fontSize: 16,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    color: "#333",
  },
  separatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: "black",
  },
  separatorText: {
    marginHorizontal: 10,
    fontSize: 16,
    color: "#333",
  },
});