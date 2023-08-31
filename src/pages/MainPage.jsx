import { useEffect, useRef, useState } from 'react';
import { fetchData } from '@/api/fetchNFT';
import Features from '../components/MainSections/Features/Features';
import HeroSection from '../components/MainSections/HeroSection/HeroSection';
import Join from '../components/MainSections/Join/Join';
import Top from '../components/MainSections/Top/Top';

const MainPage = () => {
  const [nftData, setNftData] = useState([]);
  const sequenceNumber = useRef(0);

  useEffect(() => {
    const fetchNFT = async () => {
      try {
        const data = await fetchData();
        setNftData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchNFT();
  }, []);

  useEffect(() => {
    sequenceNumber.current = 0;
  });

  function countSection() {
    sequenceNumber.current += 1;
    return sequenceNumber.current;
  }

  return (
    <>
      <HeroSection nftData={nftData} />
      {/* <Features numberSection={countSection()}></Features>
      <Top nftData={nftData} numberSection={countSection()}></Top>
      <Join numberSection={countSection()}></Join> */}
    </>
  );
};

export default MainPage;
