const empties = [null, undefined]

async function field (promise, [name, parsers]) {
  const { data, errors, fields } = await promise
  const result = { data, errors, fields }

  try {
    const [value] = await parsers.reduce(test, [data[name], { ...fields }, name])

    result.fields = {
      ...fields,
      ...{
        [name]: value
      }
    }
  } catch (error) {
    result.errors = {
      ...errors,
      ...{
        [name]: error
      }
    }
  }

  return result
}

async function test (promise, rule, key) {
  const [value, fields, name] = await promise
  let result = value

  if (!key && !empties.includes(result)) {
    result = await rule(value, fields, name)
  }

  return [
    result,
    fields
  ]
}

export default async function parse ({ ...parsers }, { ...data }, { ...fields } = {}) {
  const result = await Object.entries(parsers)
    .reduce(field, Promise.resolve({
      data,
      errors: {},
      fields
    }))

  if (Object.keys(result.errors).length) {
    throw Object.assign(new Error('validation errors'), {
      errors: result.errors
    })
  }

  return result.fields
}
