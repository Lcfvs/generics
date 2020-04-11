function listen ([name, entity]) {
  const { app, knex, renderer, templates } = this

  entity.routes(app, entity.hooks({
    knex,
    renderer,
    templates: templates[name]
  }))
}

export default function route (app, knex, renderer, templates = {}) {
  Object.entries(knex.entities)
    .forEach(listen, {
      app,
      knex,
      renderer,
      templates
    })
}
