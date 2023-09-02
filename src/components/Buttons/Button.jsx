import { ButtonStyle } from './Button.styled';

const Button = ({ typeButton = 'button', children }) => {
  return <ButtonStyle type={typeButton}>{children}</ButtonStyle>;
};

export default Button;
