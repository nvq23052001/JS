import Navigo from "navigo";

import HomePage from "./page/home";
import About from "./page/about";
import Header from "./components/header";
import Footer from "./components/footer";
import NewsDetail from "./page/newsDetail";
import Nav from "./components/nav";
import SignUp from "./page/signUp";
import SignIn from "./page/signIn";

import DashBoard from "./page/admin/dashboard";
import News from "./page/admin/news";
import AddNews from "./page/admin/news/add";
import EditNew from "./page/admin/news/edit";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
  document.getElementById("app").innerHTML = content;
};

const layout = (content, nav, header) => {
  document.getElementById("header__admin").innerHTML = header;
  document.getElementById("nav__admin").innerHTML = nav;
  document.getElementById("content__admin").innerHTML = content;
};

router.on({
  "/": () => {
    print(HomePage.render());
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
    print(SignUp.render());
  },
  "/sign-in": () => {
    print(SignIn.render());
  },
  "/admin/dashboard": () => {
    print(DashBoard.render());
  },
  "/admin/news": () => {
    print(News.render());
  },
  "/admin/news/add": () => {
    print(AddNews.render());
  },
  "/admin/news/:id/edit": ({ data }) => {
    const { id } = data;
    print(EditNew.render(id));
  },
});

router.resolve();
