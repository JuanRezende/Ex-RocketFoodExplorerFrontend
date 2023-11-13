import { Wrapper } from './styles';

export function Button({icon: Icon, title, loading = false, ...rest}){
  return(
    <Wrapper
      type="button"
      disabled={loading}
      {...rest}
    >
      {Icon && <Icon size={20} />}
      <span>
        {loading ? "Carregando..." : title}
      </span>
    </Wrapper>
  );
}