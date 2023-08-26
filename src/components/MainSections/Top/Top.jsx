import Section from '../../Section/Section';
import Title from '../../Title/Title';

const Top = ({ nftData, numberSection }) => {
  console.log('object :>> ', nftData);

  return (
    <Section>
      <Title numberSection={numberSection}> Top NFTs</Title>
    </Section>
  );
};

export default Top;
