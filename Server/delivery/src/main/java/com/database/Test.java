package com.database;

import java.io.IOException;

import org.json.simple.parser.ParseException;

public class Test {
	public static void main(String[] args) throws IOException, ParseException {

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
		System.out.println(userDatabase.getListUsers());
		/*******/

		/** Phương thức Customer **/
		CustomerDatabase customerDatabase = new CustomerDatabase();
//		System.out.println(customerDatabase.getCustomer("c0"));
//		System.out.println(customerDatabase.getListCustomers());
//		System.out.println(customerDatabase.checkExistPhone("091355315"));
		System.out.println(customerDatabase.addCustomer("a", "a", "017361615"));
//		System.out.println(customerDatabase.addCustomer("a", "a", "017361615"));
//		System.out.println(
//		customerDatabase.editCustomer("c0", "", "", "");
		/*******/

//		System.out.println("request remove: " + packageDatabase.requesRemoveList());
//		System.out.println("request remove: " + packageDatabase.asignPackage("u2", "p0"));
//		packageDatabase.requestRemove("u2", "p0");
//		packageDatabase.deasignPackage("u2", "p1");
	}
}
