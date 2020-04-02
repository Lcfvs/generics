import object from '../../../../types/object/object.js'
import anchor from './anchor.js'
import color from './color.js'
import email from './email.js'
import hostname from './hostname.js'
import maxlength from './maxlength.js'
import minlength from './minlength.js'
import path from './path.js'
import pattern from './pattern.js'
import tel from './tel.js'
import text from './text.js'
import type from './type.js'
import url from './url.js'

const types = {
  anchor,
  color,
  email,
  hostname,
  path,
  text,
  tel,
  url
}

export default function all (target) {
  const properties = object.parse(target)

  return [
    type(properties),
    properties.maxlength !== undefined && maxlength(properties),
    properties.minlength !== undefined && minlength(properties),
    properties.pattern !== undefined && pattern(properties),
    types[properties.type] !== undefined && types[properties.type](properties)
  ].filter(Boolean)
}
