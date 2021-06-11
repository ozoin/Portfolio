import React from "react";
import { Container } from "react-bootstrap";
import Techstack from "./Techstack";

function Stack() {
    return (  
        <Container>
          <h1 className="project-heading">
            Main <strong className="purple">Technologies </strong> I use
          </h1>
          <Techstack />
        </Container>
 
    )
}

export default Stack
