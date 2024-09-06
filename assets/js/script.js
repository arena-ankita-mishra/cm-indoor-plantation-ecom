/* Very very important function please do not touch it */
function makeElement(
  myElem = "div",
  myClass,
  attribute = "",
  value = "",
  content = ""
) {
  let i = 0;
  let elem = document.createElement(myElem);
  if (content) {
    elem.innerHTML = content;
  }
  elem.className = myClass;
  if (attribute) {
    attribute.forEach((element) => {
      elem.setAttribute(element, value[i]);
      i++;
    });
  }
  return elem;
}
let header = document.querySelector(".header");
let content1 = `      
<nav
  class="navbar navbar-expand-lg navbar-light bg-light"
  aria-label="Offcanvas navbar large"
  id="dhara-plants-nav"
>
  <div class="container">
    <a class="navbar-brand" href="index.html">
      <img
        class="brand-logo-img"
        src="survival_logo[2].png"
        alt="brands-logo"
        height="40"
      />
    </a>
    <button
      class="navbar-toggler border-0 "
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#myOffcanvasNavbar"
      aria-controls="myOffcanvasNavbar"
    >
      <i class="fa fa-list text-success"></i>
    </button>
    <div
      class="offcanvas offcanvas-start magic-bg"
      tabindex="-1"
      id="myOffcanvasNavbar"
      aria-labelledby="myOffcanvasNavbarLabel"
    >
      <div class="offcanvas-header">
        <a class="navbar-brand" href="index.html">
          <img
            class="brand-logo-img"
            src="survival_logo[2].png"
            alt="brands-logo"
            height="40"
          />
        </a>

        <button
          type="button"
          class="btn-close btn-close-black"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      <!--    <div
          class="row mt-4"
          style="
            width: 100%;
            height: 2px;
            background: linear-gradient(
              90deg,
              rgba(216, 215, 223, 0) 0%,
              rgb(158, 158, 161) 17%,
              rgba(233, 233, 240, 0) 100%
            );
          "
        ></div> -->
      </div>

      <div class="offcanvas-body align-items-md-center">
        <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link" href="index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="offer.html">Offers</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="plant.html">Our Plants</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Exploring Plants
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a class="dropdown-item" href="#">Ferns</a>
              </li>
              <li class="dropdown-submenu">
                <a
                  class="dropdown-item dropdown-toggle"
                  href="#"
                  id="navbarDropdownTV"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Climbing Plants
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Sub Menu</a></li>
                  <li><a class="dropdown-item" href="#">Sub Menu</a></li>
                  <li>
                    <a class="dropdown-item" href="#">Sub Menu</a>
                  </li>
                  <li><a class="dropdown-item" href="#">Sub Menu</a></li>
                  <li><a class="dropdown-item" href="#">Sub Menu</a></li>
                </ul>
              </li>
              <li class="dropdown-submenu">
                <a
                  class="dropdown-item dropdown-toggle"
                  href="#"
                  id="navbarDropdownOriginal"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shrubs
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">Sub Menu</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">Sub Menu</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">Sub Menu</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">Sub Menu</a>
                  </li>
                </ul>
              </li>
              <li class="dropdown-submenu">
                <a
                  class="dropdown-item dropdown-toggle"
                  href="#"
                  id="navbarDropdownGenres"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Herbs
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Sub Menu</a></li>
                  <li><a class="dropdown-item" href="#">Sub Menu</a></li>
                  <li><a class="dropdown-item" href="#">Sub Menu</a></li>
                  <li>
                    <a class="dropdown-item" href="#">Sub Menu</a>
                  </li>
                  <li><a class="dropdown-item" href="#">Sub Menu</a></li>
                </ul>
              </li>
              <li>
                <a class="dropdown-item" href="#">Flowering plants</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Non-Flowering plants</a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li><a class="dropdown-item" href="#">Browse All</a></li>
            </ul>
          </li>
        </ul>

        <div class="search-group d-flex align-items-baseline">
          <form class="input-group d-flex mt-3 mt-lg-0" role="search">
            <div class="input-group">
              <input
                class="form-control me-2 text-center"
                id="navSearch"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
          </form>
        
          <a
            href="#"
            class="  ms-md-3 me-md-4 d-none d-sm-block"
            title="user-cart"
            > <i class="fa fa-shopping-cart text-success"></i></a>
          <a
            href="login.html"
            class=" d-none d-sm-block"
            title="user-login"
            ><i class="fa fa-user text-success"></i
          ></a>
        </div>
      </div>
    </div>
  </div>
</nav>
`;
myHeader = makeElement("div", "container-xxl", "", "", content1);
header.append(myHeader);

let footer = document.querySelector(".footer");
let content2 = `<div class="container-xxl" style="background-color: #1c6644">
  <footer class="py-5 0f0f0f">
    <div class="row">
      <div class="col-6 col-md-2 mb-3 text-white">
        <h5>Home</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-white">Home</a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-white">Offers</a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-white">Our Plants</a>
          </li>
        </ul>
      </div>
      <div class="col-6 col-md-2 mb-3 d-none d-lg-block text-white">
        <h5>categories</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-white">sub categories</a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-white">sub categories</a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-white">Browes all</a>
          </li>
        </ul>
      </div>
      <div class="col-6 col-md-2 mb-3 text-white">
        <h5>Connet With Us</h5>
        <ul class="list-unstyled d-flex justify-content-start">
          <li class="ms-3">
            <a class="link-body-emphasis" href="#"
              ><i
                class="bi bi-twitter-x text-white"
                style="font-size: 24px"
              ></i
            ></a>
          </li>
          <li class="ms-3">
            <a class="link-body-emphasis" href="#"
              ><i
                class="bi bi-instagram text-white"
                style="font-size: 24px"
              ></i
            ></a>
          </li>
          <li class="ms-3">
            <a class="link-body-emphasis" href="#"
              ><i
                class="bi bi-facebook text-white"
                style="font-size: 24px"
              ></i
            ></a>
          </li>
        </ul>
      </div>
      <div class="col-12 col-md-8 col-lg-6 text-center text-sm-start mb-3 text-white">
              <form >
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of what's new and exciting from us.</p>
                <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label for="newsletter1" class="visually-hidden"
                    >Email address</label
                  >
                  <input
                    id="newsletter1"
                    type="text"
                    class="form-control"
                    placeholder="Email address"
                  />
                  <button class="subBtn" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>

      <div
        class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top text-white"
      >
        <p>© 2024 Company, Inc. All rights reserved.</p>
        <ul class="list-unstyled d-flex">
          <li class="ms-3">
            <a class="link-body-emphasis text-white" href="#" 
              >Terms of Use</a>
          </li>
          <li class="ms-3">
            <a class="link-body-emphasis text-white" href="#" 
              >Privacy policy</a>
          </li>
          <li class="ms-3">
            <a class="link-body-emphasis text-white" href="#" 
              >Cookie policy</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</div>`;
myFooter = makeElement("section", "container-fluid", "", "", content2);
footer.append(myFooter);
