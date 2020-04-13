function listen ([name, entity]) {
  const { app, templates } = this

  entity.routes(app, entity.hooks({
    ...this,
    templates: templates[name] || {}
  }))
}

export default function route ({
  app,
  dao,
  templates = {},
  ...rest
}) {
  Object.entries(dao.entities)
    .forEach(listen, {
      app,
      dao,
      templates,
      ...rest
    })
}
