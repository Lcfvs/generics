function listen ([name, entity]) {
  const { app, renderer, templates } = this

  entity.routes(app, entity.hooks(renderer, templates[name]))
}

export default function route (app, entities, renderer, templates = {}) {
  Object.entries(entities)
    .forEach(listen, {
      app,
      renderer,
      templates
    })
}
