import Navigo from "navigo";

import HomePage from "./page/home";
import About from "./page/about";
import Header from "./components/header";
import Footer from "./components/footer";
import NewsDetail from "./page/newsDetail";
import Nav from "./components/nav";
import SignUp from "./page/signUp";
import SignIn from "./page/signIn";

const router = new Navigo("/", { linksSelector: "a" });

const print = (data) => {
  document.getElementById("header").innerHTML = Header.render();
  document.getElementById("nav").innerHTML = Nav.render();
  document.getElementById("app").innerHTML = data;
  document.getElementById("footer").innerHTML = Footer.render();
};

const layout = (data) => {
  document.getElementById("header").innerHTML = Header.render();
  document.getElementById("nav").innerHTML = "";
  document.getElementById("app").innerHTML = data;
};

router.on({
  "/": () => {
    print(HomePage.render());
  },
  "/about": () => {
    print(About.render());
  },
  "/news/:id": ({ data }) => {
    const { id } = data;
    print(NewsDetail.render(id));
  },
  "/sign-up": () => {
    layout(SignUp.render());
  },
  "/sign-in": () => {
    layout(SignIn.render());
  },
});

router.resolve();
