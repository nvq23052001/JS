import Header from "../components/header";
import Footer from "../components/footer";
import Nav from "../components/nav";

const About = {
  render() {
    return `
    <div class=' max-w-7xl mx-auto text-sm'>

    ${Header.render()}
    ${Nav.render()} 
    <h1>About page</h1>
    ${Footer.render()}
    </div>`;
  },
};
export default About;
