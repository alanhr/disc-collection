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
            <NextLink href={`/edit-collection?id=${getId(row)}`} as={`/edit-collection/${getId(row)}`}>
              <Link>Editar</Link>
            </NextLink>
          </Td>
        </tr>
      ),
  )

const CollectionTable = ({ collections }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Nome',
        accessor: 'name',
      },
      {
        Header: 'Descrição',
        accessor: 'description',
      },
    ],
    [],
  )

  const { getTableProps, getTableBodyProps, headers, rows, prepareRow } = useTable({
    columns,
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
