import knex from '../../validation/parsers/knex/knex.js'
import w3c from '../../validation/parsers/w3c/w3c.js'
import type from './type.js'

export default function foreign (dao, table, name, {
  max,
  min,
  step = '1',
  value = undefined,
  ...rest
} = {}, parsers = column => [
  ...w3c.number.all(column),
  knex.type(dao, table)
]) {
  return type(name, {
    max,
    min,
    step,
    value,
    ...rest,
    type: 'number'
  }, parsers)
}
