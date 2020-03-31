import array from '../../types/array/array.js'
import validateFunction from './validateFunction.js'

export default function validateField (field) {
  array.parse(field)
    .forEach(validateFunction)
}
