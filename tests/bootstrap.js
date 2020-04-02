import { resolve } from 'path'
import { argv, chdir } from 'process'

chdir(resolve(argv[1], '..'))

export default {
  NODE_ENV: 'development'
}
