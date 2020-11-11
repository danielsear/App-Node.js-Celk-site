import Head from "next/head";
import { Button, Container, Jumbotron } from "reactstrap";

function Home() {
  return (
    <>
      <Head>
        <title>Home- Daniel</title>
        <meta name="description" content="Site de ... sobre ..." />
        <meta name="author" content="Daniel" />
      </Head>
      <Jumbotron fluid className="descr-top">
        <style>
          {`.descr-top{
                  background-color: #000;
                  color: #fed136;

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
    </>
  );
}

export default Home;
