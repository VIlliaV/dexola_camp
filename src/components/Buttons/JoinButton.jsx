import { ButtonStyled } from './Button.styled';
import Arrow_tr from '@/images/svg/iconoir_arrow-tr.svg';

const JoinButton = () => {
  return (
    <ButtonStyled>
      <img src={Arrow_tr} alt="arrow" />
      Join Now
    </ButtonStyled>
  );
};

export default JoinButton;
