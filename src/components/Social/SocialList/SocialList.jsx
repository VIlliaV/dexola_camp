import Discord from '../Discord/Discord';
import Facebook from '../Facebook/Facebook';
import Instagram from '../Instagram/Instagram';
import Telegram from '../Telegram/Telegram';
import { SocialListStyled } from './SocialList.styled';

// eslint-disable-next-line react/prop-types
const SocialList = ({ className }) => {
  return (
    <SocialListStyled className={className}>
      <li>
        <Facebook />
      </li>
      <li>
        <Instagram />
      </li>
      <li>
        <Discord />
      </li>
      <li>
        <Telegram />
      </li>
    </SocialListStyled>
  );
};

export default SocialList;
