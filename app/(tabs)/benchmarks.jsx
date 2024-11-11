import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

// Phone data with benchmark scores
const bestPhones = [
    {
        name: 'iPhone 15 Pro',
        chipset: 'A17 Pro',
        benchmark: 960000, // AnTuTu score
    },
    {
        name: 'Samsung Galaxy S23 Ultra',
        chipset: 'Snapdragon 8 Gen 2',
        benchmark: 1100000, // AnTuTu score
    },
    {
        name: 'Google Pixel 8 Pro',
        chipset: 'Google Tensor G3',
        benchmark: 925000, // AnTuTu score
    },
    {
        name: 'OnePlus 11',
        chipset: 'Snapdragon 8 Gen 2',
        benchmark: 850000, // AnTuTu score
    },
    {
        name: 'Xiaomi 13 Pro',
        chipset: 'Snapdragon 8 Gen 2',
        benchmark: 980000, // AnTuTu score
    },
    {
        name: 'Sony Xperia 1 V',
        chipset: 'Snapdragon 8 Gen 2',
        benchmark: 910000, // AnTuTu score
    },
    {
        name: 'Oppo Find X6 Pro',
        chipset: 'Snapdragon 8 Gen 2',
        benchmark: 930000, // AnTuTu score
    },
    {
        name: 'Huawei P60 Pro',
        chipset: 'Snapdragon 8+ Gen 1',
        benchmark: 850000, // AnTuTu score
    },
    {
        name: 'Asus ROG Phone 7',
        chipset: 'Snapdragon 8 Gen 2',
        benchmark: 940000, // AnTuTu score
    },
    {
        name: 'Realme GT 2 Pro',
        chipset: 'Snapdragon 8 Gen 1',
        benchmark: 780000, // AnTuTu score
    },
];

const budgetPhones = [
    {
        name: 'Moto G Power (2023)',
        chipset: 'MediaTek Helio G37',
        benchmark: 200000, // AnTuTu score
    },
    {
        name: 'Samsung Galaxy A14',
        chipset: 'Exynos 1330',
        benchmark: 250000, // AnTuTu score
    },
    {
        name: 'TCL 30 SE',
        chipset: 'MediaTek Helio G25',
        benchmark: 180000, // AnTuTu score
    },
    {
        name: 'Nokia G50',
        chipset: 'Snapdragon 480',
        benchmark: 230000, // AnTuTu score
    },
    {
        name: 'OnePlus Nord N20 5G',
        chipset: 'Snapdragon 695',
        benchmark: 300000, // AnTuTu score
    },
    {
        name: 'Xiaomi Redmi Note 12',
        chipset: 'Snapdragon 685',
        benchmark: 210000, // AnTuTu score
    },
    {
        name: 'Realme Narzo 50',
        chipset: 'MediaTek Helio G96',
        benchmark: 220000, // AnTuTu score
    },
    {
        name: 'Infinix Note 12',
        chipset: 'MediaTek Helio G88',
        benchmark: 205000, // AnTuTu score
    },
    {
        name: 'Samsung Galaxy A03s',
        chipset: 'MediaTek Helio P35',
        benchmark: 150000, // AnTuTu score
    },
    {
        name: 'Huawei Y6 (2023)',
        chipset: 'MediaTek Helio P35',
        benchmark: 160000, // AnTuTu score
    },
];

// PhoneCard Component for Benchmark Screen
const PhoneCard = ({ phone, rank }) => (
    <View style={styles.card}>
        <Text style={styles.rank}>{rank + 1}. {phone.name}</Text>
        <Text style={styles.chipset}>Chipset: {phone.chipset}</Text>
        <Text style={styles.benchmark}>AnTuTu Score: {phone.benchmark.toLocaleString()}</Text>
    </View>
);

// Benchmark Screen
const BenchmarkScreen = () => {
    // Combine and sort the phones by benchmark score
    const combinedPhones = [...bestPhones, ...budgetPhones].sort((a, b) => b.benchmark - a.benchmark);

    return (
        <FlatList
            data={combinedPhones}
            renderItem={({ item, index }) => <PhoneCard phone={item} rank={index} />}
            keyExtractor={(item) => item.name}
            contentContainerStyle={styles.container}
            ListHeaderComponent={<Text style={styles.header}>Phone Benchmarks</Text>}
            ListEmptyComponent={<Text style={styles.noResults}>No results found</Text>}
        />
    );
};

// Main Home Component (can be replaced with your navigation setup)
export default function Home() {
    return (
        <BenchmarkScreen />
    );
}

// Styles
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#FFDEE9', // Your specified background color
        padding: 16,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
        color: '#333',
        textAlign: 'center', // Centered header
    },
    card: {
        backgroundColor: '#ffffff', // Card background color
        borderRadius: 15, // Increased corner radius
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15, // Increased shadow opacity
        shadowRadius: 5,
        elevation: 5,
    },
    rank: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    chipset: {
        fontSize: 14,
        color: '#666',
    },
    benchmark: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#007BFF', // Color for benchmark score
    },
    noResults: {
        fontSize: 16,
        color: 'red',
        textAlign: 'center',
        marginTop: 20,
    },
});
