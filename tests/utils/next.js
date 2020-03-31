import exit from './exit.js'

export default function next (error) {
  console.error(error)
  exit()
}
