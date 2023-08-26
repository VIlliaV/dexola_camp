import HeadContainer from '../HeadContainer/HeadContainer';
import { SectionStyled } from './Section.styled';

const Section = ({ children, customStyle }) => {
  return (
    <SectionStyled style={{ ...customStyle }}>
      <HeadContainer>{children}</HeadContainer>
    </SectionStyled>
  );
};

export default Section;
