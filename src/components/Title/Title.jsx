import { formatNumberWithLeadingZero } from '@/utils/formating';
import { TitleStyled } from './Title.styled';

const Title = ({ numberSection, children }) => {
  const number = formatNumberWithLeadingZero(numberSection);
  return (
    <TitleStyled>
      <h2>
        <span>{children}</span>
        <span>{number}</span>
      </h2>
    </TitleStyled>
  );
};

export default Title;
