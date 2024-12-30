import { Container, Row, Col } from "react-bootstrap";

export const Gallery = () => {
  return (
    <>
      {/* <div className="mobile-gallery">
        <div className="small-footer py-3 d-none d-md-flex mt-3">
          <p className="home-reserve p-0 m-0"> REZERVIŠI NA </p>
          <button className="home-contact-btn my-2">
            {" "}
            <a
              href="https://www.booking.com/Share-uyVWbr"
              className="a-tag"
              target="_blank"
            >
              {" "}
              BOOKING.COM{" "}
            </a>{" "}
          </button>
          <button className="home-contact-btn  ">
            {" "}
            <a
              href="https://www.airbnb.com/rooms/746220543714154929?check_in=2024-11-13&check_out=2024-11-18&guests=1&adults=1&s=67&unique_share_id=012840e5-e262-40a9-b344-1237ccb4f7c9"
              className="a-tag"
              target="_blank"
            >
              {" "}
              AIRBNB.COM{" "}
            </a>{" "}
          </button>
        </div>

        <Row>
          <Col lg={8}> ovo je mobilna </Col>
          <Col lg={4}> ovo je mobilna</Col>
          <Col lg={8}> ovo je mobilna </Col>
          <Col lg={4}> ovo je mobilna</Col>
          <Col lg={8}> ovo je mobilna </Col>
          <Col lg={4}> ovo je mobilna</Col>
          <Col lg={8}> ovo je mobilna </Col>
          <Col lg={4}> ovo je mobilna</Col>
          <Col lg={8}> ovo je mobilna </Col>
          <Col lg={4}> ovo je mobilna</Col>
          <Col lg={8}> ovo je mobilna </Col>
          <Col lg={4}> ovo je mobilna</Col>
          <Col lg={8}> ovo je mobilna </Col>
          <Col lg={4}> ovo je mobilna</Col>
        </Row>
      </div> */}
      <div className="pt-3">
        <Row className="d-md-none d-flex m-0">
          <div className="small-footer py-3  ">
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
          <Col sm={6} className="p-0 ">
            <img src="/images/1.jpg" className="home-image" />
          </Col>
          <Col sm={6} className=" p-0">
            <img src="/images/2.jpg" className="home-image" />
          </Col>
          <Col sm={6} className=" p-0">
            <img src="/images/3.jpg" className="home-image" />
          </Col>
          <Col sm={6} className=" p-0">
            <img src="/images/4.jpg" className="home-image" />
          </Col>
          <Col sm={6} className=" p-0">
            <img src="/images/5.jpg" className="home-image" />
          </Col>
          <Col sm={6} className=" p-0">
            <img src="/images/6.jpg" className="home-image" />
          </Col>
          <Col sm={6} className=" p-0">
            <img src="/images/9.jpg" className="home-image" />
          </Col>
          <Col sm={6} className=" p-0">
            <img src="/images/8.jpg" className="home-image" />
          </Col>
          <Col sm={6} className=" p-0">
            <img src="/images/11.jpg" className="home-image" />
          </Col>
          <Col sm={6} className=" p-0">
            <img src="/images/10.jpg" className="home-image" />
          </Col>
        </Row>
        <Row className="m-0 d-none d-md-flex">
          <Col sm={8} className="p-0 ">
            {" "}
            <img src="/images/1.jpg" className="home-image" />{" "}
          </Col>
          <Col sm={4} className="col-pink p-0">
            <div className="rooms-div">
              <p className="room-title m-0 py-1"> Dnevni boravak</p>
              <img src="/images/Line.png" />
              <p className="room-descr m-0 py-2">
                {" "}
                Prostrani dnevni boravak osmišljen je za opuštanje i druženje, s
                udobnim namještajem i modernim dizajnom. Topli tonovi i
                dekorativni elementi doprinose ugodnoj atmosferi.{" "}
              </p>
            </div>
          </Col>
          <Col sm={4} className="col-brown p-0">
            <div className="rooms-div">
              <p className="room-title m-0 py-1"> Spavaća soba </p>
              <img src="/images/Line.png" />
              <p className="room-descr m-0 py-2">
                {" "}
                Prostrana spavaća soba sadrži udoban krevet širine 180 cm,
                idealan za opuštanje i miran san. Dekoracija je jednostavna, s
                naglaskom na neutralne tonove koji stvaraju opuštajuću
                atmosferu.
              </p>
            </div>
          </Col>
          <Col sm={8} className="p-0">
            {" "}
            <img src="/images/6.jpg" className="home-image" />
          </Col>
          <Col sm={8} className="p-0 ">
            {" "}
            <img src="/images/3.jpg" className="home-image" />{" "}
          </Col>
          <Col sm={4} className="col-darkpink p-0">
            <div className="rooms-div">
              <p className="room-title white m-0 py-1"> Trpezarija</p>
              <img src="/images/Linewhite.png" />
              <p className="room-descr white m-0 py-2">
                Elegantna trpezarija sadrži sto sa osam udobnih stolica, savršen
                za okupljanje porodice i prijatelja. Prostor je moderan i
                svijetao, s pažljivo odabranim detaljima koji dodaju
                sofisticiranost.
              </p>
            </div>
          </Col>
          <Col sm={4} className="col-darkbeige p-0">
            <div className="rooms-div">
              <p className="room-title m-0 py-1"> Gostinjska soba </p>
              <img src="/images/Line.png" />
              <p className="room-descr m-0 py-2">
                Gostinjska soba ima praktičan dupli krevet koji osigurava ugodan
                boravak za dvoje. Uređena je u prijatnim, toplim tonovima koji
                pružaju osjećaj dobrodošlice.
              </p>
            </div>
          </Col>
          <Col sm={8} className="p-0">
            {" "}
            <img src="/images/5.jpg" className="home-image" />
          </Col>
          <Col sm={8} className="p-0 ">
            {" "}
            <img src="/images/4.jpg" className="home-image" />{" "}
          </Col>
          <Col sm={4} className="col-beige p-0">
            <div className="rooms-div">
              <p className="room-title  m-0 py-1"> Kuhinja</p>
              <img src="/images/Line.png" />
              <p className="room-descr   m-0 py-2">
                Bogato opremljena kuhinja sadrži sve potrebne uređaje i dodatke
                za pripremu raznovrsnih jela. Funkcionalna i dobro organizovana,
                prilagođena je svakodnevnim potrebama.
              </p>
            </div>
          </Col>
        </Row>
        <div className="small-footer py-3  ">
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
    </>
  );
};
