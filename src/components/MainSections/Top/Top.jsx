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

  const sortedItems = nftData.slice().sort((a, b) => b.total_games - a.total_games);

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
        <tbody>
          {sortedItems.slice(0, 5).map((item, index) => (
            <tr key={index}>
              <td className="photo">
                <picture>
                  <source srcSet={`${item.avatar.min || noAvatar64} 1x, ${item.avatar.max || noAvatar128} 2x`} />
                  <img src={item.avatar.def || noAvatar} alt={item.name || 'character avatar'} width="64" />
                </picture>
              </td>

              <td>{item.name || 'no name'}</td>
              <td>
                <span className="no_aria" aria-hidden="true">
                  Rarity:{' '}
                </span>
                {item.rarity_level || 'unknown'}
              </td>
              <td>
                <span className="no_aria" aria-hidden="true">
                  Total games:{' '}
                </span>
                {item.total_games}
              </td>
              <td>
                <span className="no_aria" aria-hidden="true">
                  Games Won:{' '}
                </span>
                {item.won_games}
              </td>
              <td>
                {item.price}{' '}
                <span className="no_aria" aria-hidden="true">
                  ETH
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </TableStyle>
    </Section>
  );
};

export default Top;
