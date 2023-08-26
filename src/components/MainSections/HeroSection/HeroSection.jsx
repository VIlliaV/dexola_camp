import Section from '../../Section/Section';
import ChangeImg from '../../animation/ChangeImg/ChangeImg';
import { RunnerContainer } from '../../animation/RunnerLine/RunnerLine.styled';
import { PresentationContainer } from './HeroSection.styled';

const HeroSection = ({ nftData }) => {
  return (
    <Section customStyle={{ paddingTop: '0px' }}>
      <PresentationContainer>
        <div className="hero_item hero_item_presentation-text">
          <p>
            Prepare to be transported beyond the boundaries of traditional gaming with the StarRunner Ecosystem – the
            beating heart that drives the adrenaline-charged galactic P2E odyssey of {'\u0027'}
            StarRunner.{'\u0027'}
          </p>
        </div>
        <div className="hero_item hero_item_slider">
          <ChangeImg nftData={nftData} step={2} initial={0} period={2500} />
          <ChangeImg nftData={nftData} step={2} initial={1} period={3500} />
        </div>
        <RunnerContainer className="hero_item hero_item_run">
          <h1>dexola camp</h1>
        </RunnerContainer>
      </PresentationContainer>
    </Section>
  );
};

export default HeroSection;
