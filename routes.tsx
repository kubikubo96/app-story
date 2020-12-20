import React from "react";

const Home = React.lazy(() => import("./components/pages/Home"));

const routes = [
  // Home
  { path: "/", exct: true, name: 'home' },

  { path: "/home", exct: true, component: Home },
];

export default routes;
