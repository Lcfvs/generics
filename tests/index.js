import crud from './crud.js'
import exit from './utils/exit.js'
import next from './utils/next.js'

async function test () {
  let result

  result = await crud.events.create({
    body: {
      content: 'event content',
      startDate: '2020-03-31T00:00:00',
      endDate: '2020-04-01T23:59:59'
    }
  })

  console.log({ created: result })

  result = await crud.events.update({
    params: {
      id: result.id.toString(10)
    },
    body: {
      content: 'event content (updated)',
      startDate: '2020-03-31T00:00:00',
      endDate: '2020-04-01T23:59:59'
    }
  })

  console.log({ updated: result })

  result = await crud.events.find({
    params: {
      id: result.id.toString(10)
    }
  })

  console.log({ found: result })

  result = await crud.events.archive({
    params: {
      id: result.id.toString(10)
    },
    query: {
      confirmation: '1'
    }
  })

  console.log({ archived: result })

  result = await crud.events.search({})

  console.log({ searched: result })
}

test()
  .then(exit)
  .catch(next)
