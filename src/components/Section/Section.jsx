import HeadContainer from '../HeadContainer/HeadContainer';
import { SectionStyled } from './Section.styled';

const Section = ({ children }) => {
  return (
    <SectionStyled>
      <HeadContainer>{children}</HeadContainer>
    </SectionStyled>
  );
};

export default Section;
