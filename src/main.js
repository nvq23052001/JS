import Navigo from "navigo";
import HomePage from "./page/home";
import About from "./page/about";
import Header from "./components/header";
import Footer from "./components/footer";
import NewsDetail from "./page/newsDetail";

const router = new Navigo("/", { linksSelector: "a" });

const print = (data) => {
  document.getElementById("header").innerHTML = Header.render();
  document.getElementById("app").innerHTML = data;
  document.getElementById("footer").innerHTML = Footer.render();
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
});

router.resolve();
