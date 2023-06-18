export const amountOfChars = (s: string) =>
  s.replace(/\s/g, '').split('').length

export const toTitle = (s: string) =>
  s.replace(s.charAt(0), s.charAt(0).toUpperCase())
