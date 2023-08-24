import Button from '../Buttons/Button';
import HeadContainer from '../HeadContainer/HeadContainer';
import Logo from '../Logo/Logo';
import { HeaderContainer } from './Header.styled';
import { SvgStyled } from './Header.styled';

const Header = () => {
  return (
    <HeaderContainer>
      <HeadContainer>
        <Logo />
        <Button>
          <SvgStyled />
          Join Now
        </Button>
      </HeadContainer>
    </HeaderContainer>
  );
};

export default Header;
