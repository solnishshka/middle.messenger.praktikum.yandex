import { renderDOM, registerComponents, Block } from "./core";

import ChatList from "./pages/ChatList";
import Profile from "./pages/Profile";
import ErrorPage from "./pages/ErrorPage";

import * as components from "./components";

import "./styles/variables.scss";
import "./styles/global.scss";
import "./styles/fonts.scss";
import Login from "./pages/Login";
import Register from "./pages/Register";

Object.values(components).forEach((component) => {
  registerComponents(component);
});

// TODO - временный роутинг для навигации

const pathName = window.location.pathname;

let page: Block = new ChatList({});

if (pathName === "/") {
  page = new ChatList({});
}

if (pathName === "/profile") {
  page = new Profile({});
}

if (pathName === "/error") {
  page = new ErrorPage({});
}

if (pathName === "/login") {
  page = new Login({});
}

if (pathName === "/register") {
  page = new Register({});
}

document.addEventListener("DOMContentLoaded", () => {
  renderDOM("#root", page);
});
