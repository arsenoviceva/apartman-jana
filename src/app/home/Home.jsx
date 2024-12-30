import { Row, Col, Container } from "react-bootstrap";
import {
  MdBalcony,
  MdSquareFoot,
  MdKitchen,
  MdAcUnit,
  MdWifi,
  MdLocalParking,
} from "react-icons/md";
import { Icons } from "./Icons";
import { Visit } from "./Visit";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home-container">
      <Container>
        <Row>
          <Col lg={5}>
            <h1 className="fw-bold color-dark-grey title">
              {" "}
              Dobrodošli u Apartman Jana
            </h1>
            <p className="home-text pb-2">
              Vaš bijeg do udobnog, stilizovanog i praktičnog boravka. Otkrijte
              prelijepo dizajniran prostor u kojem se osjećate kao kod kuće,
              savršen za vaš sledeći boravak. Doživite spoj elegancije i
              udobnosti sa nama.
            </p>
            <Link to="/contact" className="home-contact-btn my-2 ">
              KONTAKTIRAJTE NAS{" "}
            </Link>
            <a
              href="https://www.booking.com/Share-uyVWbr"
              className="home-contact-btn my-2 mt-3 show"
              target="_blank"
            >
              {" "}
              BOOKING.COM{" "}
            </a>{" "}
            <a
              href="https://www.airbnb.com/rooms/746220543714154929?check_in=2024-11-13&check_out=2024-11-18&guests=1&adults=1&s=67&unique_share_id=012840e5-e262-40a9-b344-1237ccb4f7c9"
              className="home-contact-btn show"
              target="_blank"
            >
              {" "}
              AIRBNB.COM{" "}
            </a>
          </Col>
          <Col lg={7} className="p-0 ps-lg-5 col-hide-mobile mt-3">
            <img src="/images/1.jpg" className="home-image" />
          </Col>
        </Row>
        <Row className="align-items-center justify-content-center py-5">
          <Col
            lg={2}
            xs={4}
            className="d-flex align-items-center justify-content-center py-3"
          >
            <Icons
              icon={<MdLocalParking className="icon" />}
              text={"Parking"}
            />
          </Col>
          <Col
            lg={2}
            xs={4}
            className="d-flex align-items-center justify-content-center py-3"
          >
            <Icons icon={<MdWifi className="icon" />} text={"Wi-Fi"} />
          </Col>
          <Col
            lg={2}
            xs={4}
            className="d-flex align-items-center justify-content-center py-3"
          >
            <Icons icon={<MdAcUnit className="icon" />} text={"Klima"} />
          </Col>
          <Col
            lg={2}
            xs={4}
            className="d-flex align-items-center justify-content-center py-3"
          >
            <Icons icon={<MdKitchen className="icon" />} text={"Kuhinja"} />
          </Col>
          <Col
            lg={2}
            xs={4}
            className="d-flex align-items-center justify-content-center py-3"
          >
            <Icons icon={<MdSquareFoot className="icon" />} text={"81m2"} />
          </Col>
          <Col
            lg={2}
            xs={4}
            className="d-flex align-items-center justify-content-center py-3"
          >
            <Icons icon={<MdBalcony className="icon" />} text={"Balkon"} />
          </Col>
        </Row>
        <p className="apartman-info  ">
          {" "}
          Apartman Jana se nalazi u centru grada Bijeljina. Prostrani apartman
          ima 81m2, sadrži 2 spavaće sobe, flat-screen TV sa kablovskim kanalima
          i potpuno opremljenu kuhinju koja gostima nudi rernu, mikrotalasnu
          pećnicu, mašinu za pranje veša, frižider i ploču za kuvanje.Na mirnoj
          lokaciji, preko puta gradskog parka i na 2 minuta hoda do centra
          grada.Apartman posjeduje i besplatan privatni parking.Najbliži
          aerodrom je Međunarodni aerodrom Tuzla, udaljen 67 km od Apartmana
          Jana, a Aerodrom Nikola Tesla u Beogradu na 120 km.
        </p>
      </Container>
      <div className="pink-background  ">
        <Row className="p-0 m-0">
          <Col lg={8} md={7} className="p-0">
            <img src="/images/3.jpg" className="home-image" />
          </Col>
          <Col lg={4} md={5} className="d-flex-column ps-2">
            <p className="home-reserve"> REZERVIŠI NA </p>
            <a
              href="https://www.booking.com/hotel/ba/apartman-jana-bijeljina1.en-gb.html"
              className="home-contact-btn my-2"
              target="_blank"
            >
              {" "}
              BOOKING.COM{" "}
            </a>{" "}
            <a
              href="https://www.airbnb.com/rooms/746220543714154929?check_in=2024-11-13&check_out=2024-11-18&guests=1&adults=1&s=67&unique_share_id=012840e5-e262-40a9-b344-1237ccb4f7c9"
              className="home-contact-btn"
              target="_blank"
            >
              {" "}
              AIRBNB.COM{" "}
            </a>
          </Col>
        </Row>
      </div>

      <Visit />
      <div className="small-footer py-3 d-none d-md-flex mt-3">
        <p className="home-reserve p-0 m-0"> REZERVIŠI NA </p>
        <a
          href="https://www.booking.com/hotel/ba/apartman-jana-bijeljina1.en-gb.html"
          className="home-contact-btn my-2"
          target="_blank"
        >
          {" "}
          BOOKING.COM{" "}
        </a>{" "}
        <a
          href="https://www.airbnb.com/rooms/746220543714154929?check_in=2024-11-13&check_out=2024-11-18&guests=1&adults=1&s=67&unique_share_id=012840e5-e262-40a9-b344-1237ccb4f7c9"
          className="home-contact-btn"
          target="_blank"
        >
          {" "}
          AIRBNB.COM{" "}
        </a>
      </div>
    </div>
  );
};
