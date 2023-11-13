import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { useAuth } from '../../hooks/auth';

import { api } from '../../services/api';

import { AppTheme } from '../../components/AppTheme';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { IngredientItem } from '../../components/IngredientItem';

import { PiUploadSimpleFill } from 'react-icons/pi';

import { ButtonBox, TagBox, TagWrapper, CenterBox, CategoryBox, SelectImg, InputBox, TopBox, Form, Title, Wrapper } from './styles';

export function New() {
  const [category, setCategory] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState('');
  const [price, setPrice] = useState('');

  const navigate = useNavigate();

  const { user } = useAuth();

  function handleBack(){
    navigate(-1);
  }

  function handleAddIngredient() {
    setIngredients((prevState) => [...prevState, newIngredient]);
    setNewIngredient('');
  };

  function handleRemoveIngredient(ingredientDeleted) {
    setIngredients((prevState) => prevState.filter((ingredient) => ingredient !== ingredientDeleted));
  };

  async function handleNewProduct() {
    if (!category) {
      return alert('Por favor, adicione uma categoria para o produto!');
    }

    if (!imageFile || imageFile.length === 0) {
      return alert('Por favor, adicione uma imagem para o produto!');
    }

    if (!title) {
      return alert('Por favor, adicione um titulo para o produto!');
    }

    if (!description) {
      return alert('Por favor, adicione uma descrição para o produto!');
    }

    if (newIngredient) {
      return alert('Você deixou um "Ingrediente" no campo para adicionar, mas não clicou em adicionar!')
    }

    if (ingredients.length < 1) {
      return alert('Por favor, adicione um ingrediente!')
    }

    if (!price) {
      return alert('Por favor, adicione um preço para o produto!')
    }

    const formData = new FormData()
    formData.append('category', category)
    formData.append('image', imageFile)
    formData.append('title', title)
    formData.append('description', description)
    formData.append('price', price)

    ingredients.map((ingredient) => formData.append('ingredients', ingredient));

    await api
    .post('/products', formData)
    .then(alert('Produto adicionado!'), navigate('/'))
    .catch((error) => {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert('Erro ao criar o produto!');
      }
    });
  };

  return(
    <AppTheme>
      <ButtonText
        onClick={handleBack}
      />

      {user.isAdmin ? (
        <Wrapper>
          <Title>Adicionar prato</Title>

          <Form>
            <TopBox>
              <InputBox>
                <label id="file" htmlFor="image">
                  Imagem do prato
                  <SelectImg>
                    <PiUploadSimpleFill size={24} />
                    <span>Selecione a imagem</span>
                  </SelectImg>
                  <input
                    id="image"
                    type="file"
                    onChange={(e) => setImageFile(e.target.files[0])}
                  />
                </label>
              </InputBox>

              <Input
                id="text"
                type="text"
                label="Nome"
                value={title}
                placeholder="Ex.: Salada Ceasar"
                onChange={e => setTitle(e.target.value)}
                minLength={3}
              />

              <CategoryBox>
                <label>Categoria</label>
                <select
                  defaultValue={'default'}
                  onChange={e => setCategory(e.target.value)}
                >
                  <option value="default" disabled>Selecione a categoria</option>
                  <option value="meals">Refeições</option>
                  <option value="dessert">Sobremesas</option>
                  <option value="drinks">Bebidas</option>
                </select>
              </CategoryBox>
            </TopBox>

            <CenterBox>
              <TagWrapper>
                <label>Ingredientes</label>
                <TagBox>
                  {
                    ingredients.map((ingredient, index) => (
                      <IngredientItem
                        key={String(index)}
                        title="Ingredientes"
                        value={ingredient}
                        onClick={() => handleRemoveIngredient(ingredient)}
                      />
                    ))
                  }
                  <IngredientItem
                    title="Ingredientes"
                    placeholder="Adicionar"
                    value={newIngredient}
                    onChange={e => setNewIngredient(e.target.value)}
                    onClick={handleAddIngredient}
                    minLength={3}
                    isNew
                  />
                </TagBox>
              </TagWrapper>

              <Input
                id="price"
                type="text"
                label="Preço"
                value={price}
                placeholder="R$ 00,00"
                onChange={e => setPrice(e.target.value)}
              />
            </CenterBox>

            <Textarea
              label="Descrição"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              value={description}
              onChange={e => setDescription(e.target.value)}
              minLength={1}
              maxLength={200}
            />

            <ButtonBox>
              <Button
                title='Salvar'
                onClick={handleNewProduct}
              />
            </ButtonBox>
          </Form>
        </Wrapper>
      ): <></>}
    </AppTheme>
  );
}