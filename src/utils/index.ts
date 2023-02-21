export const roundToLargestNumber = (numParam: number) => {
  return Math.round(numParam)
}

export const convertNumberToArray = (numParam: number): number[] => {
  return Array(numParam).fill(0).map((_, t) => t)
}