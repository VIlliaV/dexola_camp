import { ButtonStyle } from './Button.styled';

// eslint-disable-next-line react/prop-types
const Button = ({ children }) => {
  return <ButtonStyle>{children}</ButtonStyle>;
};

export default Button;
