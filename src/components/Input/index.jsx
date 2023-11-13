import { Wrapper } from "./styles";

export function Input({label, id, ...rest}){
  return(
    <Wrapper>
      <label htmlFor={id}>{label}</label>

      <input {...rest} />
    </Wrapper>
  );
}