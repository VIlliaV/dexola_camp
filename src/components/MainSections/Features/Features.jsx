import Section from '../../Section/Section';
import ChangeImg from '../../animation/ChangeImg/ChangeImg';

// eslint-disable-next-line react/prop-types
const Features = ({ children }) => {
  return (
    <Section>
      Features{children}
      <ChangeImg />
    </Section>
  );
};

export default Features;
