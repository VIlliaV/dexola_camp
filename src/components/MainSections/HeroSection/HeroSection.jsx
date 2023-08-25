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
            beating heart that drives the adrenaline-charged galactic P2E odyssey of {'\u0027'}
            StarRunner.{'\u0027'}
          </p>
        </div>
        <ChangeImg nftData={nftData} step={2} initial={0} period={2500} />
        <ChangeImg nftData={nftData} step={2} initial={1} period={3500} />
      </PresentationContainer>

      <h1>DEXOLA</h1>
    </Section>
  );
};

export default HeroSection;
