// import { useState } from 'react';
import { TYPE_INPUT } from '../../../constants/constants';
import Button from '../../Buttons/Button';
import Form from '../../Form/Form';
// import Input from '../../Form/FormComponents/Input';
import Label from '../../Form/FormComponents/Label';
import Section from '../../Section/Section';
import Title from '../../Title/Title';
import { JoinContainer, JoinDescriptionStyled, SvgStyled, SvgStyledLine } from './Join.styled';

const Join = ({ numberSection }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });
    console.log(formObject);
  };

  return (
    <Section>
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
          <Label typeInput={TYPE_INPUT.email} requiredInput={true} />
          <Label typeInput={TYPE_INPUT.tel} requiredInput={true} />
          <Label typeInput={TYPE_INPUT.password} requiredInput={true} />
          <Label typeInput={TYPE_INPUT.confirmPassword} requiredInput={true} />
          <Button typeButton="submit">
            <SvgStyledLine />
            SEND IT
          </Button>
        </Form>
      </JoinContainer>
    </Section>
  );
};

export default Join;
