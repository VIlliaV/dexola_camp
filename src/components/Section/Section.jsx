import HeadContainer from '../HeadContainer/HeadContainer';
import { SectionStyled } from './Section.styled';

// eslint-disable-next-line react/prop-types
const Section = ({ children }) => {
  return (
    <SectionStyled>
      <HeadContainer>{children}</HeadContainer>
    </SectionStyled>
  );
};

export default Section;
