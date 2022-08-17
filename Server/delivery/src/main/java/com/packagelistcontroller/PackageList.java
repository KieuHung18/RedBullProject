package com.packagelistcontroller;

public class PackageList {
	private String packageID;
	private String address;
	private int price;
	private String status;
	private String customerName;
	private String customerPhone;
	
	public PackageList() {
		// TODO Auto-generated constructor stub
	}

	public PackageList(String packageID, String address, int price, String status, String customerName,
			String customerPhone) {
		super();
		this.packageID = packageID;
		this.address = address;
		this.price = price;
		this.status = status;
		this.customerName = customerName;
		this.customerPhone = customerPhone;
	}
	
	public String getPackageID() {
		return packageID;
	}

	public void setPackageID(String packageID) {
		this.packageID = packageID;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

	public String getCustomerPhone() {
		return customerPhone;
	}

	public void setCustomerPhone(String customerPhone) {
		this.customerPhone = customerPhone;
	}

	
	

	

//	@Override
//	public String toString() {
//		return "PackageList [userID=" + userID + ", packageID=" + packageID + ", address=" + address + ", price="
//				+ price + ", status=" + status + ", customerID=" + customerID + ", customerName=" + customerName
//				+ ", customerPhone=" + customerPhone + "]";
//	}

}
