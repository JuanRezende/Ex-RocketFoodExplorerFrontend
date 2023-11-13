import { FiPlus, FiX } from "react-icons/fi";
import { Wrapper } from "./styles";

export function IngredientItem({ title, isNew, value, onClick, ...rest}){
  return(
    <Wrapper isNew={isNew}>
      <input 
        type="text"
        value={value}
        readOnly={!isNew}
        {...rest}
      />

      <button
        type="button"
        onClick={onClick}
        className={isNew ? "button-add" : "button-remove"}
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Wrapper>
  );
};