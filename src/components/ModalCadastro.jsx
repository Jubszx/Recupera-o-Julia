import React, { useContext, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const ModalCadastro = ({ show, onHide }) => {
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [tipo, setTipo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const novoProduto = {
            nome,
            preço: preco,
            tipo
        };


        setNome('');
        setPreco('');
        setTipo('');
        onHide(); 
    };

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Cadastrar Produto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formNome">
                        <Form.Label>Nome do Produto</Form.Label>
                        <Form.Control
                            type="text"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formPreco">
                        <Form.Label>Preço</Form.Label>
                        <Form.Control
                            type="number"
                            value={preco}
                            onChange={(e) => setPreco(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formPreco">
                        <Form.Label>Tipo</Form.Label>
                        <Form.Control
                            type="number"
                            value={tipo}
                            onChange={(e) => setTipo(e.target.value)}
                            required
                        />
                    </Form.Group>
                    {/* <Button variant="primary" type="submit">
                        Cadastrar
                    </Button> */}
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default ModalCadastro