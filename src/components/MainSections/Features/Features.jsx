import Button from '../../Buttons/Button';
import Section from '../../Section/Section';
import Title from '../../Title/Title';

import { About, AboutItemInfo, AboutItem, FeaturesInfo } from './Features.styled';
import { useEffect, useRef } from 'react';
import { SvgStyled } from '../../Header/Header.styled';
import { formatNumberWithLeadingZero } from '@/utils/formating';
import { media } from '@/styles/media';
import { scrollToElementById } from '../../../utils/smoothScroll';
import { featuresData } from './featuresData';

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
        {featuresData?.map((item, index) => (
          <AboutItem key={index}>
            <picture>
              <source srcSet={`${item.img.desk} 1x, ${item.img.desk2x} 2x`} media={media.desktop} />
              <source srcSet={`${item.img.tab} 1x, ${item.img.desk} 2x`} media={media.tablet} />
              <source srcSet={`${item.img.mob} 1x, ${item.img.tab} 2x`} media={media.mobile} />
              <img src={item.img.default} alt="astronaut flies back" />
            </picture>

            <AboutItemInfo>
              <h4>
                <span>{countAbout()}</span>
                {item.title}
              </h4>
              <p>{item.description}</p>
              <Button onClick={() => scrollToElementById('Join')}>
                <SvgStyled />
                discover now
              </Button>
            </AboutItemInfo>
          </AboutItem>
        ))}
      </About>
    </Section>
  );
};

export default Features;
