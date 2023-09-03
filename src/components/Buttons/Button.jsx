import { ButtonStyle } from './Button.styled';

const Button = ({ className = '', typeButton = 'button', disabled = false, children }) => {
  return (
    <ButtonStyle type={typeButton} className={className} disabled={disabled}>
      {children}
    </ButtonStyle>
  );
};

export default Button;
