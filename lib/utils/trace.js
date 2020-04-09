import { inspect } from 'util'
import number from '../types/number/number.js'
import rewrite from '../types/object/rewrite.js'
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

function wrap ([key, value]) {
  const context = {
    ...this,
    name: `${this.name}.${key}`
  }

  return [
    key,
    typeof value === 'function'
      ? {
        [key]: constraints => {
          const result = this.target[key](constraints)
          const merged = { ...context, constraints }

          return Array.isArray(result)
            ? result.map(splash, merged)
            : splash.call(merged, result)
        }
      }[key]
      : trace(value, context)
  ]
}

export default function trace (target, {
  depth = null,
  logger,
  name
} = {}) {
  return depth !== null && number.parse(depth)
    ? rewrite(target, wrap, {
      depth,
      logger,
      name: string.parse(name),
      target
    })
    : target
}
