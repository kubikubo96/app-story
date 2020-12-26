import React from "react"
import {NativeRouter, Route, Redirect} from "react-router-native";
import routes from "../routes";

const ContentApp = () => {
  return (
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
      <Redirect from="/" exact to="/Home"/>
    </NativeRouter>
  )
};

export default ContentApp
