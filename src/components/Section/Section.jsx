import HeadContainer from '../HeadContainer/HeadContainer';
import { SectionStyled } from './Section.styled';

const Section = ({ customStyle, numberSection, children }) => {
  return (
    <SectionStyled style={{ ...customStyle }}>
      <HeadContainer numberSection={numberSection}>{children}</HeadContainer>
    </SectionStyled>
  );
};

export default Section;
