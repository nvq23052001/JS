import Navigo from "navigo";
import HomePage from "./page/home";
import About from "./page/about";
import Header from "./components/header";
import Footer from "./components/footer";

const router = new Navigo("/", { linksSelector: "a" });

const render = (data) => {
  document.getElementById("header").innerHTML = Header.print();
  document.getElementById("app").innerHTML = data.print();
  document.getElementById("footer").innerHTML = Footer.print();
};

router.on({
  "/": () => {
    render(HomePage);
  },
  "/about": () => {
    render(About);
  },
});

router.resolve();
