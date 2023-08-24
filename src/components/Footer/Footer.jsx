import HeadContainer from '../HeadContainer/HeadContainer';
import SocialList from '../Social/SocialList/SocialList';
import { FooterContainer } from './Footer.styled';

const Footer = () => {
  return (
    <FooterContainer>
      <HeadContainer>
        <p className="footer_item">Designed by Dexola - 2023</p>
        <SocialList className="footer_item" />
        <p className="footer_item"> © All rights reserved</p>
      </HeadContainer>
    </FooterContainer>
  );
};

export default Footer;
