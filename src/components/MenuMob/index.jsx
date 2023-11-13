import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { Input } from '../Input';

import { FiSearch } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';

import { Search } from "../Header/styles";

import { MenuOptionsMob, Container, Wrapper } from "./styles";

export function MenuMob({ menuIsVisible, setMenuIsVisible, search }){
  const { user, signOut } = useAuth();
  
  const navigate = useNavigate();

  function handleNew(){
    navigate('/new');
  }

  function handleLogout(){
    signOut();
    navigate('/');
  }

  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? "hidden" : "auto";
  
  }, [menuIsVisible])
  
  return(
    <Wrapper isVisible={menuIsVisible}>
      <Container>
        <IoClose size={32} onClick={() => setMenuIsVisible(false)}/>
        <span>Menu</span>
      </Container>

      <Search>
        <FiSearch size={24}/>
        <Input
          type="text"
          placeholder="Busque por pratos ou ingredientes"
          onChange={(e) => {search(e.target.value)}}
        />
      </Search>

      <MenuOptionsMob>
        {user.isAdmin ? (
          <button
            onClick={handleNew}
          >
            <span>Novo produto</span>
          </button>
        ):
          <></>
        }

        <button
          onClick={handleLogout}
        >
          <span>Sair</span>
        </button>
      </MenuOptionsMob>
    </Wrapper>
  )
};