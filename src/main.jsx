import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

//hamburger
const hamburger = document.querySelector("#hamburger"); //# digunakan untuk memilih id

const navmenu = document.querySelector("#menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active"); //jika tidak menggunakan #/apapun berarti class, ini berguna untuk menambahkan hamburger-active di class button
  navmenu.classList.toggle("hidden");
});

//navbar-fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};
