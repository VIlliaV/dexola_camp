import Button from '../../Buttons/Button';
import Section from '../../Section/Section';
import Title from '../../Title/Title';
import astronaut_flies_back from '@/images/features/astronaut_flies_back.jpg';
import astronaut_flies_back_mob from '@/images/features/astronaut_flies_back@mob.webp';
import astronaut_flies_back_tab from '@/images/features/astronaut_flies_back@tab.webp';
import astronaut_flies_back_desk from '@/images/features/astronaut_flies_back@desk.webp';
import astronaut_flies_back_desk2x from '@/images/features/astronaut_flies_back@desk2x.webp';

import astronaut_flies_forv from '@/images/features/astronaut_flies_forv.jpg';
import astronaut_flies_forv_mob from '@/images/features/astronaut_flies_forv@mob.webp';
import astronaut_flies_forv_tab from '@/images/features/astronaut_flies_forv@tab.webp';
import astronaut_flies_forv_desk from '@/images/features/astronaut_flies_forv@desk.webp';
import astronaut_flies_forv_desk2x from '@/images/features/astronaut_flies_forv@desk2x.webp';
import astronaut_swim from '@/images/features/astronaut_swim.jpg';
import astronaut_swim_mob from '@/images/features/astronaut_swim@mob.webp';
import astronaut_swim_tab from '@/images/features/astronaut_swim@tab.webp';
import astronaut_swim_desk from '@/images/features/astronaut_swim@desk.webp';
import astronaut_swim_desk2x from '@/images/features/astronaut_swim@desk2x.webp';
import { About, AboutItemInfo, AboutItem, FeaturesInfo } from './Features.styled';
import { useEffect, useRef } from 'react';
import { SvgStyled } from '../../Header/Header.styled';
import { formatNumberWithLeadingZero } from '@/utils/formating';
import { media } from '@/styles/media';
import { scrollToElementById } from '../../../utils/smoothScroll';

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
            <source srcSet={`${astronaut_swim_desk} 1x, ${astronaut_swim_desk2x} 2x`} media={media.desktop} />
            <source srcSet={`${astronaut_swim_tab} 1x, ${astronaut_swim_desk} 2x`} media={media.tablet} />
            <source srcSet={`${astronaut_swim_mob} 1x, ${astronaut_swim_tab} 2x`} media={media.mobile} />
            <img src={astronaut_swim} alt="astronaut flies back" />
          </picture>

          <AboutItemInfo>
            <h4>
              <span>{countAbout()}</span>STRU Token sale
            </h4>
            <p>
              The StarRunner Token the exclusive crypto currency fueling the adventure of the Play-to-Earn sensation.
            </p>
            <Button onClick={() => scrollToElementById('Join')}>
              <SvgStyled />
              discover now
            </Button>
          </AboutItemInfo>
        </AboutItem>
        <AboutItem>
          <picture>
            <source
              srcSet={`${astronaut_flies_back_desk} 1x, ${astronaut_flies_back_desk2x} 2x`}
              media={media.desktop}
            />
            <source srcSet={`${astronaut_flies_back_tab} 1x, ${astronaut_flies_back_desk} 2x`} media={media.tablet} />
            <source srcSet={`${astronaut_flies_back_mob} 1x, ${astronaut_flies_back_tab} 2x`} media={media.mobile} />
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
            <Button onClick={() => scrollToElementById('Join')}>
              <SvgStyled />
              discover now
            </Button>
          </AboutItemInfo>
        </AboutItem>
        <AboutItem>
          <picture>
            <source
              srcSet={`${astronaut_flies_forv_desk} 1x, ${astronaut_flies_forv_desk2x} 2x`}
              media={media.desktop}
            />
            <source srcSet={`${astronaut_flies_forv_tab} 1x, ${astronaut_flies_forv_desk} 2x`} media={media.tablet} />
            <source srcSet={`${astronaut_flies_forv_mob} 1x, ${astronaut_flies_forv_tab} 2x`} media={media.mobile} />
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
            <Button onClick={() => scrollToElementById('Join')}>
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
