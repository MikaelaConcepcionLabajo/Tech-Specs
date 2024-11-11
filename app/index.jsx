import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/logo.png')} // Replace with your logo path
                style={styles.logo}
                resizeMode="contain" // Ensure the logo fits well
            />
            <View style={styles.overlay}>
                <Text style={styles.title}> TechSpecs</Text>
                <Text style={styles.subtitle}>
                    Browse and find the right phone for your needs
                </Text>
                <Link href="./home" style={styles.link}>
                    Open
                </Link>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFDEE9', // Soft pastel pink background
        justifyContent: 'center', // Center contents vertically
        alignItems: 'center', // Center contents horizontally
        padding: 20,
    },
    logo: {
        width: 150, // Adjust the width as needed
        height: 150, // Adjust the height as needed
        borderRadius: 75, // Half of width and height to make it circular
        marginBottom: 20, // Space between logo and overlay
        borderWidth: 3, // Border width for the circular logo
        borderColor: '#B9FBC0', // Soft mint border color for the logo
    },
    overlay: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Light white overlay for contrast
        borderRadius: 20,
        padding: 30,
        alignItems: 'center',
        borderWidth: 3,
        borderColor: '#B9FBC0', // Soft mint border
        shadowColor: '#B9FBC0', // Soft mint shadow
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 10, // Elevation for Android shadow
    },
    title: {
        fontFamily: 'Orbitron', // Use a futuristic font (ensure it is loaded)
        fontSize: 36,
        color: '#FF6F91', // Soft coral for title
        marginBottom: 10,
        textAlign: 'center',
        textShadowColor: '#FFD3E0', // Light pink shadow for better readability
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 10,
    },
    subtitle: {
        fontFamily: 'Merriweather-Regular', // Keep subtitle in a readable font
        fontSize: 18,
        color: '#555555', // Soft gray for subtitle
        textAlign: 'center',
        marginBottom: 20,
        paddingHorizontal: 20,
    },
    link: {
        fontFamily: 'Orbitron', // Use a futuristic font for the button
        fontSize: 18,
        color: '#FFFFFF', // White text for the button
        textDecorationLine: 'none',
        paddingVertical: 12,
        paddingHorizontal: 25,
        backgroundColor: '#FF6F91', // Soft coral button
        borderRadius: 5,
        overflow: 'hidden',
        textAlign: 'center',
        marginTop: 10,
        elevation: 5, // Shadow effect for button
        borderWidth: 2,
        borderColor: '#FF6F91', // Coral border for the button
    },
});
