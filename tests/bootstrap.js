import { resolve } from 'path'
import { argv, chdir } from 'process'

chdir(resolve(argv[1], '..'))
