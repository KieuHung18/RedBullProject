package com.packagelistcontroller;

public class PackageList {
	private String userID;
	private String packageID;
	private String address;
	private int price;
	private boolean status;
	private String customerID;
	private String customerName;
	private String customerPhone;
	public PackageList() {
		// TODO Auto-generated constructor stub
	}
	public PackageList(String userID, String packageID, String address, int price, boolean status, String customerID,
			String customerName, String customerPhone) {
		this.userID = userID;
		this.packageID = packageID;
		this.address = address;
		this.price = price;
		this.status = status;
		this.customerID = customerID;
		this.customerName = customerName;
		this.customerPhone = customerPhone;
	}
	public String getUserID() {
		return userID;
	}
	public void setUserID(String userID) {
		this.userID = userID;
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
	public boolean isStatus() {
		return status;
	}
	public void setStatus(boolean status) {
		this.status = status;
	}
	public String getCustomerID() {
		return customerID;
	}
	public void setCustomerID(String customerID) {
		this.customerID = customerID;
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
	
	
	
}
