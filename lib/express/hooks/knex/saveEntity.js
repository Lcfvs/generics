function clean (result, [name, value]) {
  return {
    ...result,
    ...value === undefined
      ? {}
      : {
        [name]: value
      }
  }
}

export default function saveEntity ({
  qb,
  table,
  id = 'id'
}) {
  return async ({ context }) => {
    const { body, params: { id: entity } } = context
    const data = Object.entries(body).reduce(clean, {})

    if (entity) {
      data[id] = entity[id]
      await qb(table).update(data)
    } else {
      data[id] = await qb(table).insert(data).shift()
    }

    return {
      ...context,
      entity: {
        ...entity || {},
        ...data
      }
    }
  }
}
