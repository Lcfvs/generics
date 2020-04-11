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

export default {
  all (target) {
    const properties = object.parse(target)

    return [
      this.type(properties),
      properties.maxlength !== undefined && this.maxlength(properties),
      properties.minlength !== undefined && this.minlength(properties),
      properties.pattern !== undefined && this.pattern(properties),
      types[properties.type] !== undefined && types[properties.type].call(this, properties)
    ].filter(Boolean)
  },
  anchor,
  color,
  email,
  hostname,
  maxlength,
  minlength,
  path,
  pattern,
  tel,
  text,
  type,
  url
}
