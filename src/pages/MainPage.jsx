import { useEffect, useRef } from 'react';
import Features from '../components/MainSections/Features/Features';
import HeroSection from '../components/MainSections/HeroSection/HeroSection';
import Join from '../components/MainSections/Join/Join';
import Top from '../components/MainSections/Top/Top';

const MainPage = () => {
  const sequenceNumber = useRef(0);

  // useEffect(() => {
  //   sequenceNumber.current = 1;
  // }, []);

  const countSection = () => {
    sequenceNumber.current += 1;
    return sequenceNumber.current;
  };

  return (
    <>
      <HeroSection />
      <Features>{countSection()}</Features>
      <Top>{countSection()}</Top>
      <Join>{countSection()}</Join>
    </>
  );
};

export default MainPage;
