import parsers from '../validation/parsers/parsers.js'

export default {
  anchor (name, {
    maxlength,
    minlength,
    pattern,
    value = undefined,
    ...rest
  } = {}) {
    return this.column(name, {
      maxlength,
      minlength,
      pattern,
      value,
      ...rest,
      type: 'anchor'
    }, parsers.w3c.string)
  },
  boolean (name, {
    value = undefined,
    ...rest
  } = {}) {
    return this.column(name, {
      value,
      ...rest,
      type: 'boolean'
    }, parsers.w3c.boolean)
  },
  color (name, {
    maxlength,
    minlength,
    pattern,
    value = undefined,
    ...rest
  } = {}) {
    return this.column(name, {
      maxlength,
      minlength,
      pattern,
      value,
      ...rest,
      type: 'color'
    }, parsers.w3c.string)
  },
  column (name, {
    value = undefined,
    ...properties
  }, parser) {
    const column = {
      ...properties,
      name
    }

    return {
      column,
      parsers: parser.all(column)
    }
  },
  date (name, {
    max = '9999-12-31',
    min = '1000-01-01',
    step = '1',
    value = undefined,
    ...rest
  } = {}) {
    return this.column(name, {
      min,
      max,
      step,
      value,
      ...rest,
      type: 'date'
    }, parsers.w3c.date)
  },
  datetime (name, {
    max = '9999-12-31T23:59',
    min = '1000-01-01T00:00',
    step = '60',
    value = undefined,
    ...rest
  } = {}) {
    return this.column(name, {
      max,
      min,
      step,
      value,
      ...rest
    }, parsers.w3c.datetime)
  },
  datetimeWithSeconds (name, {
    max = '9999-12-31T23:59',
    min = '1000-01-01T00:00',
    step = '1',
    value = undefined,
    ...rest
  } = {}) {
    return this.datetime(name, {
      max,
      min,
      step,
      value,
      ...rest
    })
  },
  email (name, {
    maxlength,
    minlength,
    pattern,
    value = undefined,
    ...rest
  } = {}) {
    return this.column(name, {
      maxlength,
      minlength,
      pattern,
      value,
      ...rest,
      type: 'email'
    }, parsers.w3c.string)
  },
  file (name, {
    accept,
    maxSize,
    ...rest
  } = {}) {
    return this.column(name, {
      accept,
      maxSize,
      ...rest,
      type: 'file'
    }, parsers.w3c.file)
  },
  hostname (name, {
    maxlength,
    minlength,
    pattern,
    value = undefined,
    ...rest
  } = {}) {
    return this.column(name, {
      maxlength,
      minlength,
      pattern,
      value,
      ...rest,
      type: 'hostname'
    }, parsers.w3c.string)
  },
  month (name, {
    max = '9999-12',
    min = '1000-01',
    step = '1',
    value = undefined,
    ...rest
  } = {}) {
    return this.column(name, {
      max,
      min,
      step,
      value,
      ...rest
    }, parsers.w3c.month)
  },
  number (name, {
    max,
    min,
    step = '1',
    value = undefined,
    ...rest
  } = {}) {
    return this.column(name, {
      max,
      min,
      step,
      value,
      ...rest,
      type: 'number'
    }, parsers.w3c.number)
  },
  path (name, {
    maxlength,
    minlength,
    pattern,
    value = undefined,
    ...rest
  } = {}) {
    return this.column(name, {
      maxlength,
      minlength,
      pattern,
      value,
      ...rest,
      type: 'path'
    }, parsers.w3c.string)
  },
  string (name, {
    maxlength,
    minlength,
    value = undefined,
    ...rest
  } = {}) {
    return this.column(name, {
      maxlength,
      minlength,
      value,
      ...rest,
      type: 'text'
    }, parsers.w3c.string)
  },
  text (name, {
    maxlength,
    minlength,
    pattern,
    value = undefined,
    ...rest
  } = {}) {
    return this.column(name, {
      maxlength,
      minlength,
      pattern,
      value,
      ...rest,
      type: 'string'
    }, parsers.w3c.string)
  },
  tel (name, {
    maxlength,
    minlength,
    pattern,
    value = undefined,
    ...rest
  } = {}) {
    return this.column(name, {
      maxlength,
      minlength,
      pattern,
      value,
      ...rest,
      type: 'tel'
    }, parsers.w3c.string)
  },
  time (name, {
    max = '23:59',
    min = '00:00',
    step = '60',
    value = undefined,
    ...rest
  } = {}) {
    return this.column(name, {
      min,
      max,
      step,
      value,
      ...rest,
      type: 'time'
    }, parsers.w3c.time)
  },
  timeWithSeconds (name, {
    max = '23:59',
    min = '00:00',
    step = '1',
    value = undefined,
    ...rest
  } = {}) {
    return this.time(name, {
      max,
      min,
      step,
      value,
      ...rest
    })
  },
  url (name, {
    maxlength,
    minlength,
    pattern,
    value = undefined,
    ...rest
  } = {}) {
    return this.column(name, {
      maxlength,
      minlength,
      pattern,
      value,
      ...rest,
      type: 'url'
    }, parsers.w3c.string)
  },
  week (name, {
    max = '9999-W52',
    min = '1000-W01',
    step = '1',
    value = undefined,
    ...rest
  } = {}) {
    return this.column(name, {
      max,
      min,
      step,
      value,
      ...rest
    }, parsers.w3c.week)
  }
}
