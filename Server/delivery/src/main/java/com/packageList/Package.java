package com.packageList;

import com.database.Date;

public class Package {
	private String address;
	private String deliveryDate;
	private String receiveDate;
	int price;
	private boolean status;
	private String customerName;
	private String customerPhone;
	public Package() {
		// TODO Auto-generated constructor stub
	}
	public Package(String address, String deliveryDate, String receiveDate, int price, boolean status,
			String customerName, String customerPhone) {
		super();
		this.address = address;
		this.deliveryDate = deliveryDate;
		this.receiveDate = receiveDate;
		this.price = price;
		this.status = status;
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
	public boolean isStatus() {
		return status;
	}
	public void setStatus(boolean status) {
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
