export const formatPrice = (value: string) => {
  let strValue = value.toString();
  const formattedValue = strValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return formattedValue;
};
