import React, { Suspense } from "react"
import { NativeRouter, Route, Redirect } from "react-router-native";
import routes from '../routes';
import Loading from "./common/Loading";
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

const TheContent = () => {
  return (
    <Suspense fallback={<Loading />}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NativeRouter>
          {routes.map((route: any, idx: number) => {
            return (
              route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  render={(props: any) => (
                    <React.Fragment>
                      <route.component {...props} />
                    </React.Fragment>
                  )}
                />
              )
            )
          })}
          <Redirect from="/" exact to="/Home" />
        </NativeRouter>
      </ApplicationProvider>
    </Suspense>
  )
}

export default React.memo(TheContent)
