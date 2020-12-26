import HomeScreen from "./components/pages/HomeScreen";

const routes = [
  // Home
  {path: "/", exact: true, name: 'home'},

  {path: "/home", exact: true, component: HomeScreen},
];

export default routes;
