import { useState } from 'react';
import ErrorMessage from './ErrorMessage';
import Input from './Input';
import { LabelStyled } from './Label.styled';

const Label = props => {
  const [errorMessage, setErrorMessage] = useState();
  const { requiredInput } = props;

  const handleErrorMessage = message => {
    setErrorMessage(message);
  };

  return (
    <LabelStyled $errorMessage={errorMessage}>
      <div className="input_container">
        {requiredInput && <span>*</span>}
        <Input {...props} handleErrorMessage={handleErrorMessage} />
      </div>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </LabelStyled>
  );
};

export default Label;
