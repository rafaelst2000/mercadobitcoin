import { parse, isAfter, isBefore } from 'date-fns'

export const validateCpf = (cpf) => {
  const flattenCpf = cpf.replace(/[^\d]+/g, '')

  // test if all digits are the same
  if (/^(\d)\1+$/.test(flattenCpf)) return false

  let sum = 0
  let remainder

  // validate first digit
  for (let i = 1; i <= 9; i++) {
    sum += parseInt(flattenCpf.substring(i - 1, i)) * (11 - i)
  }
  remainder = (sum * 10) % 11

  if (remainder === 10 || remainder === 11) remainder = 0
  if (remainder !== parseInt(flattenCpf.substring(9, 10))) return false

  // second digit
  sum = 0
  for (let i = 1; i <= 10; i++) {
    sum += parseInt(flattenCpf.substring(i - 1, i)) * (12 - i)
  }
  remainder = (sum * 10) % 11

  if (remainder === 10 || remainder === 11) remainder = 0
  if (remainder !== parseInt(flattenCpf.substring(10, 11))) return false

  return true
}

export const validateCnpj = (cnpj) => {
  const flattenCnpj = cnpj.replace(/[^\d]+/g, '')

  // test if all digits are the same
  if (/^(\d)\1+$/.test(flattenCnpj)) return false

  let length = flattenCnpj.length - 2
  let numbers = flattenCnpj.substring(0, length)
  let digits = flattenCnpj.substring(length)
  let sum = 0
  let pos = length - 7

  for (let i = length; i >= 1; i--) {
    sum += numbers.charAt(length - i) * pos--
    if (pos < 2) pos = 9
  }
  let result = sum % 11 < 2 ? 0 : 11 - (sum % 11)
  if (result !== parseInt(digits.charAt(0))) return false

  length = length + 1
  numbers = flattenCnpj.substring(0, length)
  sum = 0
  pos = length - 7

  for (let i = length; i >= 1; i--) {
    sum += numbers.charAt(length - i) * pos--
    if (pos < 2) pos = 9
  }
  result = sum % 11 < 2 ? 0 : 11 - (sum % 11)
  if (result !== parseInt(digits.charAt(1))) return false

  return true
}

export const validateBirthDate = (date) => {
  // validate if date is greater than 01/01/1900 and less than today
  const minDate = new Date(1900, 0, 1)
  const today = new Date()
  const parsedDate = parse(date, 'dd/MM/yyyy', new Date())
  if (!parsedDate) return false
  const isValid = isAfter(parsedDate, minDate) && isBefore(parsedDate, today)

  return isValid
}
