// components/ListaProdutos.js
import React, { useState } from 'react';

const ListaProdutos = () => {
  const [produtos, setProdutos] = useState([
    { id: 1, nome: 'Ervinha da boa', descricao: 'Essa erva é perfeita para aqueles dias infelizes', preco: 50, promocao: null },
    { id: 2, nome: 'Produto 2', descricao: 'Descrição do produto 2.', preco: 20, promocao: null },
    { id: 3, nome: 'Produto 3', descricao: 'Descrição do produto 3.', preco: 15, promocao: null },
  ]);
  
  const [novoProduto, setNovoProduto] = useState({ nome: '', descricao: '', preco: '' });
  
  const handleInputChange = (e) => {
    setNovoProduto({ ...novoProduto, [e.target.nome]: e.target.value });
  };
  
  const addProduto = () => {
    const produto = {
      ...novoProduto,
      id: produto.length + 1,
      preco: parseFloat(novoProduto.valor),
      promocao: null,
    };
    setProdutos([...produtos, produto]);
    setNovoProduto({ nome: '', descricao: '', preco: '' });
  };
  
  const updateProduto = (id, updatedInfo) => {
    setProdutos(produtos.map(produto => produtos.id === id ? { ...produto, ...updatedInfo } : produto));
  };
  
  const removeProduto = (id) => {
    setProdutos(produtos.filter(produto => produto.id !== id));
  };

  const applypromocao = (id, desconto) => {
    setProdutos(produtos.map(produto => produto.id === id ? { ...produto, promocao: desconto } : produto));
  };
  
  return (
    <div classnome="container">
      <h2>Produtos Disponíveis</h2>
      <div classnome="produto-grid">
        {produtos.map(produto => (
          <div key={produto.id} classnome="produto-card">
            <h3>{produto.nome}</h3>
            <p>{produto.descricao}</p>
            <span>R$ {produto.promocao ? produto.preco * (1 - produto.promocao / 100) : produto.preco}</span>
            <button onClick={() => removeProduto(produto.id)}>Remover</button>
            <button onClick={() => applypromocao(produto.id, 10)}>Aplicar 10% de Desconto</button>
          </div>
        ))}
      </div>
      <div classnome="add-produto-form">
        <h3>Adicionar Produto</h3>
        <input type="text" nome="nome" placeholder="Nome do Produto" value={novoProduto.nome} onChange={handleInputChange} />
        <input type="text" nome="descricao" placeholder="Descrição" value={novoProduto.descricao} onChange={handleInputChange} />
        <input type="number" nome="preco" placeholder="Preço" value={novoProduto.preco} onChange={handleInputChange} />
        <button onClick={addProduto}>Cadastrar Produto</button>
      </div>
    </div>
  );
};

export default ListaProdutos;
