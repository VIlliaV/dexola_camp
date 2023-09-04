import { useEffect, useMemo, useState } from 'react';
import { ContainerInput, Eye, InputStyled, SvgStyledEyeClose, SvgStyledEyeOpen } from './Input.styled';
import { TYPE_INPUT } from '../../../constants/constants';
import InputPhone from './InputPhone';
import { validateEmailData } from '../../../utils/validation';

const Input = ({
  typeInput = 'text',
  handleErrorMessage,
  requiredInput = false,
  setUserData,
  userPassword = '',
  userInfo = {},
}) => {
  const [inputValue, setInputValue] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const { email, tel, password, confirmPassword } = TYPE_INPUT;
  useEffect(() => {
    if (Object.keys(userInfo).length === 0) {
      setInputValue('');
    }
  }, [userInfo]);

  const handleChange = event => {
    const value = event.target.value;
    setInputValue(value);
    setUserData(typeInput, value);
    handleErrorMessage('');
  };

  const handleBlur = event => {
    setUserData(typeInput, inputValue);
    const value = event.target.value;

    if (!inputValue.trim()) {
      handleErrorMessage('Please complete this field');
      return;
    }
    if (typeInput === confirmPassword && userPassword !== value) handleErrorMessage('Passwords must match');

    if ((typeInput === confirmPassword || typeInput === password) && value.length < 3) {
      handleErrorMessage('Password must be at least 3 characters');
    }
    if (typeInput === email) {
      const { error } = validateEmailData(value);
      if (error) handleErrorMessage(error.message);
    }
  };

  const handleFocus = event => {
    const value = event.target.value;
    if (typeInput === confirmPassword && userPassword === value) handleErrorMessage('');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const placeholderInput = useMemo(() => {
    switch (typeInput) {
      case email:
        return 'Enter email';
      case tel:
        return '+38(0__) ___ __ __';
      case password:
        return 'Password';
      case confirmPassword:
        return 'Confirm Password';
      default:
        return 'Please enter text';
    }
  }, [typeInput]);

  const isPasswordInput =
    typeInput !== confirmPassword && typeInput !== password ? typeInput : showPassword === false ? password : 'text';

  return typeInput !== tel ? (
    <ContainerInput>
      <InputStyled
        type={isPasswordInput}
        name={typeInput}
        placeholder={placeholderInput}
        required={requiredInput}
        value={inputValue}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
      {(typeInput === confirmPassword || typeInput === password) && (
        <Eye type="button" onClick={togglePasswordVisibility}>
          {!showPassword ? <SvgStyledEyeClose /> : <SvgStyledEyeOpen />}
        </Eye>
      )}
    </ContainerInput>
  ) : (
    <InputPhone
      placeholderInput={placeholderInput}
      typeInput={typeInput}
      requiredInput={requiredInput}
      handleErrorMessage={handleErrorMessage}
      setUserData={setUserData}
      userInfo={userInfo}
    />
  );
};

export default Input;
