import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import Logo from "../../assets/user.png";

import api from "../../service/api";

import { Form, Container } from "./styles";

class SignUp extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    error: ""
  };


  componentDidMount(){
    document.title = "Desafio-ICTS";
  }
  
  handleSignUp = async e => {
    e.preventDefault();
    const { name, email, password } = this.state;
    if (!name || !email || !password) {
      this.setState({ error: "Preencha todos os dados para se cadastrar" });
    } else {
      try {
        let data = {"name": name, "email": email, "password": password};
        await api.post("/users/", data);
        console.log(data);
        this.props.history.push("/");
      } catch (err) {
        console.log(err.response.data.error);
        this.setState({ error: "Ocorreu um erro ao registrar sua conta." });
      }
    }
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSignUp}>
          <img src={Logo} alt="logo" />
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="text"
            placeholder="Nome de usuário"
            onChange={e => this.setState({ name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Endereço de e-mail"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <button type="submit">Cadastrar grátis</button>
          <hr />
          <Link to="/">Fazer login</Link>
        </Form>
      </Container>
    );
  }
}

export default withRouter(SignUp);