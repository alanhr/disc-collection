import R from 'ramda'

import { collection } from '../../models'

export const addCollection = async (req, res) => {
  try {
    await collection
      .create(R.prop('body', req))
      .run()
      .promise()

    res.sendStatus(201)
  } catch (resultError) {
    console.log(resultError.merge())

    res.sendStatus(500)
  }
}

export const getCollectionById = async (req, res) => {
  try {
    const result = await collection
      .getById(R.path(['params', 'id'], req))
      .run()
      .promise()

    res.status(200).send(
      R.compose(
        R.prop('collection'),
        R.head,
      )(result.merge()),
    )
  } catch (resultError) {
    console.log(resultError.merge())

    res.sendStatus(500)
  }
}

export const getCollections = async (req, res) => {
  try {
    const result = await collection
      .getAll()
      .run()
      .promise()

    res.status(200).send(R.map(R.prop('collection'), result.merge()))
  } catch (resultError) {
    console.log(resultError.merge())

    res.sendStatus(500)
  }
}

export const deleteCollectionById = async (req, res) => {
  try {
    await collection
      .deletedById(R.path(['params', 'id'], req))
      .run()
      .promise()

    res.sendStatus(204)
  } catch (resultError) {
    console.log(resultError.merge())

    res.sendStatus(500)
  }
}

export const updateCollectionById = async (req, res) => {
  try {
    await collection
      .update(R.prop('body', req), R.path(['params', 'id'], req))
      .run()
      .promise()

    res.sendStatus(204)
  } catch (resultError) {
    console.log(resultError.merge())

    res.sendStatus(500)
  }
}
