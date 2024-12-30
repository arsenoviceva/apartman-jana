import { Container, Row, Col } from "react-bootstrap";
import { VisitCard } from "./VisitCard";

export const Visit = () => {
  return (
    <div className="visit-container  ">
      <p className="visit-title ms-2"> ŠTA POSJETITI </p>
      <p className="visit-text ms-2">
        {" "}
        Izdvajamo vam neke od popularnih destinacija u blizini našeg apartmana
      </p>
      <Row className="m-0 pb-3">
        <Col
          md={4}
          sm={6}
          className="d-flex align-items-center justify-content-evenly py-2"
        >
          <VisitCard
            title={"GRADSKI PARK"}
            src={"/images/card1.png"}
            text={
              "Gradski park-pluća Bijeljine, raj za zaljubljene i idealno mjesto za rekreaciju. "
            }
          />
        </Col>
        <Col
          md={4}
          sm={6}
          className="py-2 d-flex align-items-center justify-content-evenly"
        >
          <VisitCard
            title={"GRADSKA SKUPŠTINA"}
            src={"/images/card2.png"}
            text={
              "Današnja zgrada Skupštine grada, po kojoj je trg, ali i cijeli grad vizuelno prepoznatljiv.   "
            }
          />
        </Col>
        <Col
          md={4}
          sm={6}
          className=" py-2 d-flex align-items-center justify-content-evenly"
        >
          <VisitCard
            title={"MUZEJ SEMBERIJE"}
            src={"/images/card3.png"}
            text={
              "Muzej Semberije se nalazi najstarijoj zgradi u Bijeljini, a istorijat zgrade je zanimljiv."
            }
          />
        </Col>
        <Col
          md={4}
          sm={6}
          className=" py-2 d-flex align-items-center justify-content-evenly"
        >
          <VisitCard
            title={"ETNO SELO STANIŠIĆ"}
            src={"/images/card6.png"}
            text={
              "Etno selo Stanišići, izvan sadašnjeg vremena i prostora, vraća nas precima i prirodi."
            }
          />
        </Col>{" "}
        <Col
          md={4}
          sm={6}
          className=" py-2 d-flex align-items-center justify-content-evenly"
        >
          <VisitCard
            title={"BANJA DVOROVI"}
            src={"/images/card5.png"}
            text={
              "Banja Dvorovi je pravo mjesto za odmor, prevenciju i liječenje raznih bolesti."
            }
          />
        </Col>{" "}
        <Col
          md={4}
          sm={6}
          className=" py-2 d-flex align-items-center justify-content-evenly"
        >
          <VisitCard
            title={"RIJEKA DRINA"}
            src={"/images/card4.png"}
            text={
              "Drina nastaje kod Šćepan polja, od planinskih rijeka Pive i Tare, a uliva se u Savu kod Bosanske Rače."
            }
          />
        </Col>
      </Row>
    </div>
  );
};
