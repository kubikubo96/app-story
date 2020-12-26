import React from 'react';
import { NativeRouter, Route } from "react-router-native";
import useCachedResources from './hooks/useCachedResources';
import { Platform, StyleSheet, SafeAreaView } from 'react-native'
import ContentApp from "./components/ContentApp";

const App = () => {
  const isLoadingComplete = useCachedResources();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.OS === 'android' ? 25 : 0
    },
  });
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaView style={styles.container}>
          <NativeRouter>
            <Route path="/" name="home" render={() => <ContentApp/>} />
          </NativeRouter>
      </SafeAreaView>
    );
  }
};

export default App

