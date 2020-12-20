import React, { Suspense } from "react"
import { NativeRouter, Route, Redirect } from "react-router-native";
import routes from '../routes';
import { View, Text } from 'react-native';

const TheContent = () => {
  return (
    <Suspense fallback={<View><Text>...Loading</Text></View>}>
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
    </Suspense>
  )
}

export default React.memo(TheContent)
