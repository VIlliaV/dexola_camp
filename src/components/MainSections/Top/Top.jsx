import { useEffect } from 'react';
import Section from '../../Section/Section';
import Title from '../../Title/Title';
import { TableStyle } from './Top.styled';

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
            <th className="photo"></th>
            <th className="name">NFT Name</th>
            <th className="level">Rarity Level</th>
            <th>Total games</th>
            <th>Games Won</th>
            <th>Price (ETH)</th>
          </tr>
        </thead>
        <tbody>
          {nftData.slice(0, 5).map((item, index) => (
            <tr key={index}>
              <td className="photo">
                <img src={item.src.mob} alt={item.name !== '' ? item.name : 'character photo'} width="64" />
              </td>
              <td>{item.name !== '' ? item.name : 'no name'}</td>
              <td>{item.rarity_level !== '' ? item.rarity_level : 'unknown'}</td>
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
