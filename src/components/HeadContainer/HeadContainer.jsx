import { Container } from './HeadContainer.styled';

// eslint-disable-next-line react/prop-types
const HeadContainer = ({ children }) => {
  return <Container className="container">{children}</Container>;
};

export default HeadContainer;
