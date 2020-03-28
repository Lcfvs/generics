import qb from './qb.js'

(async () => {
  await qb.migrate.latest()

  const [id] = await qb('events')
    .insert({
      content: 'test2',
      end: new Date(),
      start: new Date()
    })

  const results = await qb('events')
    .where({
      archivedAt: null
    })
    .andWhereBetween('start', [
      new Date(Date.now() - 10000),
      new Date(Date.now() + 10000)
    ])
    .orderBy('start')

  console.log({ id, results })
  process.exit(0)
})()
