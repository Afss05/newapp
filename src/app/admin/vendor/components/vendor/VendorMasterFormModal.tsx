"use client";

import { VendorMaster } from "../../types/VendorMaster";


interface Props {
  open: boolean;
  onClose: () => void;
  onSave: (data: VendorMaster) => void;
  editData?: VendorMaster | null;
}

export default function VendorMasterFormModal({
  open,
  onClose,
  onSave,
  editData,
}: Props) {
  if (!open) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);

    const data: VendorMaster = {
      vendorId: editData?.vendorId,
      customerName: f.get("customerName") as string,
      vendorBusinessName: f.get("vendorBusinessName") as string,
      businessOwnerName: f.get("businessOwnerName") as string,
      businessOwnerContact: f.get("businessOwnerContact") as string,
      vendorContactNumber: f.get("vendorContactNumber") as string,
      primaryContactNumber: f.get("primaryContactNumber") as string,
      addrLine1: f.get("addrLine1") as string,
      addrLine2: f.get("addrLine2") as string,
      city: f.get("city") as string,
      district: f.get("district") as string,
      state: f.get("state") as string,
      pinCode: f.get("pinCode") as string,
      isActive: f.get("isActive") === "true",
    };

    onSave(data);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-2xl">
        <h2 className="text-lg font-semibold mb-4">
          {editData ? "Edit Vendor" : "Add Vendor"}
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <input name="customerName" defaultValue={editData?.customerName} required placeholder="Customer Name" className="border p-2 rounded" />
          <input name="vendorBusinessName" defaultValue={editData?.vendorBusinessName} required placeholder="Vendor Business Name" className="border p-2 rounded" />
          <input name="businessOwnerName" defaultValue={editData?.businessOwnerName} required placeholder="Business Owner Name" className="border p-2 rounded" />
          <input name="businessOwnerContact" defaultValue={editData?.businessOwnerContact} required placeholder="Owner Contact" className="border p-2 rounded" />
          <input name="vendorContactNumber" defaultValue={editData?.vendorContactNumber} required placeholder="Vendor Contact" className="border p-2 rounded" />
          <input name="primaryContactNumber" defaultValue={editData?.primaryContactNumber} required placeholder="Primary Contact" className="border p-2 rounded" />
          <input name="addrLine1" defaultValue={editData?.addrLine1} required placeholder="Address Line 1" className="border p-2 rounded col-span-2" />
          <input name="addrLine2" defaultValue={editData?.addrLine2} placeholder="Address Line 2" className="border p-2 rounded col-span-2" />
          <input name="city" defaultValue={editData?.city} placeholder="City" className="border p-2 rounded" />
          <input name="district" defaultValue={editData?.district} placeholder="District" className="border p-2 rounded" />
          <input name="state" defaultValue={editData?.state} placeholder="State" className="border p-2 rounded" />
          <input name="pinCode" defaultValue={editData?.pinCode} placeholder="Pin Code" className="border p-2 rounded" />

          <select name="isActive" defaultValue={editData?.isActive ? "true" : "false"} className="border p-2 rounded">
            <option value="true">Active</option>
            <option value="false">Inactive</option>
          </select>

          <div className="col-span-2 flex justify-end gap-3 pt-4">
            <button type="button" onClick={onClose} className="px-4 py-2 border rounded">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
              Save Vendor
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
