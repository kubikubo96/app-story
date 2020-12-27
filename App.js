import React from 'react';
import {NativeRouter, Route} from "react-router-native";
import useCachedResources from './hooks/useCachedResources';
import {Platform, SafeAreaView, StyleSheet} from 'react-native'
import ContentApp from "./components/ContentApp";
import * as eva from '@eva-design/eva';
import store from "./stores/store";
import {ApplicationProvider} from '@ui-kitten/components';
import {Provider as PaperProvider} from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';

const App = () => {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <StoreProvider store={store}>
      <PaperProvider>
        <ApplicationProvider {...eva} theme={eva.light}>
          <SafeAreaView style={styles.container}>
            <NativeRouter>
              <Route path="/" name="home" render={() => <ContentApp/>}/>
            </NativeRouter>
          </SafeAreaView>
        </ApplicationProvider>
      </PaperProvider>
      </StoreProvider>
    );
  }
};

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: Platform.OS === 'android' ? 25 : 0
  },
});