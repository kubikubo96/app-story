import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeRouter, Route } from "react-router-native";
import useCachedResources from './hooks/useCachedResources';

const ContentApp = React.lazy(() => import("./components/ContentApp"))


export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NativeRouter>
        <SafeAreaProvider>
          <Route path="/" name="home" component={ContentApp} />
        </SafeAreaProvider>
      </NativeRouter>
    );
  }
}
