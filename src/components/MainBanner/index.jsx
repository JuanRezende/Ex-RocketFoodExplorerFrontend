import { Container, SubtitleBanner, TitleBanner, Wrapper } from './styles';
import Ingredientes from '../../assets/Ingredientes.png';

export function MainBanner(){
  return(
    <Wrapper>
      <img src={Ingredientes} alt="Pedaços de ingredientes com folhas flutuando" />

      <Container>
        <TitleBanner>Sabores inigualáveis</TitleBanner>
        <SubtitleBanner>Sinta o cuidado do preparo com ingredientes selecionados</SubtitleBanner>
      </Container>
    </Wrapper>
  );
};