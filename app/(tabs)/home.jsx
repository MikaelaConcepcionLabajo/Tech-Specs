import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Alert } from 'react-native';

const bestPhones = [
    {
        name: 'iPhone 15 Pro',
        specs: '6.1" Super Retina XDR display, A17 Pro chip, 48MP main + 12MP ultrawide + 12MP telephoto, 12MP front, 5G, 6GB RAM, 128GB storage, 3279mAh battery',
        price: '$999',
        image: require('../../assets/p1.png'),
    },
    {
        name: 'Samsung Galaxy S23 Ultra',
        specs: '6.8" Dynamic AMOLED 2X display, Snapdragon 8 Gen 2, 200MP main + 12MP ultrawide + 10MP telephoto + 10MP periscope, 12MP front, 5G, 8GB/12GB RAM, 256GB/512GB storage, 5000mAh battery',
        price: '$1,199',
        image: require('../../assets/p2.png'),
    },
    {
        name: 'Google Pixel 8 Pro',
        specs: '6.7" LTPO OLED display, Google Tensor G3, 50MP main + 48MP ultrawide + 48MP telephoto, 10.8MP front, 5G, 12GB RAM, 128GB/512GB storage, 5050mAh battery',
        price: '$999',
        image: require('../../assets/p3.png'),
    },
    {
        name: 'OnePlus 11',
        specs: '6.7" Fluid AMOLED display, Snapdragon 8 Gen 2, 50MP main + 48MP ultrawide + 32MP telephoto, 16MP front, 5G, 8GB/16GB RAM, 128GB/256GB storage, 5000mAh battery',
        price: '$699',
        image: require('../../assets/p4.png'),
    },
    {
        name: 'Xiaomi 13 Pro',
        specs: '6.73" AMOLED display, Snapdragon 8 Gen 2, 50MP main + 50MP ultrawide + 50MP telephoto, 32MP front, 5G, 12GB RAM, 256GB/512GB storage, 4820mAh battery',
        price: '$999',
        image: require('../../assets/p5.png'),
    },
    {
        name: 'Sony Xperia 1 V',
        specs: '6.5" OLED display, Snapdragon 8 Gen 2, 48MP main + 12MP ultrawide + 12MP telephoto, 12MP front, 5G, 12GB RAM, 256GB storage, 5000mAh battery',
        price: '$1,199',
        image: require('../../assets/p6.png'),
    },
    {
        name: 'Oppo Find X6 Pro',
        specs: '6.82" AMOLED display, Snapdragon 8 Gen 2, 50MP main + 50MP ultrawide + 50MP telephoto, 32MP front, 5G, 16GB RAM, 512GB storage, 5000mAh battery',
        price: '$1,099',
        image: require('../../assets/p7.png'),
    },
    {
        name: 'Huawei P60 Pro',
        specs: '6.67" LTPO OLED display, Snapdragon 8+ Gen 1, 50MP main + 48MP telephoto + 13MP ultrawide, 13MP front, 4G, 12GB RAM, 256GB storage, 4815mAh battery',
        price: '$999',
        image: require('../../assets/p8.png'),
    },
    {
        name: 'Asus ROG Phone 7',
        specs: '6.78" AMOLED display, Snapdragon 8 Gen 2, 50MP main + 13MP ultrawide + 5MP macro, 32MP front, 5G, 16GB RAM, 512GB storage, 6000mAh battery',
        price: '$999',
        image: require('../../assets/p9.png'),
    },
    {
        name: 'Realme GT 2 Pro',
        specs: '6.7" LTPO AMOLED display, Snapdragon 8 Gen 1, 50MP main + 50MP ultrawide + 3MP microscope, 32MP front, 5G, 12GB RAM, 256GB storage, 5000mAh battery',
        price: '$749',
        image: require('../../assets/p10.png'),
    },
];

const budgetPhones = [
    {
        name: 'Moto G Power (2023)',
        specs: '6.5" IPS LCD display, MediaTek Helio G37, 50MP main + 2MP macro + 2MP depth, 8MP front, 4G, 4GB RAM, 64GB storage, 5000mAh battery',
        price: '$199',
        image: require('../../assets/b1.png'),
    },
    {
        name: 'Samsung Galaxy A14',
        specs: '6.6" PLS LCD display, Exynos 1330, 50MP main + 5MP ultrawide + 2MP macro, 13MP front, 4G/5G, 4GB RAM, 64GB storage, 5000mAh battery',
        price: '$249',
        image: require('../../assets/b2.png'),
    },
    {
        name: 'TCL 30 SE',
        specs: '6.52" IPS LCD display, MediaTek Helio G25, 50MP main + 2MP macro + 2MP depth, 8MP front, 4G, 4GB RAM, 64GB storage, 5000mAh battery',
        price: '$159',
        image: require('../../assets/b3.png'),
    },
    {
        name: 'Nokia G50',
        specs: '6.82" IPS LCD display, Snapdragon 480, 48MP main + 5MP ultrawide + 2MP depth, 8MP front, 5G, 4GB RAM, 128GB storage, 5000mAh battery',
        price: '$249',
        image: require('../../assets/b4.png'),
    },
    {
        name: 'OnePlus Nord N20 5G',
        specs: '6.43" AMOLED display, Snapdragon 695, 64MP main + 2MP macro + 2MP depth, 16MP front, 5G, 6GB RAM, 128GB storage, 4500mAh battery',
        price: '$299',
        image: require('../../assets/b5.png'),
    },
    {
        name: 'Xiaomi Redmi Note 12',
        specs: '6.67" AMOLED display, Snapdragon 685, 48MP main + 8MP ultrawide + 2MP macro, 13MP front, 4G, 6GB RAM, 128GB storage, 5000mAh battery',
        price: '$199',
        image: require('../../assets/b6.png'),
    },
    {
        name: 'Realme Narzo 50',
        specs: '6.6" IPS LCD display, MediaTek Helio G96, 50MP main + 2MP macro + 2MP depth, 16MP front, 4G, 6GB RAM, 128GB storage, 5000mAh battery',
        price: '$199',
        image: require('../../assets/b7.png'),
    },
    {
        name: 'Infinix Note 12',
        specs: '6.7" AMOLED display, MediaTek Helio G88, 50MP main + 2MP macro + 2MP depth, 16MP front, 4G, 6GB RAM, 128GB storage, 5000mAh battery',
        price: '$199',
        image: require('../../assets/b8.png'),
    },
    {
        name: 'Samsung Galaxy A03s',
        specs: '6.5" PLS LCD display, MediaTek Helio P35, 13MP main + 2MP macro + 2MP depth, 5MP front, 4G, 3GB RAM, 32GB storage, 5000mAh battery',
        price: '$159',
        image: require('../../assets/b9.png'),
    },
    {
        name: 'Huawei Y6 (2023)',
        specs: '6.1" IPS LCD display, MediaTek Helio P35, 13MP main, 8MP front, 4G, 3GB RAM, 32GB storage, 3020mAh battery',
        price: '$149',
        image: require('../../assets/b10.png'),
    },
];


const PhoneCard = ({ phone }) => {
    const [isWishlisted, setIsWishlisted] = useState(false);

    const showSpecsAlert = () => {
        Alert.alert(
            phone.name,
            phone.specs,
            [{ text: 'OK' }],
            { cancelable: true }
        );
    };

    const toggleWishlist = () => {
        setIsWishlisted(!isWishlisted);
        Alert.alert(`${phone.name} ${isWishlisted ? 'removed from' : 'added to'} wishlist!`);
    };

    return (
        <View style={styles.card}>
            <TouchableOpacity onPress={showSpecsAlert}>
                <Image source={phone.image} style={styles.image} />
            </TouchableOpacity>
            <Text style={styles.phoneName}>{phone.name}</Text>
            <Text style={styles.price}>{phone.price}</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={[styles.wishlistButton, isWishlisted && styles.disabledButton]}
                    onPress={toggleWishlist}
                    disabled={isWishlisted}
                >
                    <Text style={styles.buttonText}>
                        {isWishlisted ? 'Added to Wishlist' : 'Add to Wishlist'}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default function Home() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Best Phones</Text>
            <FlatList
                data={bestPhones}
                renderItem={({ item }) => <PhoneCard phone={item} />}
                keyExtractor={(item) => item.name}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.flatList}
            />

            <Text style={styles.header}>Budget Phones</Text>
            <FlatList
                data={budgetPhones}
                renderItem={({ item }) => <PhoneCard phone={item} />}
                keyExtractor={(item) => item.name}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.flatList}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFDEE9', // Soft background color
        padding: 16,
    },
    header: {
        fontSize: 28, // Increased font size for header
        fontWeight: 'bold',
        marginVertical: 20,
        color: '#333',
    },
    flatList: {
        marginBottom: 20,
    },
    card: {
        backgroundColor: '#ffffff', // White background for cards
        borderRadius: 15, // Increased corner radius for cards
        padding: 16,
        marginRight: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15, // Improved shadow opacity
        shadowRadius: 4,
        elevation: 5,
        width: 160, // Adjusted width for cards
    },
    image: {
        width: '100%',
        height: 120, // Increased height for images
        borderRadius: 15, // Increased border radius for images
        marginBottom: 10,
    },
    phoneName: {
        fontSize: 18, // Increased font size for phone name
        fontWeight: '600', // Semi-bold font weight
        color: '#333',
    },
    price: {
        fontSize: 16, // Increased font size for price
        fontWeight: 'bold',
        color: '#007BFF',
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'column',
        alignItems: 'stretch',
    },
    wishlistButton: {
        backgroundColor: '#28a745', // Green background for wishlist button
        padding: 12, // Increased padding for better touch area
        borderRadius: 8, // Rounded corners
        alignItems: 'center',
    },
    disabledButton: {
        backgroundColor: '#6c757d', // Gray color when disabled
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});
