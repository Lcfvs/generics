import process from 'process'
import './bootstrap.js'
import './utils/app.js'
import './routes/routes.js'
import date from '../lib/types/date/date.js'
import fetch from './utils/fetch.js'

async function test () {
  let response

  response = await fetch('/events/create', {
    body: {
      content: 'event content',
      startDate: date.toW3CDatetime(new Date(), true),
      endDate: date.toW3CDatetime(date.addDays(new Date(), 1), true)
    },
    method: 'post'
  })

  console.log({ created: response })

  response = await fetch(`/events/update/${response.body.id}`, {
    body: {
      content: `${response.body.content} (updated)`,
      startDate: date.toW3CDatetime(new Date(), true),
      endDate: date.toW3CDatetime(date.addDays(new Date(), 1), true)
    },
    method: 'post',
    params: {
      id: `${response.body.id}`
    }
  })

  console.log({ updated: response })

  response = await fetch(`/events/find/${response.body.id}`, {
    method: 'get',
    params: {
      id: `${response.body.id}`
    }
  })

  console.log({ found: response })

  response = await fetch(`/events/archive/${response.body.id}`, {
    method: 'get',
    params: {
      id: `${response.body.id}`
    },
    query: {
      confirmation: '1'
    }
  })

  console.log({ archived: response })

  response = await fetch('/events/search', {
    method: 'get',
    params: {
      content: `${response.body.content}`
    },
    query: {
      confirmation: '1'
    }
  })

  console.log({ searched: response })
}

test()
  .catch(error => console.log(error))
  .finally(() => process.exit(0))
