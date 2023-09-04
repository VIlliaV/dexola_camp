import HeadContainer from '../HeadContainer/HeadContainer';
import { SectionStyled } from './Section.styled';

const Section = ({ customStyle, numberSection, id, children }) => {
  return (
    <SectionStyled style={{ ...customStyle }} id={id}>
      <HeadContainer numberSection={numberSection}>{children}</HeadContainer>
    </SectionStyled>
  );
};

export default Section;
