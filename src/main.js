import Navigo from "navigo";
import HomePage from "./page/home";

const router = new Navigo("/", { linksSelector: "a" });

const render = (data) => {
  document.getElementById("app").innerHTML = data.print();
};

router.on({
  "/": () => {
    render(HomePage);
  },
  "/about": () => {
    render("<h1>About page</h1>");
  },
});

router.resolve();
