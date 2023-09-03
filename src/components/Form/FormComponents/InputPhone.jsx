import { useState } from 'react';
import { InputPhoneStyled } from './InputPhone.styled';
import { isValidPhoneNumber } from 'react-phone-number-input';

const InputPhone = ({ placeholderInput, requiredInput = false, typeInput, handleErrorMessage, setUserData }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = tel => {
    setInputValue(tel);
    handleErrorMessage('');
  };

  const handleBlur = () => {
    if (!inputValue?.trim()) {
      handleErrorMessage('Please complete this field');
      setUserData(typeInput, '');
    } else if (!isValidPhoneNumber(inputValue)) {
      handleErrorMessage('The phone number is not valid.');
      setUserData(typeInput, '');
    } else setUserData(typeInput, inputValue);
  };

  return (
    <InputPhoneStyled
      placeholder={placeholderInput}
      value={inputValue}
      onChange={handleChange}
      type={typeInput}
      defaultCountry="UA"
      international
      countryCallingCodeEditable={false}
      initialValueFormat="national"
      name={typeInput}
      required={requiredInput}
      onBlur={handleBlur}
    />
  );
};

export default InputPhone;
