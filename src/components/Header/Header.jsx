import JoinButton from '../Buttons/JoinButton/JoinButton';
import HeadContainer from '../HeadContainer/HeadContainer';
import Logo from '../Logo/Logo';
import { HeaderContainer } from './Header.styled';

const Header = () => {
  return (
    <HeaderContainer>
      <HeadContainer>
        <Logo />
        <JoinButton />
      </HeadContainer>
    </HeaderContainer>
  );
};

export default Header;
