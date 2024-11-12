import React from 'react'
import { Searchbar } from "react-native-paper"
import { RestaurantInfo } from '../components/restaurant-info.component';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StatusBar, StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
const android = Platform.OS === "android"

export const RestaurantsScreen = () => {
    return (<SafeAreaView style={styles.container}>
        <View style={styles.search}>
            <Searchbar />
        </View>
        <View style={styles.list}>
            <RestaurantInfo />
        </View>
    </SafeAreaView>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: android ? StatusBar.currentHeight : 0,
    },
    search: {
        padding: 16,
    },
    list: {
        flex: 1,
        padding: 16,
        backgroundColor: "blue",
    },
});