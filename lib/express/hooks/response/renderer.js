export default function renderer (extract, template) {
  return async ({ context, response }) => {
    return template
      ? response.render(template, extract(context))
      : response.send(extract(context))
  }
}
