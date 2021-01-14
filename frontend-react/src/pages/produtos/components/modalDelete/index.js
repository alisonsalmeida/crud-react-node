import React, { Component } from "react";
import { Modal, Button } from "semantic-ui-react";
import api from '../../../../service/api'
import { success, error } from '../../../../utils/toast'

export default class ModalDelete extends Component {
  state = {};

  delete = async () => {
    const id = this.props.itemSelect.id
    try {
      await api.delete(`/produtos/${id}/`)
      success("Produto excluido com sucesso!");
      this.props.callback(false);
    } catch (e) {
      error(e.response.data.error !== "Token not provided" ? "Ops... algum problema" : "Token inválido faça Login e tente Novamente");
    }
  }
  render() {

    return (
      <Modal
        onClose={() => {this.props.callback(false)}}
        open={this.props.show}
      >
        <Modal.Header>Excluir</Modal.Header>
        <Modal.Content >
          <Modal.Description>
            <p>Deseja realmente apagar o produto: {this.props.itemSelect.name} ?</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='red' basic onClick={() => {this.props.callback(false)}}>
            Cancelar
          </Button>
          <Button
            content="Deletar"
            labelPosition='right'
            icon='checkmark'
            onClick={() => {this.delete()}}
            positive
          />
        </Modal.Actions>
      </Modal>
    );
  }
}
