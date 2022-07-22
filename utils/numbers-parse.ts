const numbersParse = (value: number): string => {
  let letter = '';

  if (value >= 1000000) {
    value = Math.trunc(value / 1000000)
    letter = 'M'
  }
  else if (value >= 1000) {
    value = Math.trunc(value / 1000)
    letter = 'K'
  }

  return value + letter;
}

export default numbersParse