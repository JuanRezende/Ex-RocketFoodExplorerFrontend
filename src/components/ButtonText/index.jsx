import { Link } from 'react-router-dom';
import { Wrapper } from './styles';

import { FiChevronLeft } from 'react-icons/fi';

export function ButtonText(){

  return(
    <Wrapper>
      <Link to={-1}>
        <FiChevronLeft size={32} />
        Voltar
      </Link>
    </Wrapper>
  );
}