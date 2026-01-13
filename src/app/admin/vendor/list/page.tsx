"use client";

import { useState } from "react";
import { VendorMaster } from "../types/VendorMaster";
import VendorMasterFormModal from "../components/vendor/VendorMasterFormModal";
import DataTable from "@/components/ui/DataTable";

export default function VendorPage() {
  const [vendors, setVendors] = useState<VendorMaster[]>([]);
  const [open, setOpen] = useState(false);
  const [editVendor, setEditVendor] = useState<VendorMaster | null>(null);

  const handleSave = (data: VendorMaster) => {
    if (data.vendorId) {
      setVendors(vendors.map(v => v.vendorId === data.vendorId ? data : v));
    } else {
      const newVendor = { ...data, vendorId: Date.now() };
      setVendors([...vendors, newVendor]);
    }
  };

  const columns = [
    { key: "customerName", label: "Customer" },
    { key: "vendorBusinessName", label: "Business" },
    { key: "city", label: "City" },
    {
      key: "isActive",
      label: "Status",
      render: (row: VendorMaster) => (
        <span className={`px-3 py-1 rounded-full text-xs font-medium
          ${row.isActive ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>
          {row.isActive ? "Active" : "Inactive"}
        </span>
      ),
    },
    {
      key: "id",
      label: "Action",
      render: (row: VendorMaster) => (
        <button
          onClick={() => {
            setEditVendor(row);
            setOpen(true);
          }}
          className="text-blue-600 hover:underline"
        >
          Edit
        </button>
      ),
    },
  ];

  return (
    <>
      <DataTable
        data={vendors}
        columns={columns}
        onAdd={() => {
          setEditVendor(null);
          setOpen(true);
        }}
      />

      <VendorMasterFormModal
        open={open}
        onClose={() => setOpen(false)}
        onSave={handleSave}
        editData={editVendor}
      />
    </>
  );
}
