/* eslint-disable react/jsx-props-no-spreading */

import React from 'react'
import { useTable } from 'react-table'
import { map, path, compose } from 'ramda'
import NextLink from 'next/link'

import { Table, Td, Th } from 'atoms/Table'
import Link from 'atoms/Link'

const getId = path(['original', 'id'])

const buildHeader = map(col => <Th {...col.getHeaderProps()}>{col.render('Header')}</Th>)

const buildCells = map(cell => <Td {...cell.getCellProps()}>{cell.render(compose(path(['cell', 'value'])))}</Td>)

const buildRowsWithCells = prepareRow =>
  map(
    row =>
      prepareRow(row) || (
        <tr {...row.getRowProps()}>
          {buildCells(row.cells)}
          <Td>
            <NextLink href={`/collection/edit?id=${getId(row)}`} as={`/collection/edit/${getId(row)}`}>
              <Link>Editar</Link>
            </NextLink>
          </Td>
        </tr>
      ),
  )

const tableCollumns = [
  {
    Header: 'Nome',
    accessor: 'name',
  },
  {
    Header: 'Descrição',
    accessor: 'description',
  },
]

const CollectionTable = ({ collections }) => {
  const { getTableProps, getTableBodyProps, headers, rows, prepareRow } = useTable({
    columns: tableCollumns,
    data: collections,
  })

  return (
    <Table {...getTableProps()}>
      <thead>
        <tr>
          {buildHeader(headers)}
          <Th>Ação</Th>
        </tr>
      </thead>
      <tbody {...getTableBodyProps()}>{buildRowsWithCells(prepareRow)(rows)}</tbody>
    </Table>
  )
}

CollectionTable.propTypes = {}

export default CollectionTable
