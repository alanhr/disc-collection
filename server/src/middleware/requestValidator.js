import R from 'ramda'

import isEmpty from '../utils/isEmpty'

const formatError = R.compose(
  item => ({
    [R.prop('path', item)]: R.prop('message', item),
  }),
  R.evolve({
    path: R.join('.'),
  }),
  R.pick(['message', 'path']),
)

const buildErros = R.reduce(
  (acc, elm) =>
    R.compose(
      R.mergeRight(acc),
      formatError,
    )(elm),
  {},
)

export default (schema, field = 'body') => (req, res, next) => {
  const error = R.compose(
    R.ifElse(
      isEmpty,
      R.identity,
      R.compose(
        buildErros,
        R.prop('details'),
      ),
    ),
    R.propOr(null, 'error'),
    R.partialRight(R.bind(schema.validate, schema), [
      {
        abortEarly: false,
      },
    ]),
  )(R.prop(field, req))

  return isEmpty(error)
    ? next()
    : res.status(400).json({
        error,
      })
}
