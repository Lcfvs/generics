import { inspect } from 'util'
import number from '../types/number/number.js'
import reduceIn from '../types/object/reduceIn.js'
import string from '../types/string/string.js'

function splash (fn) {
  const { depth, logger, name } = this

  return async (...params) => {
    await logger({
      format: async data => inspect({
        [name]: data
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
      [key]: (constraints, ...rest) => {
        const result = value.call(target, constraints, ...rest)
        const merged = { ...context }

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
