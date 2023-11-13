import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import FoodExplorerLogo from '../../assets/FoodExplorer_Logo.svg';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { api } from "../../services/api";

import  { Form, Title, Wrapper } from './styles';

export function SignUp(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  function handleSignUp(){
    if(!name || !email || !password){
      return alert('Por favor, preencha todos os campos!');
    };

    api.post("/users", {name, email, password}).then(
      () => {
        alert("Usuário cadastrado com sucesso!");
        navigate("/");
      }
    ).catch(
      (error) => {
        if(error.response){
          alert(error.response.data.message);
        }else{
          alert("Não foi possível cadastrar!");
        }
      }
    )
  }

  return (
    <Wrapper>
      <img src={FoodExplorerLogo} alt="Food-Explorer logo" />

      <Form>
        <Title>Crie sua conta</Title>

        <Input
          id="name"
          label="Seu nome"
          type="text"
          value={name}
          placeholder="Exemplo: Maria da Silva"
          onChange={e => setName(e.target.value)}
        />

        <Input
          id="email"
          label="Email"
          type="email"
          value={email}
          placeholder="Exemplo: exemplo@exemplo.com.br"
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          id="password"
          label="Senha"
          type="password"
          value={password}
          placeholder="No mínimo 6 caracteres"
          onChange={e => setPassword(e.target.value)}
        />

        <Button
          title="Criar conta"
          onClick={handleSignUp}
        />

        <Link to="/">
          Já tenho uma conta
        </Link>
      </Form>
    </Wrapper>
  );
}