import React from 'react';
import {NativeRouter, Route} from "react-router-native";
import useCachedResources from './hooks/useCachedResources';
import {Platform, SafeAreaView, StyleSheet} from 'react-native'
import ContentApp from "./components/ContentApp";
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';

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
      <ApplicationProvider {...eva} theme={eva.light}>
        <SafeAreaView style={styles.container}>
          <NativeRouter>
            <Route path="/" name="home" render={() => <ContentApp/>}/>
          </NativeRouter>
        </SafeAreaView>
      </ApplicationProvider>
    );
  }
};

export default App

