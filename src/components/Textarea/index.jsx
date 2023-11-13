import { STextarea, Wrapper } from './styles';

export function Textarea({value, label, ...rest}){
  return(
    <Wrapper>
      <label>{label}</label>
      
      <STextarea {...rest}>
        { value }
      </STextarea>
    </Wrapper>
  )
};