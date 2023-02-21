export const roundToLargestNumber = (numParam: number) => {
  return Math.round(numParam)
}

export const convertNumberToArray = (numParam: number): number[] => {
  return Array(numParam).fill(0).map((_, t) => t)
}

export const getOffsetParamFormPakemonUrl = (stringParam: string | null): number => {
  if(!stringParam) {
    return 0
  }

  const stringToArray = stringParam.split('offset=')
  const offset = stringToArray[1].split('&')
  return Number(offset[0])/5
}

export const convertNumberToFootInch = (cm: number): string => {
  const cmConvertion = cm*0.0328084
  const cmConvertionString = cmConvertion.toString()
  const cmConvertionArray = cmConvertionString.split('.')
  const cmConvertionArrayNumbersFormated = cmConvertionArray.map((s, i) => i === 1 ? `0.${ s }` : s)
  const cmVertedArray = cmConvertionArrayNumbersFormated.map((s, i) => i === 1 ? Number(Number(s).toFixed(1))*10 : Number(s))
  return `${ cmVertedArray[0] }’${ cmVertedArray[1] }’’`
}

export const convertKilogramToPound = (kilograms: number): string => {
  return (kilograms*2.20462).toFixed(1)
}