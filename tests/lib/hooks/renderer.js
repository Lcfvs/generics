export default function renderer (extract) {
  return async ({ context, response }) => response.send(extract(context))
}
