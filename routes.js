import React from "react";

const Home = React.lazy(() => import("./components/pages/Home"));

const routes = [
  // Content App
  { path: "/", exct: true, component: Home },
];

export default routes;
