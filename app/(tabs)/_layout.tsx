import { Tabs } from 'expo-router';
import { Icon } from '@rneui/themed';
import { StyleSheet, Platform } from 'react-native';

export default function Layout() {
    const isWeb = Platform.OS === 'web';

    return (
        <Tabs
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#000',
                    height: isWeb ? 60 : 50, // Adjust height for web
                },
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: '#cce4ff',
                headerShown: false,
                tabBarLabelStyle: {
                    fontSize: isWeb ? 12 : 0, // Hide label text on non-web platforms
                    fontWeight: 'bold',
                },
                tabBarItemStyle: {
                    justifyContent: 'center', // Center the icons
                },
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    tabBarLabel: isWeb ? 'Home' : '', // Empty string for non-web platforms
                    tabBarIcon: ({ color, size, focused }) => (
                        <Icon
                            name={focused ? "home" : "home-outline"}
                            type="ionicon"
                            color={color}
                            size={size}
                            iconStyle={styles.iconStyle}
                        />
                    ),
                    headerTitle: 'Game On',
                }}
            />
            <Tabs.Screen
                name="community"
                options={{
                    tabBarLabel: isWeb ? 'Comunidade' : '', // Empty string for non-web platforms
                    tabBarIcon: ({ color, size, focused }) => (
                        <Icon
                            name={focused ? "people" : "people-outline"}
                            type="ionicon"
                            color={color}
                            size={size}
                            iconStyle={styles.iconStyle}
                        />
                    ),
                    headerTitle: 'Comunidade',
                }}
            />
            <Tabs.Screen
                name="events"
                options={{
                    tabBarLabel: isWeb ? 'Eventos' : '', // Empty string for non-web platforms
                    tabBarIcon: ({ color, size, focused }) => (
                        <Icon
                            name={focused ? "add-circle" : "add-circle-outline"}
                            type="ionicon"
                            color={color}
                            size={size}
                            iconStyle={styles.iconStyle}
                        />
                    ),
                    headerTitle: 'Eventos',
                }}
            />
            <Tabs.Screen
                name="notification"
                options={{
                    tabBarLabel: isWeb ? 'Notificações' : '', // Empty string for non-web platforms
                    tabBarIcon: ({ color, size, focused }) => (
                        <Icon
                            name={focused ? "notifications" : "notifications-outline"}
                            type="ionicon"
                            color={color}
                            size={size}
                            iconStyle={styles.iconStyle}
                        />
                    ),
                    headerTitle: 'Notificações',
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    tabBarLabel: isWeb ? 'Perfil' : '', // Empty string for non-web platforms
                    tabBarIcon: ({ color, size, focused }) => (
                        <Icon
                            name={focused ? "person" : "person-outline"}
                            type="ionicon"
                            color={color}
                            size={size}
                            iconStyle={styles.iconStyle}
                        />
                    ),
                    headerTitle: 'Perfil',
                }}
            />
        </Tabs>
    );
}

const styles = StyleSheet.create({
    iconStyle: {
        cursor: 'pointer',
    },
});