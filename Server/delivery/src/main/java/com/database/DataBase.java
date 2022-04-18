package com.database;

import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.Reader;
import java.sql.ResultSet;
import com.database.Date;
import java.util.Iterator;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

public class DataBase {
	public static final String link = "user.json";
	public static final Date date = new Date(-1, -1, -1);

	public static void writeCustomer() {
		String link = "customer.json";
		Customer c0 = new Customer("c0", "Trần Thanh Tâm", "Hải Phòng", "0903235674");
		JSONObject obj0 = new JSONObject();
		obj0.put("id", c0.getId());
		obj0.put("fullName", c0.getFullName());
		obj0.put("address", c0.getAddress());
		obj0.put("phoneNumber", c0.getPhoneNumber());

		JSONObject obj1 = new JSONObject();
		Customer c1 = new Customer("c1", "Lý Văn Long", "Hải Phòng", "0903235674");
		obj1.put("id", c1.getId());
		obj1.put("fullName", c1.getFullName());
		obj1.put("address", c1.getAddress());
		obj1.put("phoneNumber", c1.getPhoneNumber());

		JSONObject obj2 = new JSONObject();
		Customer c2 = new Customer("c2", "Trần Nguyễn Minh Hiếu", "Hải Phòng", "0903235674");
		obj2.put("id", c2.getId());
		obj2.put("fullName", c2.getFullName());
		obj2.put("address", c2.getAddress());
		obj2.put("phoneNumber", c2.getPhoneNumber());
		JSONObject main = new JSONObject();
		main.put(c0.getId(), obj0);
		main.put(c1.getId(), obj1);
		main.put(c2.getId(), obj2);

		try (FileWriter file = new FileWriter(link)) {
			file.write(main.toJSONString());
			System.out.println("Working....");
		} catch (IOException e) {
			e.printStackTrace();
		}
		System.out.println("Completed!!!");
	}

	public static void writePackage() {
		String link = "packages.json";
		Date dr0 = new Date(13, 4, 2022);
		Date dd0 = new Date(15, 4, 2022);
		JSONObject jdr0 = new JSONObject();
		jdr0.put("day", dr0.getDay());
		jdr0.put("month", dr0.getMonth());
		jdr0.put("year", dr0.getYear());

		JSONObject jdd0 = new JSONObject();
		jdd0.put("day", date.getDay());
		jdd0.put("month", date.getMonth());
		jdd0.put("year", date.getYear());
		Package c0 = new Package("p0", "c2", "u1", dr0, date, "Bình Dương", 100000, false);
		JSONObject obj0 = new JSONObject();

		obj0.put("id", c0.getId());
		obj0.put("idCustomer", c0.getIdCustomer());
		obj0.put("idUser", c0.getIdUser());
		obj0.put("dayReceive", jdr0);
		obj0.put("dayDelivery", jdd0);
		obj0.put("addressDelivery", c0.getAddressDelivery());
		obj0.put("cost", c0.getCost());
		obj0.put("status", c0.getStatus());

		JSONObject obj1 = new JSONObject();
		Date dr1 = new Date(14, 4, 2022);
		Date dd1 = new Date(17, 4, 2022);

		JSONObject jdr1 = new JSONObject();
		jdr1.put("day", dr1.getDay());
		jdr1.put("month", dr1.getMonth());
		jdr1.put("year", dr1.getYear());

		JSONObject jdd1 = new JSONObject();
		jdd1.put("day", date.getDay());
		jdd1.put("month", date.getMonth());
		jdd1.put("year", date.getYear());

		Package c1 = new Package("p1", "c1", "u2", dr1, date, "Thủ Đức", 70000, false);
		obj1.put("id", c1.getId());
		obj1.put("idCustomer", c1.getIdCustomer());
		obj1.put("idUser", c1.getIdUser());
		obj1.put("dayReceive", jdr1);
		obj1.put("dayDelivery", jdd1);
		obj1.put("addressDelivery", c1.getAddressDelivery());
		obj1.put("cost", c1.getCost());
		obj1.put("status", c1.getStatus());

		JSONObject obj2 = new JSONObject();
		Date dr2 = new Date(11, 4, 2022);
		Date dd2 = new Date(15, 4, 2022);
		JSONObject jdr2 = new JSONObject();
		jdr2.put("day", dr2.getDay());
		jdr2.put("month", dr2.getMonth());
		jdr2.put("year", dr2.getYear());

		JSONObject jdd2 = new JSONObject();
		jdd2.put("day", date.getDay());
		jdd2.put("month", date.getMonth());
		jdd2.put("year", date.getYear());
		Package c2 = new Package("p2", "c0", "u1", dr2, date, "Thủ Đức", 130000, false);
		obj2.put("id", c2.getId());
		obj2.put("idCustomer", c2.getIdCustomer());
		obj2.put("idUser", c2.getIdUser());
		obj2.put("dayReceive", jdr2);
		obj2.put("dayDelivery", jdd2);
		obj2.put("addressDelivery", c2.getAddressDelivery());
		obj2.put("cost", c2.getCost());
		obj2.put("status", c2.getStatus());
		JSONObject main = new JSONObject();
		main.put(c0.getId(), obj0);
		main.put(c1.getId(), obj1);
		main.put(c2.getId(), obj2);

		try (FileWriter file = new FileWriter(link)) {
			file.write(main.toJSONString());
			System.out.println("Working....");
		} catch (IOException e) {
			e.printStackTrace();
		}
		System.out.println("Completed!!!");
	}

	public static void writeUser() {
		String link = "user.json";
		User c0 = new User("u0", "Trần Thanh Tâm", "Hải Phòng", "0903235674", "12345", "abc");
		JSONObject obj0 = new JSONObject();
		obj0.put("id", c0.getId());
		obj0.put("fullName", c0.getFullName());
		obj0.put("address", c0.getAddress());
		obj0.put("phoneNumber", c0.getPhoneNumber());
		obj0.put("password", c0.getPassword());
		obj0.put("account", c0.getAccount());

		JSONObject obj1 = new JSONObject();
		User c1 = new User("u1", "Tống Văn Long", "Hải Phòng", "0903235674", "123456", "abcd");
		obj1.put("id", c1.getId());
		obj1.put("fullName", c1.getFullName());
		obj1.put("address", c1.getAddress());
		obj1.put("phoneNumber", c1.getPhoneNumber());
		obj1.put("password", c1.getPassword());
		obj1.put("account", c1.getAccount());

		JSONObject obj2 = new JSONObject();
		User c2 = new User("u2", "Bùi Minh An", "Hải Phòng", "0903235674", "123457", "abcde");
		obj2.put("id", c2.getId());
		obj2.put("fullName", c2.getFullName());
		obj2.put("address", c2.getAddress());
		obj2.put("phoneNumber", c2.getPhoneNumber());
		obj2.put("password", c2.getPassword());
		obj2.put("account", c2.getAccount());
		JSONObject main = new JSONObject();
		main.put(c0.getId(), obj0);
		main.put(c1.getId(), obj1);
		main.put(c2.getId(), obj2);

		try (FileWriter file = new FileWriter(link)) {
			file.write(main.toJSONString());
			System.out.println("Working....");
		} catch (IOException e) {
			e.printStackTrace();
		}
		System.out.println("Completed!!!");

	}

	public static void editName(String userid, String newName) {
		JSONParser parser = new JSONParser();

		try (Reader reader = new FileReader(link)) {

			JSONObject jsonObject = (JSONObject) parser.parse(reader);
			System.out.println(jsonObject);

			JSONObject user = (JSONObject) jsonObject.get(userid);
			user.put("name", newName);

			try (FileWriter file = new FileWriter(link)) {
				file.write(jsonObject.toJSONString());
			} catch (IOException e) {
				e.printStackTrace();
			}

		} catch (IOException e) {
			e.printStackTrace();
		} catch (ParseException e) {
			e.printStackTrace();
		}
		;
	}

	public static void read(String userid) {
		JSONParser parser = new JSONParser();
		String link = "packages.json";
		try (Reader reader = new FileReader(link)) {
			Customer c = new Customer();
			JSONObject jsonObject = (JSONObject) parser.parse(reader);
			System.out.println(jsonObject);
			JSONObject packages = (JSONObject) jsonObject.get(userid);

			String addressDelivery = (String) packages.get("addressDelivery");
			System.out.println(addressDelivery);
			long cost = (long) packages.get("cost");
			System.out.println(cost);
			boolean status = (boolean) packages.get("status");
			System.out.println(status);

		} catch (IOException e) {
			e.printStackTrace();
		} catch (ParseException e) {
			e.printStackTrace();
		}
	}

	public static void main(String[] args) {
//		writeCustomer();
		writePackage();
//		writeUser();
//		read("p1");
//		editName("us3", "newnamew");
//		edit("us3","oldname");
	}
}