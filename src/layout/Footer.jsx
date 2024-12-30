export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="social-container">
        <a className="navbar-brand" href="/">
          <img
            src="/images/janalogo.png"
            alt="Brand Logo"
            className="footer-logo"
          />
        </a>
        <div className="footer-socials">
          <div className="social-row">
            <img src="/images/Shape.png" />{" "}
            <p className="m-0"> Atinska 25, Bijeljina, Republika Srpska</p>
          </div>
          <div className="social-row">
            <img src="/images/Path.png" />{" "}
            <p className="m-0 ">
              <a
                href="tel:+38766803003"
                className="text-decoration-none text-black"
              >
                +38766803003
              </a>
            </p>
          </div>
          <div className="social-row">
            <img src="/images/email.png" />{" "}
            <p className="m-0 ">
              <a
                href="mailto:apartmanjanabn@gmail.com"
                className="text-decoration-none text-black"
              >
                apartmanjanabn@gmail.com
              </a>
            </p>
          </div>
          <div className="social-row">
            {" "}
            <p className="m-0">
              {" "}
              <a
                href="https://www.instagram.com/apartman_jana_bijeljina/"
                target="_blank"
                className="text-decoration-none text-black "
              >
                {" "}
                <img
                  src="/images/Instagram.png"
                  className="cursor-pointer pe-1"
                />
                apartman_jana_bijeljina{" "}
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-end pt-3">
        <a
          href="https://www.artisanstudio.ba"
          target="_blank"
          className="text-decoration-none text-black "
        >
          {" "}
          <img src="/images/logo2.png" className="cursor-pointer" />
        </a>{" "}
      </div>
    </div>
  );
};
