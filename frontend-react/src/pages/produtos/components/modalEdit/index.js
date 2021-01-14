import React, { Component } from "react";
import { Modal, Form, Button } from "semantic-ui-react";
import api from '../../../../service/api'
import { success, error } from '../../../../utils/toast'

export default class ModalEdit extends Component {
  state = {
    name: "",
    code: "",
    value: "",
    quantity: "",
    id: null,
    errors: {}
  };

  LoadData = () =>{
    const {name,code, value, quantity, id} = this.props.itemSelect;
    this.setState({name,code, value, quantity, id})
  }

  clear = () => {
    this.setState({name: "",code: "", value:"", quantity:""})
  }

  onSave = async () => {
    const { name, code, value, quantity, id } = this.state;
    const errors = this.validateForm();
    if(errors){
      error("Preencha todos os campos obrigatórios!");
      return;
    }
    try {
      let data = {"name": name, "code": code, "value": value, "quantity": quantity};
      await api.put(`/produtos/${id}/`, data);
      success("Produto salvo com sucesso!");
      this.props.callback(false);
    } catch (e) {
      error(e.response.data.error !== "Token not provided" ? "Ops... algum problema" : "Token inválido faça Login e tente Novamente");

    }
  }

  validateForm = () => {
    const errors = {};
    const {name, code, value, quantity} = this.state;

    if (name === "") {
      errors["name"] = true;
    }
    if (code === "") {
      errors["code"] = true;
    }
    if (value === "") {
      errors["value"] = true;
    }
    if (quantity === "") {
      errors["quantity"] = true;
    }
    
    this.setState({ errors });
    return Object.keys(errors).length;
  };

  clear = () => {
    this.setState({name: "",code: "", value:"", quantity:""})
  };

  render() {
    const {name, code, value, quantity, errors} = this.state;

    return (
      <Modal
        onClose={() => {this.props.callback(false)}}
        onMount={()=> this.LoadData()}
        onUnmount={()=> this.clear()}
        open={this.props.show}
      >
        <Modal.Header>Editar Produto: {this.props.itemSelect.name } </Modal.Header>
        <Modal.Content >
          <Form>
            <div style={{display:"flex",justifyContent:"space-between"}}>
            <Form.Input
              label="Nome"
              placeholder="Produto de boa qualidade"
              name="name"
              value={name}
              maxLength="30"
              error={errors["name"] ? true : false}
              onChange={(e)=>this.setState({name: e.target.value})}
              required
              width={10}
            />
            <Form.Input
              label="Código"
              placeholder="22883044"
              name="code"
              value={code}
              maxLength="30"
              error={errors["cod"] ? true : false}
              onChange={(e)=>this.setState({cod: e.target.value})}
              required
              width={5}
            />
            </div>
            <div style={{display:"flex",justifyContent:"space-between"}}>
            <Form.Input
              label="Preço"
              placeholder="1,99"
              required
              type="number"
              name="value"
              value={value}
              maxLength="6"
              error={errors["value"] ? true : false}
              onChange={(e)=>this.setState({value: e.target.value})}
              width={7}
            />
            <Form.Input
              label="Quantidade"
              placeholder="3"
              required
              type="number"
              value={quantity}
              maxLength="6"
              error={errors["quantity"] ? true : false}
              onChange={(e)=>this.setState({quantity: e.target.value})}
              name="code"
              width={8}
            />
            </div>

          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button color='red' basic onClick={() => {this.props.callback(false)}}>
            Cancelar
          </Button>
          <Button
            content="Salvar"
            labelPosition='right'
            icon='checkmark'
            onClick={() => {this.onSave()}}
            positive
          />
        </Modal.Actions>
      </Modal>
    );
  }
}
