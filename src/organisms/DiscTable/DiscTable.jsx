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

const buildRowsWithCells = (prepareRow, onDelete) =>
  map(
    row =>
      prepareRow(row) || (
        <tr {...row.getRowProps()}>
          {buildCells(row.cells)}
          <Td>
            <NextLink href={`/disc/edit?id=${getId(row)}`} as={`/disc/edit/${getId(row)}`}>
              <Link>Editar</Link>
            </NextLink>
            <span> | </span>
            <Link onClick={() => onDelete(getId(row))}>Deletar</Link>
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
    Header: 'Cantor(a)',
    accessor: 'singer',
  },
  {
    Header: 'Coleção',
    accessor: 'collection',
  },
]

const DiscTableComponent = ({ discs, onDelete }) => {
  const { getTableProps, getTableBodyProps, headers, rows, prepareRow } = useTable({
    columns: tableCollumns,
    data: discs,
  })

  return (
    <Table {...getTableProps()}>
      <thead>
        <tr>
          {buildHeader(headers)}
          <Th>Ação</Th>
        </tr>
      </thead>
      <tbody {...getTableBodyProps()}>{buildRowsWithCells(prepareRow, onDelete)(rows)}</tbody>
    </Table>
  )
}

export default DiscTableComponent
