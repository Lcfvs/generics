async function field ({ data, errors, fields }, [name, tests]) {
  const result = { data, errors, fields }
  try {
    const [value] = await tests.reduce(test, [data[name], { ...fields }])

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
        [name]: value
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

export default async function parse ({ ...rules }, { ...data }) { 
  const { errors, fields } = await Object.entries(rules)
    .reduce(field, {
      data,
      errors : {},
      fields : {}
    }) 

  if (Object.keys(errors).length) {
    throw Object.assign(new Error('validation errors'), { errors } )
  }

  return fields
}
