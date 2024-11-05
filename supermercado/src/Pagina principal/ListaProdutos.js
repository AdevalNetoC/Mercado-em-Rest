// components/ListaProdutos.js

import React, { useState } from 'react';
import './ListaProdutos.css'; // Importando o arquivo CSS

const ListaProdutos = () => {
  const [produtos, setProdutos] = useState([
    { id: 1, nome: 'Ervinha da boa', descricao: 'Essa erva é perfeita para aqueles dias infelizes', preco: 50, promocao: null },
    { id: 2, nome: 'Produto 2', descricao: 'Descrição do produto 2.', preco: 20, promocao: null },
    { id: 3, nome: 'Produto 3', descricao: 'Descrição do produto 3.', preco: 15, promocao: null },
  ]);
  
  const [novoProduto, setNovoProduto] = useState({ nome: '', descricao: '', preco: '' });
  
  const handleInputChange = (e) => {
    setNovoProduto({ ...novoProduto, [e.target.name]: e.target.value });
  };
  
  const addProduto = () => {
    const produto = {
      ...novoProduto,
      id: produtos.length + 1,
      preco: parseFloat(novoProduto.preco),
      promocao: null,
    };
    setProdutos([...produtos, produto]);
    setNovoProduto({ nome: '', descricao: '', preco: '' });
  };
  
  const updateProduto = (id, updatedInfo) => {
    setProdutos(produtos.map(produto => produto.id === id ? { ...produto, ...updatedInfo } : produto));
  };
  
  const removeProduto = (id) => {
    setProdutos(produtos.filter(produto => produto.id !== id));
  };

  const applyPromocao = (id, desconto) => {
    setProdutos(produtos.map(produto => produto.id === id ? { ...produto, promocao: desconto } : produto));
  };
  
  return (
    <div className="container">
      <h2>Produtos Disponíveis</h2>
      <div className="produto-grid">
        {produtos.map(produto => (
          <div key={produto.id} className="produto-card">
            <h3>{produto.nome}</h3>
            <p>{produto.descricao}</p>
            <span>R$ {produto.promocao ? produto.preco * (1 - produto.promocao / 100) : produto.preco}</span>
            <button onClick={() => removeProduto(produto.id)}>Remover</button>
            <button onClick={() => applyPromocao(produto.id, 10)}>Aplicar 10% de Desconto</button>
          </div>
        ))}
      </div>
      <div className="add-produto-form">
        <h3>Adicionar Produto</h3>
        <input type="text" name="nome" placeholder="Nome do Produto" value={novoProduto.nome} onChange={handleInputChange} />
        <input type="text" name="descricao" placeholder="Descrição" value={novoProduto.descricao} onChange={handleInputChange} />
        <input type="number" name="preco" placeholder="Preço" value={novoProduto.preco} onChange={handleInputChange} />
        <button onClick={addProduto}>Cadastrar Produto</button>
      </div>
    </div>
  );
};

export default ListaProdutos;