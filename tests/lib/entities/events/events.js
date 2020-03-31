import context from '../../knex/context.js'

export default {
  id: {
    min: '1',
    step: '1',
    type: 'number',
    context: {
      ...context,
      table: 'events'
    }
  },
  createdDate: {
    min: '1970-01-01T00:00:00',
    required: '',
    step: '1',
    type: 'datetime'
  },
  updatedDate: {
    min: '1970-01-01T00:00:00',
    step: '1',
    type: 'datetime',
    value: ''
  },
  archivedDate: {
    min: '1970-01-01T00:00:00',
    step: '1',
    type: 'datetime',
    value: null
  },
  content: {
    maxlength: '100',
    minlength: '3',
    required: '',
    type: 'text'
  },
  startDate: {
    min: '1970-01-01T00:00:00',
    required: '',
    step: '1',
    type: 'datetime',
    value: null
  },
  endDate: {
    min: '1970-01-01T00:00:00',
    required: '',
    step: '1',
    type: 'datetime',
    value: null
  }
}
