import Head from "next/head";
import Menu from "../components/Menu";
import { Container, Jumbotron } from "reactstrap";

function Home() {
  return (
    <>
      <Head>
        <title>Contato- Daniel</title>
        <meta name="description" content="Contato com a empresa  ..." />
        <meta name="author" content="Daniel" />
      </Head>
      <Menu />

      <Jumbotron fluid className="descr-top">
        <style>
          {`.descr-top{
                  background-color: #000;
                  color: #fed136;
                  padding: 100px 0 50px 0;
                  margin-botton: 0rem !important;

              }`}
        </style>
        <Container className="text-center">
          <h1 className="display-4">Contato</h1>
        </Container>
      </Jumbotron>
    </>
  );
}

export default Home;
