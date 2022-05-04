package com.database;

public class User {
	private String id;
	private String fullName;
	private String address;
	private String phoneNumber;
	private String password;
	private String account;
	private String role;

	public User() {
	}

	public User(String id, String fullName, String address, String phoneNumber, String password, String account,
			String role) {
		super();
		this.id = id;
		this.fullName = fullName;
		this.address = address;
		this.phoneNumber = phoneNumber;
		this.password = password;
		this.account = account;
		this.role = role;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
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

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getAccount() {
		return account;
	}

	public void setAccount(String account) {
		this.account = account;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", fullName=" + fullName + ", address=" + address + ", phoneNumber=" + phoneNumber
				+ ", password=" + password + ", account=" + account + ", role=" + role + "]";
	}

}
