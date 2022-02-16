import Navigo from "navigo";

import HomePage from "./page/home";
import About from "./page/about";
import Header from "./components/header";
import Footer from "./components/footer";
import NewsDetail from "./page/newsDetail";
import Nav from "./components/nav";
import SignUp from "./page/signUp";
import SignIn from "./page/signIn";

import ProductsPage from "./page/products/index";
import DetailProduct from "./page/products/detail";

import DashBoard from "./page/admin/dashboard";
import News from "./page/admin/news";
import AddNews from "./page/admin/news/add";
import EditNew from "./page/admin/news/edit";

const router = new Navigo("/", { linksSelector: "a", hash:true });

const print = async (content, id) => {
  document.getElementById("app").innerHTML = await content.render(id);
  if (content.afterRender) content.afterRender(id);
};

router.on(
  "/admin/*/",
  () => {
    console.log("truy cap duong dan admon");
  },
  {
    before(done, math) {
      if (localStorage.getItem("user")) {
        const userId = JSON.parse(localStorage.getItem("user")).id;
        if (userId === 1) {
          done();
        } else {
          document.location.href = "/";
        }
      } else {
        document.location.href = "/";
      }
    },
  }
);

router.on({
  "/": () => {
    print(HomePage);
  },
  "/about": () => {
    print(About);
  },
  "/news/:id": ({ data }) => {
    const { id } = data;
    print(NewsDetail, id);
  },
  "/products": () => {
    print(ProductsPage);
  },
  "/product/:id": ({ data }) => {
    const { id } = data;
    print(DetailProduct, id);
  },
  "/signup": () => {
    print(SignUp);
  },
  "/signin": () => {
    print(SignIn);
  },
  "/admin/dashboard": () => {
    print(DashBoard);
  },
  "/admin/news": () => {
    print(News);
  },
  "admin/news/add": () => {
    print(AddNews);
  },
  "/admin/news/:id/edit": ({ data }) => {
    const { id } = data;
    print(EditNew, id);
  },
});

router.resolve();
