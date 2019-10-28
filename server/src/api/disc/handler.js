import * as R from 'ramda'

import { disc } from '../../models'

export const addDisc = async (req, res) => {
  try {
    await disc
      .create(R.prop('body', req))
      .run()
      .promise()

    res.sendStatus(201)
  } catch (resultError) {
    console.log(resultError.merge())

    res.sendStatus(500)
  }
}

export const getDiscById = async (req, res) => {
  try {
    const result = await disc
      .getById(R.path(['params', 'id'], req))
      .run()
      .promise()

    res.status(200).send(
      R.compose(
        R.prop('disc'),
        R.head,
      )(result.merge()),
    )
  } catch (resultError) {
    console.log(resultError.merge())

    res.sendStatus(500)
  }
}

export const getDiscs = async (req, res) => {
  try {
    const filter = R.pathOr(null, ['query', 'q'], req)

    const result = await disc
      .getAll(filter)
      .run()
      .promise()

    res.status(200).send(result.merge())
  } catch (resultError) {
    console.log(resultError.merge())

    res.sendStatus(500)
  }
}

export const deleteDiscById = async (req, res) => {
  try {
    await disc
      .deletedById(R.path(['params', 'id'], req))
      .run()
      .promise()

    res.sendStatus(204)
  } catch (resultError) {
    console.log(resultError.merge())

    res.sendStatus(500)
  }
}

export const updateDiscById = async (req, res) => {
  try {
    await disc
      .update(R.prop('body', req), R.path(['params', 'id'], req))
      .run()
      .promise()

    res.sendStatus(204)
  } catch (resultError) {
    console.log(resultError.merge())

    res.sendStatus(500)
  }
}
