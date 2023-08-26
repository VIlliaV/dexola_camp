export const formatNumberWithLeadingZero = (number, numberOfZero = 1) => {
  return number.toString().padStart(numberOfZero + 1, '0');
};
