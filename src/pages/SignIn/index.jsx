import { useState,  } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import FoodExplorerLogo from '../../assets/FoodExplorer_Logo.svg';
import  { Form, Title, Wrapper } from './styles';

export function SignIn(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();

  const { signIn } = useAuth();

  function handleSignIn(){
    if(!email || !password){
      return alert("Por favor, digite seu e-mail/senha para fazer o login!");
    }

    alert("Por favor, aguarde alguns instantes, o servidor está hospedado em um serviço gratuito e precisa de um tempo para inicializar!");

    signIn({ email, password});
    navigate('/');
  }

  return (
    <Wrapper>
      <img src={FoodExplorerLogo} alt="Food-Explorer logo" />

      <Form>
        <Title>Faça login</Title>

        <Input
          id="email"
          label="Email"
          type="email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          id="password"
          label="Senha"
          type="password"
          placeholder="No mínimo 6 caracteres"
          onChange={e => setPassword(e.target.value)}
        />

        <Button
          title="Entrar"
          onClick={handleSignIn}
        />

        <Link to="/register">
          Criar uma conta
        </Link>
      </Form>
    </Wrapper>
  );
}
