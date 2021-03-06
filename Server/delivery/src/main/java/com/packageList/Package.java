package com.packageList;

public class Package {
	private String userID;
	private String address;
	private String deliveryDate;
	private String receiveDate;
	private int price;
	private String status;
	private String customerID;
	private String customerName;
	private String customerPhone;

	public Package() {
		// TODO Auto-generated constructor stub
	}

	public Package(String userID, String packageID, String address, String deliveryDate, String receiveDate, int price,
			String status, String customerID, String customerName, String customerPhone) {
		super();
		this.userID = userID;
		this.address = address;
		this.deliveryDate = deliveryDate;
		this.receiveDate = receiveDate;
		this.price = price;
		this.status = status;
		this.customerID = customerID;
		this.customerName = customerName;
		this.customerPhone = customerPhone;
	}

	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}


	public String getDeliveryDate() {
		return deliveryDate;
	}


	public void setDeliveryDate(String deliveryDate) {
		this.deliveryDate = deliveryDate;
	}


	public String getReceiveDate() {
		return receiveDate;
	}


	public void setReceiveDate(String receiveDate) {
		this.receiveDate = receiveDate;
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
	

	public String getCustomerID() {
		return customerID;
	}


	public void setCustomerID(String customerID) {
		this.customerID = customerID;
	}

	
		
	public String getUserID() {
		return userID;
	}

	public void setUserID(String userID) {
		this.userID = userID;
	}

	@Override
	public String toString() {
		return "Package [address=" + address + ", deliveryDate=" + deliveryDate + ", receiveDate=" + receiveDate
				+ ", price=" + price + ", status=" + status + ", customerName=" + customerName + ", customerPhone="
				+ customerPhone + "]";
	}
}
