import Head from "next/head";

import Menu from "../components/Menu";
import Rodape from "../components/Rodape";

import {
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Jumbotron,
  Button,
} from "reactstrap";

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
                  margin-bottom: 0rem !important;

              }`}
        </style>
        <Container className="text-center">
          <h1 className="display-4">Contato</h1>
        </Container>
      </Jumbotron>
      <Jumbotron fluid className="form-contato">
        <style>
          {`.form-contato{
            padding: 80px 0;
            background-color: #fff;
            margin-botom: 0rem !important;
          }`}
        </style>
        <Container>
          <Form>
            <FormGroup>
              <Label htmlFor="name">Name:</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Digite seu nome completo"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email:</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="exemplo nome@hotmail.com  "
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="content">Conteudo:</Label>
              <Input
                type="textarea"
                name="content"
                id="content"
                placeholder="Conteúdo da mensagem "
              />
            </FormGroup>
            <Button type="submit" outline color="warning">
              Enviar
            </Button>
          </Form>
        </Container>
      </Jumbotron>
      <Rodape />
    </>
  );
}

export default Home;
