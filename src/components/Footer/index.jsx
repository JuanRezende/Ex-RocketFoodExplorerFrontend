import FooterLogo from '../../assets/FoodExplorer_Logo_Footer.svg';

import { Container, Wrapper } from './styles';

export function Footer(){
  return(
    <Wrapper>
      <Container>
        <img src={FooterLogo} alt="Food-Explorer logo" draggable="false" />

        <p>© 2023 - Todos os direitos reservados.</p>
      </Container>
    </Wrapper>
  );
}