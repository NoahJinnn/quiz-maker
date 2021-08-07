import React, { useEffect, useState } from 'react';
import { usePagination, useTable } from 'react-table';
import { io } from 'socket.io-client';

import { getUserList } from '@apis/user';

import style from './index.module.scss';

/**
 * Declare screen props
 */
interface IScreenProps {}

export const DashboardScreen: IComponent<IScreenProps> = () => {
  const [data, setData] = useState([]);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Hạng',
        accessor: 'rank', // accessor is the "key" in the data
      },

      {
        Header: 'Email nhân viên',
        accessor: 'officeId',
      },
      {
        Header: 'Tổng điểm',
        accessor: 'point',
      },
    ],
    []
  );

  const initTableData = async () => {
    const userList = await getUserList();

    const tableData = userList
      .map(({ id, name, officeId, point }) => ({
        id,
        officeId,
        point,
      }))
      .sort((a, b) => b.point - a.point)
      .map((item, idx) => ({ ...item, rank: idx + 1 }));
    setData(tableData);
  };

  useEffect(() => {
    setInterval(() => {
      initTableData();
    }, 1000);
  }, []);

  return (
    <div className="pt8 w-100 h-100 relative overflow-auto hover-scroll bg-light-yellow overflow-y-auto">
      <div className={`near-black w-50 center pl3 f3 flex flex-column justify-center items-center`}>
        <Table columns={columns} data={data} />
      </div>
    </div>
  );
};

function Table({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      autoResetPage: false,
      columns,
      data,
      initialState: { pageIndex: 0 }, // Pass our hoisted table state
    },
    usePagination
  );

  return (
    <div className={`flex flex-column justify-center items-center ${style['user-dashboard']}`}>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination pa3">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}>
          {[10, 50, 100, 200, 300].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
