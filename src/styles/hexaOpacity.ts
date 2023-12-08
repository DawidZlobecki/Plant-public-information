export default function hexaOpacity(opacity: number) {
  const true_decimal = parseFloat(`${opacity * 100}`);
  const decimal = Math.round((true_decimal * 255) / 100);
  const returnValue = decimal.toString(16).toUpperCase();
  return returnValue.length === 0
    ? '00'
    : returnValue.length === 1
    ? `0${returnValue}`
    : returnValue;
}
