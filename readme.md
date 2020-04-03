# @lcf.vs/generics


## Building

### 1# Create your entities

#### Example
[project/lib/entities/{name}/{name}.js](https://github.com/Lcfvs/generics-tests/lib/entities/events/events.js)

Then link it to the parent module


### 2# Create your entity column parsers

#### Example
[project/lib/parsers/{name}/columns.js](https://github.com/Lcfvs/generics-tests/lib/parsers/events/columns.js)


### 3# Create your entity route specific parsers

#### Example
[project/lib/parsers/{name}/{name}.js](https://github.com/Lcfvs/generics-tests/lib/parsers/events/events.js)

Then link it to the parent module


### 4# Create your route hooks

#### Example
[project/lib/hooks/{name}/{name}.js](https://github.com/Lcfvs/generics-tests/lib/hooks/events/events.js)

Then link it to the parent module


### 5# Register your routes

#### Example
[project/routes/routes.js](https://github.com/Lcfvs/generics-tests/routes/routes.js)


## Test it

`npm test`


## License

[MIT](./LICENSE)
