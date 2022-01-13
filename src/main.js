import Navigo from "navigo";

import HomePage from "./page/home";
import About from "./page/about";
import Header from "./components/header";
import Footer from "./components/footer";
import NewsDetail from "./page/newsDetail";
import Nav from "./components/nav";
import SignUp from "./page/signUp";
import SignIn from "./page/signIn";

import HeaderAdmin from "./components/header_admin";
import Dashboard from "./components/dashboard";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content, header, nav, footer) => {
  document.getElementById("header").innerHTML = header;
  document.getElementById("nav").innerHTML = nav;
  document.getElementById("app").innerHTML = content;
  document.getElementById("footer").innerHTML = footer;
};

const layout = (content, header) => {
  document.getElementById("header__admin").innerHTML = header;
  document.getElementById("app__admin").innerHTML = content;
};

router.on({
  "/": () => {
    print(HomePage.render(), Header.render(), Nav.render(), Footer.render());
  },
  "/about": () => {
    print(About.render(), Header.render(), Nav.render(), Footer.render());
  },
  "/news/:id": ({ data }) => {
    const { id } = data;
    print(
      NewsDetail.render(id),
      Header.render(),
      Nav.render(),
      Footer.render()
    );
  },
  "/sign-up": () => {
    print(SignUp.render(), Header.render(), Nav.render(), Footer.render());
  },
  "/sign-in": () => {
    print(SignIn.render(), Header.render(), Nav.render(), Footer.render());
  },
  "/admin": () => {
    print(null, null, null, null);

    layout(Dashboard.render(), HeaderAdmin.render());
  },
});

router.resolve();
