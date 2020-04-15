import parsers from '../validation/parsers/parsers.js'

const { knex, w3c } = parsers

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
    })
  },
  boolean (name, {
    value = undefined,
    ...rest
  } = {}) {
    return this.column(name, {
      value,
      ...rest,
      type: 'boolean'
    }, column => w3c.boolean.all(column))
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
    })
  },
  column (name, {
    value = undefined,
    ...properties
  }, parsers = column => w3c.string.all(column)) {
    const column = {
      ...properties,
      name
    }

    return {
      column,
      parsers: parsers(column)
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
    }, column => w3c.date.all(column))
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
      type: 'datetime',
      value,
      ...rest
    }, column => w3c.datetime.all(column))
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
    })
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
    }, column => w3c.file.all(column))
  },
  foreign (dao, table, name, {
    max,
    min,
    step = '1',
    value = undefined,
    ...rest
  } = {}) {
    return this.number(name, {
      max,
      min,
      step,
      value,
      ...rest
    }, column => [
      ...w3c.number.all(column),
      knex.type(dao, table)
    ])
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
    })
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
    }, column => w3c.month.all(column))
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
    }, column => w3c.number.all(column))
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
    })
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
    })
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
    })
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
    })
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
    }, column => w3c.time.all(column))
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
    })
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
    }, column => w3c.week.all(column))
  }
}
