import { useEffect } from 'react';
import Section from '../../Section/Section';
import Title from '../../Title/Title';
import { TableStyle } from './Top.styled';
import noAvatar from '@/images/plug/no_avatar.png';
import noAvatar64 from '@/images/plug/no_avatar.webp';
import noAvatar128 from '@/images/plug/no_avatar@2x.webp';
const Top = ({ nftData, numberSection }) => {
  useEffect(() => {
    if (!nftData.length) return;
  }, [nftData]);

  return (
    <Section>
      <Title numberSection={numberSection}> Top NFTs</Title>
      <TableStyle>
        <thead>
          <tr>
            <th className="photo">ava</th>
            <th className="name">NFT Name</th>
            <th className="level">Rarity Level</th>
            <th>Total games</th>
            <th>Games Won</th>
            <th>Price (ETH)</th>
          </tr>
        </thead>
        {/* <div className="s1">
          <div className="element">element 1</div>
          <div className="element">element 2</div>
          <div className="element">element 3</div>
        </div>
        <div className="s2">
          <div className="element">element 4</div>
          <div className="element">element 5</div>
          <div className="element">element 6</div>
        </div>
        <div className="s3">container 3</div>
        <div className="s4">container 4</div>
        <div className="s5">container 5</div> */}
        <tbody>
          {nftData.slice(0, 5).map((item, index) => (
            <tr key={index}>
              <td className="photo">
                <picture>
                  <source srcSet={`${item.avatar.min || noAvatar64} 1x, ${item.avatar.max || noAvatar128} 2x`} />
                  <img
                    src={item.avatar.def || noAvatar}
                    // srcSet={`/images/NFTs/avatar/no_avatar.png 1x, /images/NFTs/avatar/5.png 2x`}
                    alt={item.name || 'character avatar'}
                    width="64"
                  />
                </picture>
              </td>
              <td>{item.name || 'no name'}</td>
              <td>{item.rarity_level || 'unknown'}</td>
              <td>{item.total_games}</td>
              <td>{item.won_games}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </TableStyle>
    </Section>
  );
};

export default Top;
