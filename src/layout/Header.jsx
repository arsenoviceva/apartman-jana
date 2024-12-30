import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import { Row, Col, Container, Offcanvas } from "react-bootstrap";

export const Header = () => {
  const navigate = useNavigate();
  const onClickHandler = (path) => {
    navigate(path);
  };

  return (
    <Container>
      <Navbar bg="transparent" variant="dark" expand="lg" className="  mb-3">
        <Container fluid className="header-container">
          <Navbar.Brand href="/">
            <img src="/images/janalogo.png" alt="Brand Logo" />
          </Navbar.Brand>
          <Navbar.Toggle
            className="custom-toggler"
            aria-controls="offcanvasNavbar"
          />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            className="  custom-toggler"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                id="offcanvasNavbarLabel"
                className="text-primary"
              ></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link
                  href="/"
                  className="nav-link d-flex justify-content-end fs-5"
                >
                  Početna
                </Nav.Link>
                <Nav.Link
                  href="/gallery"
                  className="nav-link  d-flex justify-content-end fs-5"
                >
                  Galerija
                </Nav.Link>

                <Nav.Link
                  href="/contact"
                  className="nav-link  d-flex justify-content-end fs-5"
                >
                  Kontakt
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </Container>
    // <div className="header-container px-3 ">
    //   <nav className="navbar navbar-expand-lg ">
    //     <div className="container border-1 ">
    //       <a className="navbar-brand" href="/">
    //         <img src="/images/janalogo.png" alt="Brand Logo" />
    //       </a>

    //       <button
    //         className="navbar-toggler custom-toggler"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#navbarNav"
    //         aria-controls="navbarNav"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <span className="navbar-toggler-icon"></span>
    //       </button>

    //       <div className="collapse navbar-collapse" id="navbarNav">
    //         <ul className="navbar-nav ms-auto gap-5r">
    //           <li className="nav-item">
    //             <Nav.Link
    //               className="nav-link"
    //               onClick={() => onClickHandler("/")}
    //             >
    //               Početna
    //             </Nav.Link>
    //           </li>
    //           <li className="nav-item">
    //             <Nav.Link
    //               className="nav-link"
    //               onClick={() => onClickHandler("/gallery")}
    //             >
    //               Galerija
    //             </Nav.Link>
    //           </li>
    //           <li className="nav-item">
    //             <Nav.Link
    //               className="nav-link"
    //               onClick={() => onClickHandler("/contact")}
    //             >
    //               Kontakt
    //             </Nav.Link>
    //           </li>
    //           <li className=" align-items-center d-none d-lg-flex">
    //             <Nav.Link
    //               href="https://www.instagram.com/apartman_jana_bijeljina/"
    //               target="_blank"
    //               className="text-decoration-none text-black "
    //             >
    //               <img
    //                 src="/images/Instagram.png"
    //                 className="cursor-pointer "
    //               />
    //             </Nav.Link>
    //           </li>
    //         </ul>
    //       </div>

    /* // <div className="collapse navbar-collapse" id="navbarNav">
          //   <ul className="navbar-nav ms-auto gap-5r">
          //     <li className="nav-item">
          //       <Nav.Link
          //         className="nav-link"
          //         onClick={() => onClickHandler("/")}
          //       >
          //         Početna
          //       </Nav.Link>
          //     </li>
          //     <li className="nav-item">
          //       <Nav.Link
          //         className="nav-link"
          //         onClick={() => onClickHandler("/gallery")}
          //       >
          //         Galerija
          //       </Nav.Link>
          //     </li>
          //     <li className="nav-item">
          //       <Nav.Link
          //         className="nav-link"
          //         onClick={() => onClickHandler("/contact")}
          //       >
          //         Kontakt
          //       </Nav.Link>
          //     </li>
          //     <li className=" align-items-center d-none d-lg-flex">
          //       <Nav.Link
          //         href="https://www.instagram.com/apartman_jana_bijeljina/"
          //         target="_blank"
          //         className="text-decoration-none text-black "
          //       >
          //         <img
          //           src="/images/Instagram.png"
          //           className="cursor-pointer "
          //         />
          //       </Nav.Link>
          //     </li>
          //   </ul>
          // </div> */
    //     </div>
    //   </nav>
    // </div>
  );
};
