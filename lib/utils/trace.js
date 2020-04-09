import { inspect } from 'util'
import number from '../types/number/number.js'
import reduceIn from '../types/object/reduceIn.js'
import string from '../types/string/string.js'

function splash (fn) {
  const { constraints, depth, logger, name } = this

  return async (...params) => {
    await logger({
      constraints,
      format: async data => inspect({
        [name]: {
          constraints,
          data
        }
      }, false, depth, true)
    })(...params)

    return fn(...params)
  }
}

function wrap (target, [key, value], { name, ...rest }) {
  const context = {
    ...rest,
    name: `${name}.${key}`
  }

  target[key] = typeof value === 'function'
    ? {
      [key]: constraints => {
        const result = value.call(target, constraints)
        const merged = { ...context, constraints }

        return Array.isArray(result)
          ? result.map(splash, merged)
          : splash.call(merged, result)
      }
    }[key]
    : reduceIn(value, wrap, context)

  return target
}

export default function trace (target, {
  depth = null,
  logger,
  name
} = {}) {
  return depth !== null && number.parse(depth)
    ? reduceIn(target, wrap, {
      depth,
      logger,
      name: string.parse(name),
      target
    })
    : target
}
