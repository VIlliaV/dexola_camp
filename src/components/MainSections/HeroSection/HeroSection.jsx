import Section from '../../Section/Section';
import ChangeImg from '../../animation/ChangeImg/ChangeImg';
import { PresentationContainer } from './HeroSection.styled';

const HeroSection = ({ nftData }) => {
  return (
    <Section>
      <PresentationContainer>
        <div className="presentation-text">
          <p>
            Prepare to be transported beyond the boundaries of traditional gaming with the StarRunner Ecosystem – the
            beating heart that drives the adrenaline-charged galactic P2E odyssey of 'StarRunner.'
          </p>
        </div>
        <ChangeImg nftData={nftData} />
        <ChangeImg nftData={nftData} />
      </PresentationContainer>

      {/* <h1>DEXOLA</h1> */}
    </Section>
  );
};

export default HeroSection;
