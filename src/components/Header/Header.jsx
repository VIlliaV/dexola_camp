import JoinButton from '../Buttons/JoinButton';
import Logo from '../Logo/Logo';
import { HeaderContainer } from './Header.styled';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <JoinButton />
    </HeaderContainer>
  );
};

export default Header;
