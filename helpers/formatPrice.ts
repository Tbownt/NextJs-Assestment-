export const formatPrice = (value: string) => {
  let strValue = value.toString();
  const formattedValue = strValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  //this function returns a value which takes a string of multiple 0's and adds
  //"," once it has more than 3 0's on it
  return formattedValue;
};
