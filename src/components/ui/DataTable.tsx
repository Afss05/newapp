"use client";

import { useState, useMemo } from "react";
import { FiSearch, FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface Column<T> {
  key: keyof T;
  label: string;
  render?: (row: T) => React.ReactNode;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  pageSize?: number;
}

export default function DataTable<T extends { id: number }>({
  data,
  columns,
  pageSize = 5,
}: DataTableProps<T>) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const filteredData = useMemo(() => {
    return data.filter((item) =>
      Object.values(item)
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [data, search]);

  const totalPages = Math.ceil(filteredData.length / pageSize);

  const pageData = filteredData.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  return (
    <div className="bg-white shadow-xl rounded-2xl p-5">
      {/* Search */}
      <div className="flex items-center gap-2 mb-4">
        <FiSearch className="text-gray-400" />
        <input
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              {columns.map((col) => (
                <th key={String(col.key)} className="p-3 text-left">
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {pageData.map((row) => (
              <tr
                key={row.id}
                className="border-b hover:bg-gray-50 transition"
              >
                {columns.map((col) => (
                  <td key={String(col.key)} className="p-3">
                    {col.render
                      ? col.render(row)
                      : String(row[col.key])}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4 text-sm">
        <span>
          Page {page} of {totalPages}
        </span>
        <div className="flex gap-2">
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
            className="px-3 py-1 border rounded-lg disabled:opacity-50"
          >
            <FiChevronLeft />
          </button>
          <button
            disabled={page === totalPages}
            onClick={() => setPage((p) => p + 1)}
            className="px-3 py-1 border rounded-lg disabled:opacity-50"
          >
            <FiChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
