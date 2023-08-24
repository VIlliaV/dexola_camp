import HeadContainer from '../HeadContainer/HeadContainer';

// eslint-disable-next-line react/prop-types
const Section = ({ children }) => {
  return (
    <section>
      <HeadContainer>{children}</HeadContainer>
    </section>
  );
};

export default Section;
