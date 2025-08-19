import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Input, Icon } from "@rneui/themed";
import { Stack } from "expo-router";

export default function Community() {
    return (
        <View style={[styles.container, { justifyContent: "flex-start" }]}>
            <Stack.Screen
                options={{
                    headerTitle: "Comunidade",
                    headerTitleStyle: styles.headerTitle,
                    headerStyle: styles.header,
                }}
            />
            <View>

                <Input
                    placeholder="Buscar na comunidade"
                    leftIcon={<Icon name="search" type="font-awesome" />}
                    rightIcon={
                        <Icon
                            name="filter"
                            type="font-awesome"
                            color="#000"
                            onPress={() => console.log()}
                        />
                    }
                    containerStyle={styles.inputContainer}
                    inputStyle={styles.input}
                    leftIconContainerStyle={{ marginRight: 10 }}
                    rightIconContainerStyle={{ marginLeft: 10 }}
                />

            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        padding: 20,
    },
    header: {
        backgroundColor: "#007bff",
        padding: 10,
        width: "100%",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    headerTitle: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "bold",
    },
    inputContainer: {
        width: "100%",
        marginBottom: 20,
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
});