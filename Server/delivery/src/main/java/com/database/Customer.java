package com.database;

public class Customer {
	private String id;
	private String fullName;
	private String address;
	private String phoneNumber;

	public Customer(String id, String fullName, String address, String phoneNumber) {
		super();
		this.id = id;
		this.fullName = fullName;
		this.address = address;
		this.phoneNumber = phoneNumber;
	}

	public Customer() {
		// TODO Auto-generated constructor stub
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	@Override
	public String toString() {
		return "Customer [id=" + id + ", fullName=" + fullName + ", address=" + address + ", phoneNumber=" + phoneNumber
				+ "]";
	}

}