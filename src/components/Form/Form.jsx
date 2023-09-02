import { FormStyled } from './Form.styled';

const Form = ({ onSubmit, children }) => {
  return <FormStyled onSubmit={onSubmit}>{children}</FormStyled>;
};

export default Form;
