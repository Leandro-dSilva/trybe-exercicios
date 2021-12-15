import React from 'react';
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { estados } from './estados';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      formData: {
        "Nome": '',
        "Email": '',
        "CPF": '',
        "Endereço": '',
        "Cidade": '',
        "Estado": '',
        "Tipo de moradia": '',
        "Resumo do currículo": '',
        "Cargo": '',
        "Descrição do cargo": '',
      },
      cargoBalloon: { display: "none" },
      cargoballoonDisplayed: false,
      validState: false,
    }

    this.addressFunc = this.addressFunc.bind(this);
    this.cityOnBlur = this.cityOnBlur.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onMouseEnterTextArea = this.onMouseEnterTextArea.bind(this);
    this.stateOnClick = this.stateOnClick.bind(this);
  }

  onChange({ target: { name, value } }) {
    const { formData } = this.state;
    Object.assign(formData, {[name]: value});
    this.setState({ formData });
  }

  addressFunc({ target: { name, value } }) {
    const replaceValue = value.normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
	  	.replace(/([^\w]+|\s+)/g, ' ');

    const { formData } = this.state;
    Object.assign(formData, { [name]: replaceValue} );
    this.setState({ formData });
  }

  cityOnBlur({ target: { value} }) {
    const firstCaractere = value && value[0].replace(/[0-9]/g,'number')
    if (firstCaractere === 'number') {
      const { formData } = this.state;
      Object.assign(formData, { "Cidade": ''} );
      this.setState({ formData });
    }
  }

  onMouseEnterTextArea() {
    const cargoBalloonTrue = {
      position: "absolute",
      backgroundColor: "green",
      border: "solid 1px green",
      zIndex: "1",
      marginLeft: "15px",
      padding: "1.3em 1em 0",
      marginTop: "-1em",
      clipPath: "polygon(0 31%, 20% 31%, 15% 0, 24% 31%, 100% 31%, 100% 100%, 0 100%)",
      borderRadius: "3px",
      color: "white",
    }

    const { cargoballoonDisplayed } = this.state;

    if (!cargoballoonDisplayed) { 
      this.setState({ cargoBalloon: cargoBalloonTrue })
      setTimeout(() => {this.setState({ 
        cargoBalloon: { display: "none" },
        cargoballoonDisplayed: true })},
        5000
      );
    }
  }

  stateOnClick() {
    const{ formData: { Estado } } = this.state;
    (Estado !== 'Selecione o estado') 
      ? this.setState({ validState: true })
      : this.setState({ validState: false })
  }

  render() {
    const { formData, cargoBalloon, validState } = this.state;

    return (
      <Container>
        <Form>
          <h1
            className='text-center'
            style={{ color: "white", padding: ".4em" }}
          >
            Cadastro de Currículo
          </h1>
          <fieldset>
            <Row>
              <Col>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Nome Completo (max 40)"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    name="Nome"
                    value={ formData["Nome"] }
                    maxLength={40}
                    placeholder="Nome Completo"
                    style={{ textTransform: 'uppercase' }}
                    onChange={ this.onChange }
                    required
                  />
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Email (max 50)"
                  className="mb-3"
                >
                  <Form.Control
                    type="email"
                    name="Email"
                    value={ formData["Email"] }
                    onChange={ this.onChange }
                    placeholder="name@example.com"
                    maxLength={50}
                    required
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Row>
              <Col>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Endereço (max 200)"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    placeholder="Endereço"
                    maxLength={200}
                    required
                    name="Endereço"
                    value={ formData["Endereço"] }
                    onChange={ this.addressFunc }
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label className="mb-3" style={{ color: 'white' }}>
                  Casa {}
                  <Form.Check
                    inline
                    type="radio"
                    name="Tipo de moradia"
                    value="Casa"
                    onChange={ this.onChange }
                  />
                </Form.Label>
                <Form.Label style={{ color: 'white' }}>
                  Apartamento {}
                  <Form.Check
                    inline
                    type="radio"
                    name="Tipo de moradia"
                    value="Apartamento"
                    onChange={ this.onChange }
                    required
                  />
                </Form.Label>
              </Col>
            </Row>
            <Row>
              <Col>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Cidade (max 28)"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    maxLength={28}
                    placeholder="Cidade"
                    name="Cidade"
                    value={ formData["Cidade"] }
                    required
                    onChange={ this.onChange }
                    onBlur={ this.cityOnBlur }
                  />
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel
                  controlId="floatingSelect"
                  label="Estado"
                  className="mb-3"
                >
                  <Form.Control
                    as="select"
                    name="Estado"
                    value={ formData["Estado"] }
                    onChange={this.onChange}
                    onClick={ this.stateOnClick }
                    >
                    {
                      estados.map(({ sigla, nome }) =>
                        <option key={ sigla }>{ nome }</option>)
                    }
                  </Form.Control>
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel
                  controlId="floatingInput"
                  label="CPF"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    placeholder="CPF"
                    maxLength={11}
                    name="CPF"
                    value={ formData["CPF"] }
                    onChange={this.onChange}
                    required
                  />
                </FloatingLabel>
              </Col>
            </Row>
          </fieldset>
          <fieldset>
            <Row>
              <Col>
                <FloatingLabel
                  className="mb-3"
                  label="Resumo do currículo (max 1000)"
                >
                  <Form.Control
                    as="textarea"
                    maxLength={1000}
                    placeholder="Resumo do currículo"
                    style={{ minHeight: '250px' }}
                    name="Resumo do currículo"
                    value={ formData["Resumo do currículo"] }
                    onChange={this.onChange}
                    required
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Row>
              <Col>
                <FloatingLabel className="mb-3" label="Cargo (max 40)">
                  <Form.Control
                    as="textarea"
                    maxLength={40}
                    placeholder="Cargo"
                    onMouseEnter={ this.onMouseEnterTextArea }
                    name="Cargo"
                    value={ formData["Cargo"] }
                    onChange={this.onChange}
                    required
                  />
                  <div style={ cargoBalloon }>
                    <p>Preencha com cuidado esta informação</p>
                  </div>
                </FloatingLabel>
              </Col>
            </Row>
            <Row>
              <Col>
                <FloatingLabel className="mb-3" label="Descrição do cargo (max 500)">
                  <Form.Control
                    as="textarea"
                    maxLength={500}
                    style={{ minHeight: '150px' }}
                    placeholder="Descrição do cargo"
                    name="Descrição do cargo"
                    value={ formData["Descrição do cargo"] }
                    onChange={this.onChange}
                    required
                  />
                </FloatingLabel>
              </Col>
            </Row>
          </fieldset>
          <Button type="submit" disabled={ !validState }>Salvar</Button>
        </Form>
      </Container>
    );
  }
}

export default App;
