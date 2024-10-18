// src/pages/CadastroProdutos.jsx
import React, { useContext, useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import NavBarr from '../components/NavBarr.jsx';
// import ModalCadastrar from '../components/ModalCadastrar.jsx';


import ModalCadastro from '../components/ModalCadastro.jsx';

const url = "http://localhost:5000/produtos";


const CadastroProduto = () => {
  const { produtos, setProdutos } = useState([]);
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [tipo, setTipo] = useState('');

  const handleCadastrar = async () => {
      const novoProduto = { nome, preco, tipo };
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novoProduto),
      });
      
      setNome('');
      setPreco('');
      setTipo('');
  };

    return (
        <div style={{backgroundColor: "#ffcbdb", minHeight:"100vh"}}>
            <NavBarr />
            <Row>
                <Form.Label column="sm" lg={2}>Nome do Produto</Form.Label>
                <Col>
                    <Form.Control
                        size="lg"
                        type="text"
                        placeholder="ex:Torta"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </Col>
            </Row>
            <br />
            <Row>
                <Form.Label column lg={2}>Preço</Form.Label>
                <Col>
                    <Form.Control
                        type="text"
                        placeholder="ex:R$:20,00"
                        value={preco}
                        onChange={(e) => setPreco(e.target.value)}
                    />
                </Col>
            </Row>
            <br />
            <Row>
                <Form.Label column="sm" lg={2}>Tipo</Form.Label>
                <Col>
                    <Form.Control
                        size="sm"
                        type="text"
                        placeholder="Bolo, Torta, Bebida..."
                        value={tipo}
                        onChange={(e) => setTipo(e.target.value)}
                    />
                </Col>
                <Button variant="outline-warning" onClick={handleCadastrar} style={{backgroundColor: "red", color:"white"}}>
                    Adicionar
                </Button>
            </Row>
        </div>
    );
};

export default CadastroProduto