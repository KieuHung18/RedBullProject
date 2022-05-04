package com.adminpackage;

public class AdminPackageList {
	private String packageID;
	private String userName;
	private String userID;
	private String status;
	private String customerName;
	private String customerPhone;
	
	public AdminPackageList() {
		// TODO Auto-generated constructor stub
	}

	public AdminPackageList(String packageID, String userName, String userID, String status, String customerName,
			String customerPhone) {
		super();
		this.packageID = packageID;
		this.userName = userName;
		this.userID = userID;
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

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getUserID() {
		return userID;
	}

	public void setUserID(String userID) {
		this.userID = userID;
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
	
}
