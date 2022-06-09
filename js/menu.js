// Web Component - HEADER TEMPLATE

(function () {

  // Insert a component template with content and styling
  const TEMPLATE = document.createElement("template");
  const TEMPLATECONTENT = `
  <style>
  header {
      background: #6A192B;
      color: white;
      text-align: center;
      padding-top: 1%;
      padding-bottom: 0%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
  }

  header .nav-links {
      display: flex;
      align-items: center;
      height: fit-content;
  }

  header .nav-links .nav-link {
      list-style: none;
      padding: 2rem;
      display: inline-block;
      position: relative;
      height: 5px;
      margin-bottom: 4%;
      white-space: nowrap;
  }

  .logo-desktop {
      list-style: none;
      display: inline-block;
      padding: 0 3%;
      height: 150px;
  }

  .logo-mobile {
      display: none;
  }

  header .nav-links .nav-link a {
      text-decoration: none;
      color: #fff;
      transition: 0.3s;
  }

  header .nav-links .nav-link a:after {
      text-decoration: none;
      color: #f8ecd3;
      content: '';
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: #f8ecd3;
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
  }

  header .nav-links .nav-link a:hover:after {
      transform: scaleX(1);
      transform-origin: bottom left;
  }

  header .menu-btn {
      display: none;
  }

  header .menu-icon {
      cursor: pointer;
      padding: 0.5rem;
      position: relative;
      z-index: 1;
      display: none;
  }

  header .menu-icon span {
      height: 3px;
      width: 20px;
      border-radius: 10px;
      background-color: #f8ecd3;
      display: block;
      position: relative;
      text-align: left;
  }

  header .menu-icon span::before,
  header .menu-icon span::after {
      content: "";
      height: 100%;
      width: 100%;
      border-radius: 10px;
      background-color: #f8ecd3;
      position: absolute;
  }

  header .menu-icon span::before {
      transform: translateY(6px);
  }

  header .menu-icon span::after {
      transform: translateY(-6px);
  }

  @media screen and (max-width: 768px) {
      header {
          flex-direction: row;
          overflow-x: hidden;
      }

      .logo-desktop {
          display: none;
      }

      .logo-mobile {
          display: inherit;
          padding: 0 20% 2% 30%
      }

      .logo-mobile img {
          height: 100px;
      }

      header .nav-links {
          position: fixed;
          top: 0;
          display: flex;
          width: 100vw;
          padding: 0;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: rgb(194, 172, 142);
          opacity: 0;
          z-index: 0;
          margin-top: -100px;
          overflow-y: hidden;
          height: 100vh;
      }

      header .nav-links .nav-link {
          margin-left: auto;
          margin-right: auto;
          opacity: 0;
          padding: 1.2rem;
          transform: translateX(100%);
          transition: opacity 0.3s ease-in-out, transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }

      header .nav-links .nav-link:nth-of-type(1) {
          transition-delay: 0.1s;
      }

      header .nav-links .nav-link:nth-of-type(2) {
          transition-delay: 0.2s;
      }

      header .nav-links .nav-link:nth-of-type(3) {
          transition-delay: 0.3s;
      }

      header .nav-links .nav-link:nth-of-type(4) {
          transition-delay: 0.4s;
      }

      header .nav-links .nav-link:nth-of-type(5) {
          transition-delay: 0.5s;
      }

      header .nav-links .nav-link:nth-of-type(6) {
          transition-delay: 0.6s;
      }

      header .nav-links .nav-link:nth-of-type(7) {
          transition-delay: 0.7s;
      }

      header .nav-links .nav-link:nth-of-type(8) {
          transition-delay: 0.8s;
      }

      header .nav-links .nav-link a {
          font-size: 1.8rem;
          color: #fff;
      }

      header .menu-icon {
          display: block;
          overflow: hidden;
          touch-action: none;
      }

      header .menu-icon span {
          animation: closemid 0.5s backwards;
          animation-direction: reverse;
      }

      header .menu-icon span::before {
          animation: closebtm 0.5s backwards;
          animation-direction: reverse;
      }

      header .menu-icon span::after {
          animation: closetop 0.5s backwards;
          animation-direction: reverse;
      }

      header .menu-btn:checked~.menu-icon {
          border-radius: 50%;
          animation: pulse 1s;
      }

      header .menu-btn:checked~.menu-icon span {
          animation: openmid 0.8s forwards;
          background-color: #fff;
      }

      header .menu-btn:checked~.menu-icon span::before {
          animation: openbtm 0.8s forwards;
          background-color: #fff;
      }

      header .menu-btn:checked~.menu-icon span::after {
          animation: opentop 0.8s forwards;
          background-color: #fff;
      }

      header .menu-btn:checked~.nav-links {
          opacity: 1;
          clip-path: circle(100% at center);
      }

      header .menu-btn:checked~.nav-links .nav-link {
          opacity: 1;
          transform: translateX(0);
          transition: opacity 0.4s ease-in-out, transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }

      header .menu-btn:checked~.nav-links .nav-link:nth-of-type(1) {
          transition-delay: 0.5s;
      }

      header .menu-btn:checked~.nav-links .nav-link:nth-of-type(2) {
          transition-delay: 0.6s;
      }

      header .menu-btn:checked~.nav-links .nav-link:nth-of-type(3) {
          transition-delay: 0.7s;
      }

      header .menu-btn:checked~.nav-links .nav-link:nth-of-type(4) {
          transition-delay: 0.8s;
      }

      header .menu-btn:checked~.nav-links .nav-link:nth-of-type(5) {
          transition-delay: 0.9s;
      }

      header .menu-btn:checked~.nav-links .nav-link:nth-of-type(6) {
          transition-delay: 1s;
      }

      header .menu-btn:checked~.nav-links .nav-link:nth-of-type(7) {
          transition-delay: 1.1s;
      }

      header .menu-btn:checked~.nav-links .nav-link:nth-of-type(8) {
          transition-delay: 1.2s;
      }
  }

  @keyframes pulse {
      from {
          box-shadow: 0 0 0 0px rgba(255, 255, 255, 0.6);
          background: rgba(255, 255, 255, 0.6);
      }

      to {
          box-shadow: 0 0 0 1000px rgba(255, 255, 255, 0);
          background: rgba(255, 255, 255, 0);
      }
  }

  @keyframes opentop {
      0% {
          transform: translateY(-3px) rotate(0deg);
      }

      50% {
          transform: translateY(0) rotate(0deg);
      }

      100% {
          transform: translateY(0) rotate(90deg);
      }
  }

  @keyframes closetop {
      0% {
          transform: translateY(-6px) rotate(0deg);
      }

      50% {
          transform: translateY(0) rotate(0deg);
      }

      100% {
          transform: translateY(0) rotate(90deg);
      }
  }

  @keyframes openmid {
      50% {
          transform: rotate(0deg);
      }

      100% {
          transform: rotate(45deg);
      }
  }

  @keyframes closemid {
      50% {
          transform: rotate(0deg);
      }

      100% {
          transform: rotate(45deg);
      }
  }

  @keyframes openbtm {
      0% {
          transform: translateY(6px) rotate(0deg);
      }

      50% {
          transform: translateY(0) rotate(0deg);
      }

      100% {
          transform: translateY(0) rotate(90deg);
      }
  }

  @keyframes closebtm {
      0% {
          transform: translateY(6px) rotate(0deg);
      }

      50% {
          transform: translateY(0) rotate(0deg);
      }

      100% {
          transform: translateY(0) rotate(90deg);
      }
  }
</style>

<header>
  <div class="logo-mobile">
      <img src="img/logo.png" alt="Schloss Oberndorf logo">
  </div>
  <input type="checkbox" id="menu-btn" class="menu-btn">
  <label for="menu-btn" class="menu-icon"><span class="menu-icon__line"></span></label>
  <ul class="nav-links">
      <li class="nav-link"><a href="index.html">Home</a></li>
      <li class="nav-link"><a href="history.html">History</a></li>
      <li class="nav-link"><a href="thecastle.html">The Castle</a></li>
      <li class="logo-desktop"><a href="index.html">
              <img src="img/logo.png" height="70%">
      </li>
      <li class="nav-link"><a href="gallery.html">Gallery</a></li>
      <li class="nav-link"><a href="prices.html">Prices</a></li>
      <li class="nav-link"><a href="faq.html">FAQ</a></li>
      <li class="nav-link"><a href="contact.html">Contact</a></li>
      
  </ul>

</header>
        `;
  TEMPLATE.innerHTML = TEMPLATECONTENT;

  // Defining the html component Example
  class topbar extends HTMLElement {
    constructor() {

      // Always call super first in constructor
      // The super keyword is used to access and 
      // call functions available to all html 
      // elements (like attributes).
      super();

      // Allow change of document (DOM) 
      this.attachShadow({
        mode: 'open'
      });

      // Add component to document 
      this.shadowRoot.appendChild(TEMPLATE.content.cloneNode(true));
    }

  } /* topbar component class end */

  // The HTML tag is called <nav-bar></nav-bar>
  window.customElements.define('nav-bar', topbar);
})();

