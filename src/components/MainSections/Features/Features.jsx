import Button from '../../Buttons/Button';
import Section from '../../Section/Section';
import Title from '../../Title/Title';
import astronaut_flies_back from '@/images/features/astronaut_flies_back.webp';
import astronaut_flies_back_2x from '@/images/features/astronaut_flies_back@2x.webp';
import astronaut_flies_forv from '@/images/features/astronaut_flies_forv.webp';
import astronaut_flies_forv_2x from '@/images/features/astronaut_flies_forv@2x.webp';
import astronaut_swim from '@/images/features/astronaut_swim.webp';
import astronaut_swim_2x from '@/images/features/astronaut_swim@2x.webp';
import { About, AboutItemInfo, AboutItem, FeaturesInfo } from './Features.styled';
import { useEffect, useRef } from 'react';
import { SvgStyled } from '../../Header/Header.styled';
import { formatNumberWithLeadingZero } from '@/utils/formating';

const Features = ({ numberSection }) => {
  const sequenceNumber = useRef(0);

  useEffect(() => {
    sequenceNumber.current = 0;
  });

  function countAbout() {
    sequenceNumber.current += 1;
    const number = formatNumberWithLeadingZero(sequenceNumber.current);
    return number;
  }

  return (
    <Section>
      <Title numberSection={numberSection}> Features</Title>
      <FeaturesInfo>
        <h3>About StarRunner</h3>
        <p>
          The StarRunner Blockchain Ecosystem isn`t <br />a mere playground; it`s a living, evolving entity <br />
          that adapts to the desires and creativity of its players.
        </p>
      </FeaturesInfo>
      <About>
        <AboutItem>
          <picture>
            <source srcSet={astronaut_swim_2x} media="(-webkit-min-device-pixel-ratio: 2)" />
            <img src={astronaut_swim} alt="astronaut flies back" />
          </picture>

          <AboutItemInfo>
            <h4>
              <span>{countAbout()}</span>STRU Token sale
            </h4>
            <p>
              The StarRunner Token the exclusive crypto currency fueling the adventure of the Play-to-Earn sensation.
            </p>
            <Button>
              <SvgStyled />
              discover now
            </Button>
          </AboutItemInfo>
        </AboutItem>
        <AboutItem>
          <picture>
            <source srcSet={astronaut_flies_back_2x} media="(-webkit-min-device-pixel-ratio: 2)" />
            <img src={astronaut_flies_back} alt="astronaut flies back" />
          </picture>
          <AboutItemInfo>
            <h4>
              <span>{countAbout()}</span>Staking
            </h4>
            <p>
              Join a thriving community <br />
              of stakers, united by their passion for exploration, strategy, and gaming.
            </p>
            <Button>
              <SvgStyled />
              discover now
            </Button>
          </AboutItemInfo>
        </AboutItem>
        <AboutItem>
          <picture>
            <source srcSet={astronaut_flies_forv_2x} media="(-webkit-min-device-pixel-ratio: 2)" />
            <img src={astronaut_flies_forv} alt="astronaut flies back" />
          </picture>
          <AboutItemInfo>
            <h4>
              <span>{countAbout()}</span>NFT minting
            </h4>
            <p>
              Every StarRunner NFT tells <br />a story – YOUR story. This NFT encapsulates the essence of your journey
              like never before.
            </p>
            <Button>
              <SvgStyled />
              discover now
            </Button>
          </AboutItemInfo>
        </AboutItem>
      </About>
    </Section>
  );
};

export default Features;
