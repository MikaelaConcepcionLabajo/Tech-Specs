import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, Modal, TouchableOpacity } from 'react-native';

const initialWishlistPhones = [
    {
        name: 'iPhone 15 Pro',
        specs: 'Display: 6.1", A17 Pro Chip, RAM: 6GB, Storage: 128GB, Camera: 48MP Triple Camera, Battery: 3279 mAh, OS: iOS 17',
        price: '$999',
        image: require('../../assets/p1.png'),
    },
    {
        name: 'Samsung Galaxy S23 Ultra',
        specs: 'Display: 6.8", Snapdragon 8 Gen 2, RAM: 12GB, Storage: 256GB, Camera: 200MP Quad Camera, Battery: 5000 mAh, OS: Android 13',
        price: '$1,199',
        image: require('../../assets/p2.png'),
    },
    {
        name: 'Google Pixel 8 Pro',
        specs: 'Display: 6.7", Google Tensor G3, RAM: 12GB, Storage: 128GB, Camera: 50MP Triple Camera, Battery: 5050 mAh, OS: Android 14',
        price: '$999',
        image: require('../../assets/p3.png'),
    },
    {
        name: 'OnePlus 11',
        specs: 'Display: 6.7", Snapdragon 8 Gen 2, RAM: 16GB, Storage: 256GB, Camera: 50MP Triple Camera, Battery: 5000 mAh, OS: Android 13',
        price: '$699',
        image: require('../../assets/p4.png'),
    },
    {
        name: 'Xiaomi 13 Pro',
        specs: 'Display: 6.73", Snapdragon 8 Gen 2, RAM: 12GB, Storage: 256GB, Camera: 50MP Triple Camera, Battery: 4820 mAh, OS: MIUI 14',
        price: '$999',
        image: require('../../assets/p5.png'),
    },
];

const WishlistScreen = () => {
    const [wishlistPhones, setWishlistPhones] = useState(initialWishlistPhones);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedPhone, setSelectedPhone] = useState(null);

    const openModal = (phone) => {
        setSelectedPhone(phone);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setSelectedPhone(null);
    };

    const removePhoneFromWishlist = (phoneToRemove) => {
        setWishlistPhones(wishlistPhones.filter(phone => phone.name !== phoneToRemove.name));
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>My Wishlist</Text>
            {wishlistPhones.map((phone, index) => (
                <View key={index} style={styles.card}>
                    <TouchableOpacity onPress={() => openModal(phone)}>
                        <Image source={phone.image} style={styles.image} />
                    </TouchableOpacity>
                    <Text style={styles.phoneName}>{phone.name}</Text>
                    <Text style={styles.price}>{phone.price}</Text>
                    <TouchableOpacity
                        style={styles.removeButton}
                        onPress={() => removePhoneFromWishlist(phone)}
                    >
                        <Text style={styles.removeButtonText}>Remove</Text>
                    </TouchableOpacity>
                </View>
            ))}

            {selectedPhone && (
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={closeModal}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Image source={selectedPhone.image} style={styles.modalImage} />
                            <Text style={styles.modalPhoneName}>{selectedPhone.name}</Text>
                            <Text style={styles.modalSpecs}>{selectedPhone.specs}</Text>
                            <Text style={styles.modalPrice}>{selectedPhone.price}</Text>
                            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                                <Text style={styles.closeButtonText}>Close</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFDEE9',
        padding: 16,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
        color: '#333',
    },
    card: {
        backgroundColor: '#f8f8f8',
        borderRadius: 10,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    image: {
        width: '100%',
        height: 100,
        borderRadius: 10,
        marginBottom: 10,
    },
    phoneName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    price: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#007BFF',
    },
    removeButton: {
        backgroundColor: '#FF6347',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        alignItems: 'center',
    },
    removeButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalImage: {
        width: 300,
        height: 300,
        borderRadius: 10,
        marginBottom: 10,
    },
    modalPhoneName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    modalSpecs: {
        fontSize: 16,
        color: '#333',
        marginVertical: 5,
        textAlign: 'center',
    },
    modalPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#007BFF',
        marginBottom: 10,
    },
    closeButton: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    closeButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default WishlistScreen;
