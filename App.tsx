import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeRouter, Route } from "react-router-native";
import Loading from './components/common/Loading';
import useCachedResources from './hooks/useCachedResources';

const ContentApp = React.lazy(() => import("./components/ContentApp"))


export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <React.Suspense fallback={<Loading />}>
          <NativeRouter>
            <Route path="/" name="home" component={ContentApp} />
          </NativeRouter>
        </React.Suspense>
      </SafeAreaProvider>
    );
  }
}
