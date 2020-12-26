import Home from "./components/pages/Home";

const routes = [
  // Home
  { path: "/", exact: true, name: 'home' },

  { path: "/home", exact: true, component: Home },
];

export default routes;
