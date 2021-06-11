import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              A fullstack web developer from Riga,Latvia. I create <b className="purple"> professional and responsive </b> web applications to help people go further online 
              <br />
              <br />I am able to integrate any kind of technologies, that will make your websites <b className="purple">user-friendly</b>
              <br />
              <br />
              My expertise is to create fullstack <b className="purple">React.js and Node.js</b> websites, serversside logic and all the functionality using different programming technologies and frameworks
              <br />
              <br />
              I also apply my passion for developing products
              with
              <i>
                <b className="purple"> Modern Javascript Frameworks</b>
              </i>
              &nbsp; mainly with
              <i>
                <b className="purple"> Node.js and React.js</b>
              </i>
              <br/>
              <br/>
              Do not hesitate to contact me. We will find the most proper solution for your project.
              <br/>
              <br/>
              <i>“Make it work, make it right, make it fast.” – <b className="purple">Kent Beck</b></i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
           
              <img src={myImg} className="img-fluid" alt="avatar" />
            
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
