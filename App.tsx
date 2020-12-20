import React from 'react';
import { NativeRouter, Route } from "react-router-native";
import Loading from './components/common/Loading';
import useCachedResources from './hooks/useCachedResources';
import { Platform, StyleSheet, SafeAreaView } from 'react-native'

const ContentApp = React.lazy(() => import("./components/ContentApp"))


export default function App() {
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
        <React.Suspense fallback={<Loading />}>
          <NativeRouter>
            <Route path="/" name="home" component={ContentApp} />
          </NativeRouter>
        </React.Suspense>
      </SafeAreaView>
    );
  }
}

