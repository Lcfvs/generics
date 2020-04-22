function constraint (query, constraint) {
  return constraint(query)
}

export default function query (dao, table, constraints) {
  const query = dao.qb(table.name)

  query.queryContext({ dao, query, table })

  return constraints.reduce(constraint, query)
}
