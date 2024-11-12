import React from "react"
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StatusBar, StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
const android = Platform.OS === "android"

export default function App() {
  return (<>
    <SafeAreaView style={{ flex: 1, marginTop: android ? StatusBar.currentHeight : 0 }}>
      <View style={{
        padding: 16,
        backgroundColor: "green"
      }}><Text>Search</Text></View>
      <View style={{
        flex: 1,
        padding: 16,
        backgroundColor: "blue"
      }}><Text>Her</Text></View>

    </SafeAreaView>
    <ExpoStatusBar />
  </>
  );
}

const styles = StyleSheet.create({

});
