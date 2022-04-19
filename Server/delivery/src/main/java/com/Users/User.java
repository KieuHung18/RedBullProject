package com.Users;

public class User {
	private String firstName;
	private String lastName;
	private int phoneNumber;
	private String address;
	private String userName;
	private int skypeID;
	public User(String firstName, String lastName, int phoneNumber, String address, String userName, int skypeID) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.phoneNumber = phoneNumber;
		this.address = address;
		this.userName = userName;
		this.skypeID = skypeID;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public int getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(int phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public int getSkypeID() {
		return skypeID;
	}
	public void setSkypeID(int skypeID) {
		this.skypeID = skypeID;
	}
	
}	
