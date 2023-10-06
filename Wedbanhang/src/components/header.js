import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="p-3 bg-dark text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <svg
                className="bi me-2"
                width="40"
                height="32"
                role="img"
                aria-label="Bootstrap"
              ></svg>
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                {" "}
                <NavLink to="/" className="nav-link  text-secondary">
                  Trang Chủ
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink
                  to="/product-type"
                  className="nav-link px-2 text-secondary"
                >
                  Sản Phẩm
                </NavLink>
              </li>

              <li>
                {" "}
                <NavLink
                  to="/product-detail"
                  className="nav-link px-2 text-secondary"
                >
                  Sản Phẩm khác
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink
                  to="/product-detail"
                  className="nav-link px-2 text-secondary"
                >
                  Giới thiệu
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink
                  to="/product-detail"
                  className="nav-link px-2 text-secondary"
                >
                  Liên Hệ
                </NavLink>
              </li>
            </ul>

            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
              <input
                type="search"
                className="form-control form-control-dark"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>

            <div className="text-end">
              <button type="button" className="btn btn-outline-light me-2">
                Login
              </button>
              <button type="button" className="btn btn-warning me-2">
                Sign-up
              </button>
              <button type="button" className="btn btn-outline-light">
                Giỏ hàng
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
