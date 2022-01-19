import Header from "../components/header";
import Footer from "../components/footer";
import Nav from "../components/nav";
const NewsDetail = {
  render(id) {
    return fetch(`https://61e83c5be32cd90017acc156.mockapi.io/post/${id}`)
      .then((respond) => {
        return respond.json();
      })
      .then((data) => {
        return `
        <div class=' max-w-7xl mx-auto text-sm'>
          ${Header.render()}
          ${Nav.render()} 
          <div class="max-w-5xl mx-auto">
                  <h1>${data.title}</h1>
                  <img src="${data.img}" />
                  <p>${data.desc}</p>
          </div>
          ${Footer.render()}
          </div>`;
      });
  },
};
export default NewsDetail;
