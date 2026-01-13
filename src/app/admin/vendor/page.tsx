// "use client";
// import { useEffect, useState } from "react";
// import ReactPaginate from "react-paginate";
// // import { useGetVendorPaginationQuery } from "@/api/Vendor/VendorApiSlice";
// // import VendorList from "./VendorList";

// interface VendorModel {
//   vendorId: number;
//   vendorBusinessName: string;
//   city: string;
// }

// export default function VendorDashboard() {
// //   const [vendors, setVendors] = useState<VendorModel[]>([]);
//   const [itemsPerPage, setItemsPerPage] = useState(5);

//   const [pageOptions, setPageOptions] = useState({
//     PageNumber: 1,
//     PageSize: itemsPerPage,
//     totalItems: 0,
//     totalPages: 0,
//   });

//   const { data, isLoading } = useGetVendorPaginationQuery({
//     PageNumber: pageOptions.PageNumber,
//     PageSize: itemsPerPage,
//   });

//   useEffect(() => {
//     if (data) {
//       setVendors(data.apiResponse.result);

//       const { totalItems, totalPages, currentPage } = JSON.parse(
//         data.totalRecords
//       );

//       setPageOptions({
//         PageNumber: currentPage,
//         PageSize: itemsPerPage,
//         totalItems,
//         totalPages,
//       });
//     }
//   }, [data, itemsPerPage]);

//   const handlePageClick = (event: any) => {
//     setPageOptions({
//       ...pageOptions,
//       PageNumber: event.selected + 1,
//     });
//   };

//   if (isLoading) return <div>Loading...</div>;

//   return (
//     <div className="bg-white p-6 rounded-xl shadow space-y-4">
//       <h2 className="text-lg font-semibold">Recent Vendors</h2>

//       {/* <VendorList vendors={vendors} /> */}

//       <div className="flex items-center justify-between mt-4">
//         <ReactPaginate
//           breakLabel="..."
//           nextLabel="›"
//           onPageChange={handlePageClick}
//           pageRangeDisplayed={5}
//           marginPagesDisplayed={1}
//           pageCount={pageOptions.totalPages}
//           previousLabel="‹"
//           containerClassName="flex gap-2 text-sm"
//           pageLinkClassName="px-3 py-1 border rounded hover:bg-green-100"
//           activeLinkClassName="bg-green-500 text-white"
//         />

//         <div className="flex items-center gap-2 text-sm">
//           <span>Rows per page</span>
//           <select
//             className="border rounded px-2 py-1"
//             value={itemsPerPage}
//             onChange={(e) => setItemsPerPage(Number(e.target.value))}
//           >
//             <option>5</option>
//             <option>10</option>
//             <option>15</option>
//             <option>20</option>
//           </select>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import "../../globals.css";
import VendorList from "./list/page";
import { FiHome } from "react-icons/fi";

export default function VendorDashboard() {
  return (
    <div className="p-3 bg-white rounded-xl shadow space-y-4">

      {/* 🧭 Breadcrumb with Home Icon */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
        <FiHome className="text-gray-400" />
        <span>/</span>
        <span className="text-gray-800 font-medium">Vendor Master</span>
      </div>

      {/* 📄 Page Description */}
      <div className="mb-6 text-gray-600 text-sm">
        Manage vendor profiles and basic information
      </div>

      {/* 📋 Vendor Table */}
      <VendorList />
    </div>
  );
}
