import Section from '../../Section/Section';
import Title from '../../Title/Title';
import { JoinConteiner } from './Join.styled';

const Join = ({ numberSection }) => {
  return (
    <Section>
      <Title numberSection={numberSection}> join us</Title>
      <JoinConteiner>
        <div>
          <h3>Experience the Power of StarRunner</h3>
          <p>
            Join Our Community and Embark on a Journey of Opportunities. Discover the full range of our services that
            cater to your needs. We`ve got you covered with top-notch solutions.
          </p>
          <p>---------------???</p>
        </div>
        <form>
          <label>Email:</label>
          <input type="email" />
          <label>тел:</label>
          <input type="tel" />
          <label>password:</label>
          <input type="password" />
          <label>confirm password:</label>
          <input type="password" />
          <button type="submit">SEND IT</button>
        </form>
      </JoinConteiner>
    </Section>
  );
};

export default Join;
