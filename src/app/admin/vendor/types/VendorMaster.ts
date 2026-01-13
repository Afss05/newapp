export interface VendorMaster {
  vendorId?: number;
  customerName: string;
  vendorBusinessName: string;
  businessOwnerName: string;
  businessOwnerContact: string;
  vendorContactNumber: string;
  primaryContactNumber: string;
  addrLine1: string;
  addrLine2?: string;
  city?: string;
  district?: string;
  state?: string;
  pinCode?: string;
  isActive: boolean;
}
