async function field (promise, [name, parsers]) {
  const { data, errors, fields } = await promise
  const result = { data, errors, fields }

  try {
    const [value] = await parsers.reduce(test, [data[name], { ...fields }])

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

async function test (promise, rule) {
  const [value, fields] = await promise

  return [
    await rule(value, fields),
    fields
  ]
}

export default async function parse ({ ...parsers }, { ...data }) {
  const { errors, fields } = await Object.entries(parsers)
    .reduce(field, Promise.resolve({
      data,
      errors : {},
      fields : {}
    }))

  if (Object.keys(errors).length) {
    throw Object.assign(new Error('validation errors'), { errors } )
  }

  return fields
}
