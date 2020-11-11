import React from "react";

import { Container, Jumbotron } from "reactstrap";

const Rodape = () => {
  return (
    <div>
      <Jumbotron fluid className="rodape">
        <style>
          {`.rodape{
           background-color: #000;
           color: #fed136;
           paddging: 10px 0;
           margin-bottom: 0rem !important;
         }`}
        </style>
        <Container className="text-center ">
          <h2 className="lead">Rodape</h2>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Rodape;
