import { useState } from 'react';
import { TYPE_INPUT } from '../../../constants/constants';
import Button from '../../Buttons/Button';
import Form from '../../Form/Form';
import Label from '../../Form/FormComponents/Label';
import Section from '../../Section/Section';
import Title from '../../Title/Title';
import { JoinContainer, JoinDescriptionStyled, SvgStyled, SvgStyledLine } from './Join.styled';
import { toast } from 'react-hot-toast';
import { validateData } from '../../../utils/validation';

const Join = ({ numberSection }) => {
  const [userData, setUserData] = useState({});
  const { email, tel, password, confirmPassword } = TYPE_INPUT;

  const handleSubmit = event => {
    event.preventDefault();
    const { error } = validateData(userData);

    !error ? toast.success(`Enjoy ${userData[email]}`) : toast.error(error.message);
    if (!error) {
      setUserData({});
    }
  };

  const takeDataFromLabel = (name, value) => {
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  return (
    <Section id="Join">
      <Title numberSection={numberSection}> join us</Title>
      <JoinContainer>
        <JoinDescriptionStyled>
          <h3>Experience the Power of StarRunner</h3>
          <p>
            Join Our Community and Embark on a Journey of Opportunities. Discover the full range of our services that
            cater to your needs. We`ve got you covered with top-notch solutions.
          </p>
          <SvgStyled />
        </JoinDescriptionStyled>
        <Form onSubmit={handleSubmit}>
          <Label typeInput={email} requiredInput={true} setUserData={takeDataFromLabel} userInfo={userData} />
          <Label typeInput={tel} requiredInput={true} setUserData={takeDataFromLabel} userInfo={userData} />
          <Label typeInput={password} requiredInput={true} setUserData={takeDataFromLabel} userInfo={userData} />
          <Label
            typeInput={confirmPassword}
            requiredInput={true}
            setUserData={takeDataFromLabel}
            userPassword={userData[password]}
            userInfo={userData}
          />
          <Button typeButton="submit" className="submit_button">
            <SvgStyledLine />
            SEND IT
          </Button>
        </Form>
      </JoinContainer>
    </Section>
  );
};

export default Join;
