function listen ([name, entity]) {
  const { app, renderer, templates } = this

  entity.routes(app, entity.hooks({
    ...this,
    renderer,
    templates: templates[name]
  }))
}

export default function route ({
  app,
  entities,
  renderer,
  templates = {},
  ...rest
}) {
  Object.entries(entities)
    .forEach(listen, {
      app,
      entities,
      renderer,
      templates,
      ...rest
    })
}
