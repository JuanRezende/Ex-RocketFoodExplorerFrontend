import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { Button } from '../Button';
import { Input } from '../Input';

import { FiSearch, FiLogOut, FiMenu } from 'react-icons/fi';
import { PiReceipt } from 'react-icons/pi';

import AdminFoodExplorerLogo from '../../assets/FoodExplorer_LogoAdmin.svg';
import FoodExplorerLogo from '../../assets/FoodExplorer_Logo.svg';

import {
  Container,
  Brand,
  Logout,
  Search,
  Wrapper
} from './styles';

export function Header({ setMenuIsVisible, search }){
  const navigate = useNavigate();

  const { user, signOut } = useAuth();

  function handleNew(){
    navigate('/new');
  }

  function handleLogout(){
    signOut();
    navigate('/');
  }

  return (
    <Wrapper>
      <Container>
        <FiMenu size={32} onClick={() => setMenuIsVisible(true)} className="MenuMob"/>

        <Link to={'/'}>
          {user.isAdmin ? (
            <Brand src={AdminFoodExplorerLogo} alt="Admin Food-Explorer logo"/>
            ):
            <Brand src={FoodExplorerLogo} alt="Food-Explorer logo"/>
          }
        </Link>

        <Search>
          <FiSearch size={24}/>
          <Input
            type="text"
            placeholder="Busque por pratos ou ingredientes"
            onChange={e => {search(e.target.value)}}
          />
        </Search>

        <nav>
          {user.isAdmin ? (
            <Button
              title="Novo prato"
              onClick={handleNew}
            />
          ):
            <Button
              icon={PiReceipt}
              title={`Pedidos ${(0)}`}
            />
          }

          <Logout
            onClick={handleLogout}
          >
            <FiLogOut size={32} />
          </Logout>
        </nav>
      </Container>
    </Wrapper>
  );
}