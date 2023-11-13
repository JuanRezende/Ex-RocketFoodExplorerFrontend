import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { useAuth } from "../../hooks/auth";

import { api } from '../../services/api'

import { FiMinus, FiPlus } from 'react-icons/fi';

import { AppTheme } from '../../components/AppTheme';
import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';
import { Tag } from '../../components/Tag';

import {
  QuantityBox,
  ButtonContainer,
  TagsBox,
  DescriptionProduct,
  TitleProduct,
  InfoContainer,
  ProductImg,
  Wrapper
} from "./styles";

export function Details(){
  const [quantity, setQuantity] = useState(1);
  const [data, setData] = useState(null);

  const { user } = useAuth();
  const params = useParams();
  const navigate = useNavigate();

  const imageURL = data && `${api.defaults.baseURL}/files/${data.image}`;

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
      alert('Erro: A quantidade mínima é de 01 unidade!')
      return;
    }
    setQuantity(count => count - 1);
  }

  useEffect(() => {
    async function fetchProductDetail() {
      const response = await api.get(`/products/${params.id}`);
      setData(response.data);
    }

    fetchProductDetail();
  }, []);

  return(
    <AppTheme>
      <ButtonText />

      {data && (
        <Wrapper>
          <ProductImg src={imageURL} alt="imagem do produto" />

          <InfoContainer>
            <TitleProduct>{data.title}</TitleProduct>
            <DescriptionProduct>{data.description}</DescriptionProduct>

            <TagsBox>
              {data.ingredients.map(ingredient => (
                <Tag
                  key={String(ingredient.id)}
                  title={ingredient.name}
                />
              ))}
            </TagsBox>
            
            {user.isAdmin ? (
              <ButtonContainer>
                <Button
                  title="Editar prato"
                  onClick={handleEditProduct}
                />
              </ButtonContainer>
            ):
              <ButtonContainer>
                <QuantityBox>
                  <FiMinus size={24} onClick={decrease}/>
                  <span>{quantity.toString().padStart(2, '0')}</span>
                  <FiPlus size={24} onClick={increase}/>
                </QuantityBox>

                <Button
                  title={`incluir ∙ R$ ${data.price}`}
                />
              </ButtonContainer>
            }
          </InfoContainer>
        </Wrapper>
      )}
    </AppTheme>
  );
}