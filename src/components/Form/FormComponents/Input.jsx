import { useMemo, useState } from 'react';
import { ContainerInput, Eye, InputStyled, SvgStyledEyeClose, SvgStyledEyeOpen } from './Input.styled';
import { TYPE_INPUT } from '../../../constants/constants';
import InputPhone from './InputPhone';
import { validateEmailData } from '../../../utils/validation';

const Input = ({ typeInput = 'text', handleErrorMessage, requiredInput = false, setUserData, userPassword = '' }) => {
  const [inputValue, setInputValue] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = event => {
    const value = event.target.value;
    setInputValue(value);
    setUserData(typeInput, value);
    handleErrorMessage('');
  };

  const handleBlur = () => {
    if (!inputValue.trim()) {
      handleErrorMessage('Please complete this field');
      return;
    }
    setUserData(typeInput, inputValue);
    if (typeInput === TYPE_INPUT.confirmPassword && userPassword !== inputValue) {
      handleErrorMessage('Passwords must match');
      setUserData(typeInput, '');
    }
    if ((typeInput === TYPE_INPUT.confirmPassword || typeInput === TYPE_INPUT.password) && inputValue.length < 3) {
      handleErrorMessage('Password must be at least 3 characters');
      setUserData(typeInput, '');
    }
    if (typeInput === TYPE_INPUT.email) {
      const { error } = validateEmailData(inputValue);
      if (error) {
        handleErrorMessage(error.message);
        setUserData(typeInput, '');
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const placeholderInput = useMemo(() => {
    switch (typeInput) {
      case TYPE_INPUT.email:
        return 'Enter email';
      case TYPE_INPUT.tel:
        return '+38(0__) ___ __ __';
      case TYPE_INPUT.password:
        return 'Password';
      case TYPE_INPUT.confirmPassword:
        return 'Confirm Password';
      default:
        return 'Please enter text';
    }
  }, [typeInput]);

  const isPasswordInput =
    typeInput !== TYPE_INPUT.confirmPassword && typeInput !== TYPE_INPUT.password
      ? typeInput
      : showPassword === false
      ? TYPE_INPUT.password
      : 'text';

  return typeInput !== TYPE_INPUT.tel ? (
    <ContainerInput>
      <InputStyled
        type={isPasswordInput}
        name={typeInput}
        placeholder={placeholderInput}
        required={requiredInput}
        value={inputValue}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {(typeInput === TYPE_INPUT.confirmPassword || typeInput === TYPE_INPUT.password) && (
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
    />
  );
};

export default Input;
