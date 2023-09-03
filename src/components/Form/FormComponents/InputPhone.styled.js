import styled from 'styled-components';
import 'react-phone-number-input/style.css';
import { media } from '@/styles/media';
import PhoneInput from 'react-phone-number-input';
import { input } from '../../../styles/styledConst';

export const InputPhoneStyled = styled(PhoneInput)`
  gap: 10px;
  & .PhoneInputInput {
    ${input};

    padding-left: 0;
    @media ${media.desktop} {
      padding-left: 0;
    }
  }
  & .PhoneInputCountry {
    margin-bottom: 4px;
  }
  & .PhoneInputCountrySelect {
    border: none;
  }
  & .PhoneInputCountryIcon {
    & img {
      width: 36px;
      border-radius: 3px;
      @media ${media.tablet} {
        width: 30px;
      }
    }
  }
  & .PhoneInputCountrySelectArrow {
    width: 12px;
    height: 12px;
    margin-left: 12px;
    margin-top: -5px;
    opacity: 1;
    border-right: 2.5px solid var(--primary);
    border-bottom: 2.5px solid var(--primary);
  }
`;
