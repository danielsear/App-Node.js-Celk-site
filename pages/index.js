import Head from "next/head";
import Menu from "../components/Menu";
import Rodape from "../components/Rodape";

import { Container, Jumbotron } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

function Home() {
  return (
    <>
      <Head>
        <title>Home- Daniel</title>
        <meta name="description" content="Site de ... sobre ..." />
        <meta name="author" content="Daniel" />
      </Head>
      <Menu />

      <Jumbotron fluid className="descr-top">
        <style>
          {`.descr-top{
                  background-color: #000;
                  color: #fed136;
                  padding: 150px 0;
                  margin-bottom: 0rem !important;
              }`}
        </style>
        <Container className="text-center">
          <h1 className="display-4">Titulo</h1>
          <p className="lead">Subtitulo</p>
          <p>
            <a href="#" className="btn btn-outline-warning btn-lg">
              Texto
            </a>
          </p>
        </Container>
      </Jumbotron>
      <Jumbotron fluid className="servicos">
        <style>
          {`.servicos{
                  background-color: #fff;
                  padding: 80px 0;
                  margin-bottom: 0rem !important;
              }
              .circulo{
                  widht:140px;
                  height:140px;
                  background-color: #fed136;
                  font-size: 52px;
                  padding-top: 24px;
                  color: #fff;
              }
              .centralizar{
                  margin: 0 auto !important;
                  float: none !important;
              }
              `}
        </style>
        <Container className="text-center">
          <div>
            <h2 className="display-4">Titulo</h2>
            <p className="lead pd-4">Subtitulo</p>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="rounded-circle circulo centralizar">
                <FontAwesomeIcon icon={["fas", "code"]} />
              </div>
              <h2 className="mt-4 mb-4">Serviço um</h2>
              <p>Descrição</p>
            </div>
            <div className="col-md-4">
              <div className="rounded-circle circulo centralizar">
                <FontAwesomeIcon icon={["fas", "laptop-code"]} />
              </div>
              <h2 className="mt-4 mb-4">Serviço dois</h2>
              <p>Descrição</p>
            </div>
            <div className="col-md-4">
              <div className="rounded-circle circulo centralizar">
                <FontAwesomeIcon icon={["fas", "mobile-alt"]} />
              </div>
              <h2 className="mt-4 mb-4">Serviço treis</h2>
              <p>Descrição</p>
            </div>
          </div>
        </Container>
      </Jumbotron>
      <Rodape />
    </>
  );
}

export default Home;
