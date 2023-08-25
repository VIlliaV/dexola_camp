import Section from '../../Section/Section';
import ChangeImg from '../../animation/ChangeImg/ChangeImg';

const Top = ({ nftData, children }) => {
  return (
    <Section>
      TOP{children} <ChangeImg nftData={nftData} />
    </Section>
  );
};

export default Top;
