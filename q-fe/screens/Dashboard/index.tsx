import React, { useEffect, useState } from 'react';
import { usePagination, useTable } from 'react-table';

import { getUser } from '@apis/user';

import style from './index.module.scss';

/**
 * Declare screen props
 */
interface IScreenProps {}

export const DashboardScreen: IComponent<IScreenProps> = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageCount, setPageCount] = useState(0);
  const fetchIdRef = React.useRef(0);

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

  const fetchData = React.useCallback(async ({ pageSize, pageIndex }) => {
    // Give this fetch an ID
    const fetchId = ++fetchIdRef.current;

    // Set the loading state
    setLoading(true);

    // Only update the data if this is the latest fetch
    if (fetchId === fetchIdRef.current) {
      const startRow = pageSize * pageIndex;
      const endRow = startRow + pageSize;
      const userList = await getUser();
      const tableData = userList
        .map(({ name, officeId, point }) => ({
          officeId,
          point,
        }))
        .sort((a, b) => b.point - a.point)
        .map((item, idx) => ({ ...item, rank: idx + 1 }));

      const paginatedData =
        tableData.slice(startRow, endRow).length === 0
          ? tableData
          : tableData.slice(startRow, endRow);
      setData(paginatedData);

      // Your server could send back total page count.
      // For now we'll just fake it, too
      setPageCount(Math.ceil(userList.length / pageSize));

      setLoading(false);
    }
  }, []);

  return (
    <div className="w-100 h-100 relative overflow-auto hover-scroll center-items bg-light-yellow">
      <div className="near-black w-50 center pl3 f3 flex flex-column justify-center items-center">
        <Table
          columns={columns}
          data={data}
          fetchData={fetchData}
          loading={loading}
          pageCount={pageCount}
        />
      </div>
    </div>
  );
};

function Table({ columns, data, fetchData, loading, pageCount: controlledPageCount }) {
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
      columns,
      data,
      initialState: { pageIndex: 0 }, // Pass our hoisted table state
      manualPagination: true, // Tell the usePagination
      pageCount: controlledPageCount,
    },
    usePagination
  );
  useEffect(() => {
    fetchData({ pageIndex, pageSize });
  }, [fetchData, pageIndex, pageSize]);
  // Render the UI for your table
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
          <tr>
            {loading ? (
              // Use our custom loading state to show a loading indicator
              <td colSpan={10000}>Loading...</td>
            ) : (
              <td colSpan={10000}>
                Showing {page.length} of ~{controlledPageCount * pageSize} results
              </td>
            )}
          </tr>
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
