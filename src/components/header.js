import Nav from "./nav";

const Header = {
  render() {
    return `<div class="header bg-slate-400 ">
                <img class='w-24 m-auto py-5' src="./img/logo-green-1x.png" alt="">
            </div>
            ${Nav.render()}
            `;
  },
};

export default Header;
