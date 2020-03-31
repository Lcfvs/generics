import saveEntity from '../../../lib/express/hooks/knex/saveEntity.js'
import context from './context.js'

const save = saveEntity({
  ...context,
  table: 'events'
})

void (async () => {
  try {
    const { entity } = await save({
      context: {
        body: {
          content: 'test',
          endDate: new Date(),
          startDate: new Date()
        }
      }
    })

    console.log(entity)
  } catch (error) {
    console.error(error)
  }

  process.exit(0)
})()
