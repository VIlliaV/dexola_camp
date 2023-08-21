import Button from '../Buttons/JoinButton';
import Logo from '../Logo/Logo';
import { HeaderContainer } from './Header.styled';

const Header = () => {
  const arrowSymbol = '\u2197';
  return (
    <HeaderContainer>
      <Logo />
      <Button text={arrowSymbol} />
    </HeaderContainer>
  );
};

export default Header;
