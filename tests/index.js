import routes from './routes/routes.js'
import next from './utils/next.js'

const response = {}

Promise.resolve()
  .then(() => routes.events
    .post({
      body: {
        content: 'event content',
        startDate: '2020-03-31T00:00:00',
        endDate: '2020-04-01T23:59:59'
      }
    },
    response,
    next
  ))
  .then(({ context: { entity }}) => routes.events
    .update({
      params: {
        id: entity.id.toString(10)
      },
      body: {
        content: 'event content (updated)',
        startDate: '2020-03-31T00:00:00',
        endDate: '2020-04-01T23:59:59'
      }
    },
    response,
    next
  ))
  .then(({ context: { entity }}) => routes.events
    .get({
      params: {
        id: entity.id.toString(10)
      }
    },
    response,
    next
  ))
  .then(({ context: { entity }}) => routes.events
    .archive({
      params: {
        id: '1'
      },
      query: {
        confirmation: '1'
      }
    },
    response,
    next
  ))
  .catch(next)
