import routes from './routes/routes.js'
import exit from './utils/exit.js'
import next from './utils/next.js'
import trigger from './utils/trigger.js'

Promise.resolve()
  .then(() => {
    return trigger(routes.events.create, {
      body: {
        content: 'event content',
        startDate: '2020-03-31T00:00:00',
        endDate: '2020-04-01T23:59:59'
      }
    })
  })
  .then(({ context: { entity } }) => {
    console.log({ created: entity })

    return trigger(routes.events.update, {
      params: {
        id: entity.id.toString(10)
      },
      body: {
        content: 'event content (updated)',
        startDate: '2020-03-31T00:00:00',
        endDate: '2020-04-01T23:59:59'
      }
    })
  })
  .then(({ context: { entity } }) => {
    console.log({ updated: entity })

    return trigger(routes.events.find, {
      params: {
        id: entity.id.toString(10)
      }
    })
  })
  .then(({ context: { entity } }) => {
    console.log({ found: entity })

    return trigger(routes.events.archive, {
      params: {
        id: entity.id.toString(10)
      },
      query: {
        confirmation: '1'
      }
    })
  })
  .then(({ context: { entity } }) => {
    console.log({ archived: entity })

    return trigger(routes.events.search)
  })
  .then(({ context: { entities } }) => {
    console.log({ searched: entities })
  })
  .then(exit)
  .catch(next)
