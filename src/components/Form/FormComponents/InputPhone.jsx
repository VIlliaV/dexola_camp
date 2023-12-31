import { useEffect, useState } from 'react';
import { InputPhoneStyled } from './InputPhone.styled';
import { isValidPhoneNumber } from 'react-phone-number-input';

const InputPhone = ({
  placeholderInput,
  requiredInput = false,
  typeInput,
  handleErrorMessage,
  setUserData,
  userInfo = {},
}) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (Object.keys(userInfo).length === 0) {
      setInputValue('');
    }
  }, [userInfo]);

  const handleChange = tel => {
    setInputValue(tel);
    handleErrorMessage('');
  };

  const handleBlur = () => {
    if (!inputValue?.trim()) {
      handleErrorMessage('Please complete this field');
    } else if (!isValidPhoneNumber(inputValue)) {
      handleErrorMessage('The phone number is not valid.');
      setUserData(typeInput, 'wrong');
    } else setUserData(typeInput, inputValue);
  };

  return (
    <InputPhoneStyled
      placeholder={placeholderInput}
      value={inputValue}
      onChange={handleChange}
      autoComplete="off"
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
