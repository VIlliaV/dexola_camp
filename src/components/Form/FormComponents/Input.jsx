import { useMemo, useState } from 'react';
// import ErrorMessage from './ErrorMessage';
import { InputStyled } from './Input.styled';
import { TYPE_INPUT } from '../../../constants/constants';

const Input = ({ typeInput = 'text', handleErrorMessage, requiredInput = false }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = event => {
    const value = event.target.value;
    setInputValue(value);
    handleErrorMessage('');
  };

  const handleBlur = () => {
    if (!inputValue.trim()) handleErrorMessage('Please complete this field');
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

  return (
    <InputStyled
      type={typeInput === TYPE_INPUT.confirmPassword ? TYPE_INPUT.password : typeInput}
      name={typeInput}
      placeholder={placeholderInput}
      required={requiredInput}
      value={inputValue}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
};

export default Input;
