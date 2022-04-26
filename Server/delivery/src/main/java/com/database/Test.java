package com.database;

public class Test {
	public static void main(String[] args) {

		/** Phương thức Package **/
		PackageDatabase packageDatabase = new PackageDatabase();
//		packageDatabase.getListPackages();
//		packageDatabase.updateStatus(false, "p0");
//		packageDatabase.updateDelivered("p0");

//		Date date = new Date(-1, -1, -1);
//		packageDatabase.updateDayDelivery(date, "p0");
//		System.out.println(packageDatabase.getListPackages());
		System.out.println(packageDatabase.getPackage("p0"));
		/*******/

		/** Phương thức User **/
		UserDatabase userDatabase = new UserDatabase();
//		System.out.println(userDatabase.getUser("u1"));
		System.out.println(userDatabase.checkExistAccount("ab"));
		System.out.println(userDatabase.checkExistPassword("123456"));
		System.out.println(userDatabase.getUserID("abcdef"));
		/*******/

		/** Phương thức Customer **/
		CustomerDatabase customerDatabase = new CustomerDatabase();
		System.out.println(customerDatabase.getCustomer("c0"));
		/*******/
	}
}
