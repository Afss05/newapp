"use client";

import { useState, useMemo } from "react";
import {
  FiSearch,
  FiChevronLeft,
  FiChevronRight,
  // FiFilter,
  // FiSliders,
  // FiColumns,
} from "react-icons/fi";

interface Column<T> {
  key: keyof T;
  label: string;
  render?: (row: T) => React.ReactNode;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  pageSize?: number;
  onAdd?: () => void;
}

export default function DataTable<T extends Record<string, any>>({
  data,
  columns,
  pageSize = 5,
  onAdd,
}: DataTableProps<T>) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(pageSize);

  const filteredData = useMemo(() => {
    return data.filter((item) =>
      Object.values(item).join(" ").toLowerCase().includes(search.toLowerCase())
    );
  }, [data, search]);

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const start = (page - 1) * rowsPerPage + 1;
  const end = Math.min(page * rowsPerPage, filteredData.length);

  const pageData = filteredData.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  return (
    <div className="bg-white rounded-xl shadow border">

      {/* 🧰 Toolbar */}
      <div className="p-4 flex items-center justify-between border-b">
        <div className="flex items-center gap-3">
          <div className="relative">
            <FiSearch className="absolute left-3 top-3 text-gray-400 text-sm" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              className="pl-9 pr-3 py-2 border rounded-lg text-sm w-64 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* <button className="p-2 border rounded-lg text-gray-500 hover:bg-gray-100">
            <FiFilter />
          </button>
          <button className="p-2 border rounded-lg text-gray-500 hover:bg-gray-100">
            <FiSliders />
          </button>
          <button className="p-2 border rounded-lg text-gray-500 hover:bg-gray-100">
            <FiColumns />
          </button> */}
        </div>

        {onAdd && (
          <button
            onClick={onAdd}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm shadow"
          >
            +Add
          </button>
        )}
      </div>

      {/* 📋 Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-300 text-gray-700">
            <tr>
              {columns.map((col) => (
                <th key={String(col.key)} className="p-3 text-left font-semibold">
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {pageData.map((row) => (
              <tr key={row.id} className="border-b hover:bg-gray-50">
                {columns.map((col) => (
                  <td key={String(col.key)} className="p-3">
                    {col.render ? col.render(row) : String(row[col.key])}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 📎 Footer */}
      <div className="p-4 flex items-center justify-between text-sm text-gray-600">
        <span>
          Showing {start} to {end} of {filteredData.length} entries
        </span>

        <div className="flex items-center gap-3">
          <select
            value={rowsPerPage}
            onChange={(e) => {
              setRowsPerPage(Number(e.target.value));
              setPage(1);
            }}
            className="border rounded px-2 py-1"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
          <span>Rows per page</span>

          <div className="flex gap-1">
            <button
              disabled={page === 1}
              onClick={() => setPage((p) => p - 1)}
              className="p-1 border rounded disabled:opacity-40"
            >
              <FiChevronLeft />
            </button>
            <span className="px-3 py-1 bg-blue-600 text-white rounded-full">
              {page}
            </span>
            <button
              disabled={page === totalPages}
              onClick={() => setPage((p) => p + 1)}
              className="p-1 border rounded disabled:opacity-40"
            >
              <FiChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
