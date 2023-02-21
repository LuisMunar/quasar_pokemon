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