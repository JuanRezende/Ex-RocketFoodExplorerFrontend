import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { api } from "../../services/api";

import { FiHeart, FiMinus, FiPlus } from 'react-icons/fi';
import { PiPencilSimpleBold } from 'react-icons/pi';
import { BiSolidHeart } from "react-icons/bi";
import { LuImageOff } from "react-icons/lu";

import { Button } from '../Button';

import {
  QuantityBox,
  ButtonContainer,
  PriceProduct,
  DescriptionProduct,
  TitleProduct,
  Container,
  FavButton,
  Wrapper
} from './styles';

export function ProductCard({ data, ...rest }){
  const [favorite, setFavorite] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const { user } = useAuth();
  const navigate = useNavigate();

  const imageURL = data.image ? `${api.defaults.baseURL}/files/${data?.image}` : 
  <LuImageOff />;

  function handleEditProduct() {
    navigate(`/edit/${data.id}`);
  }

  const increase = () => {
    if (quantity > 19) {
      alert('Erro: A quantidade máxima é de 20 unidades!');
      return;
    }
    setQuantity(count => count + 1);
  }

  const decrease = () => {
    if (quantity < 2) {
      alert('Erro: A quantidade mínima é de 1 unidade!')
      return;
    }
    setQuantity(count => count - 1);
  }

  return(
    <Wrapper {...rest}>
      {
        user.isAdmin ? (
          <PiPencilSimpleBold
            size={32}
            onClick={handleEditProduct}
          />
        ):
        <FavButton onClick={() => setFavorite(!favorite)}>
          { favorite ? <BiSolidHeart size={24} /> : <FiHeart size={24} /> }
        </FavButton>
      }

      <Container>
        <Link to={data == undefined ? "" : `/details/${data.id}`}>
          <img src={imageURL} alt="Prato com alimentos" />
          <TitleProduct>{data === undefined ? "carregando" : data.title}</TitleProduct>
        </Link>
        <DescriptionProduct>{data === undefined ? "carregando" : data.description}</DescriptionProduct>
        <PriceProduct>{data === undefined ? "carregando" : data.price}</PriceProduct>

        {
          user.isAdmin ? (
            <></>
          ):
          <ButtonContainer>
            <QuantityBox>
              <FiMinus size={24} onClick={decrease}/>
              <span>{quantity.toString().padStart(2, '0')}</span>
              <FiPlus size={24} onClick={increase}/>
            </QuantityBox>
            <Button title="incluir" />
          </ButtonContainer>
        }
      </Container>
    </Wrapper>
  );
};