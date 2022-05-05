package com.database;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.Reader;
import java.lang.reflect.Array;
import java.util.ArrayList;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.core.io.ClassPathResource;

public class CustomerDatabase {
	/** Phương thức lấy khách hàng(JSONObject) bao gồm tất cả hông tin theo ID **/
	public JSONObject getCustomer(String id_customer) {
		JSONParser parser = new JSONParser();
		JSONObject obj0 = new JSONObject();
//		String link = "customer.json";
		String link = PackageDatabase.relativePath() + "\\customer.json";
//		String link = "D:/Study/RedBullProject/Server/delivery/customer.json";
		try (Reader reader = new FileReader(link)) {
			JSONObject jsonObject = (JSONObject) parser.parse(reader);
//			System.out.println(jsonObject);
			JSONObject customer = (JSONObject) jsonObject.get(id_customer);

			obj0 = customer;

		} catch (IOException e) {
			e.printStackTrace();
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return obj0;
	}

	/** Phương thức editCustomer cho API **/
	public boolean editCustomer(String customerId, String fullName, String address, String phoneNumber) {
		if (!checkExistPhone(phoneNumber)) {
			JSONParser parser = new JSONParser();
			String link = PackageDatabase.relativePath() + "\\customer.json";
			try (Reader reader = new FileReader(link)) {

				JSONObject jsonObject = (JSONObject) parser.parse(reader);
				System.out.println(jsonObject);

				JSONObject user = (JSONObject) jsonObject.get(customerId);
				user.put("phoneNumber", phoneNumber);
				user.put("address", address);
				user.put("fullName", fullName);

				try (FileWriter file = new FileWriter(link)) {
					file.write(jsonObject.toJSONString());
				} catch (IOException e) {
					e.printStackTrace();
				}

				return true;
			} catch (IOException e) {
				e.printStackTrace();
			} catch (ParseException e) {
				e.printStackTrace();
			}
		} else {
			return false;
		}
		return false;
	}

	public static String relativePath() {
		String path = "";
		try {
			path = new ClassPathResource("").getFile().getAbsolutePath();
			String[] pathArr = path.split("\\\\");
			path = "";
			for (int i = 0; i < pathArr.length; i++) {
				if (pathArr[i].equals("Server")) {
					return path + "Server\\delivery";
				} else {
					path += pathArr[i] + "\\";
				}
			}
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return path;
	}

	/** Phương thức getListCustomers cho API **/
	public JSONArray getListCustomers() {
		JSONParser parser = new JSONParser();
		JSONArray arrObj0 = new JSONArray();
		String link = relativePath() + "\\customer.json";
		try (Reader reader = new FileReader(link)) {
			JSONObject jsonObject = (JSONObject) parser.parse(reader);
//			System.out.println(jsonObject);
			for (int i = 0; i < jsonObject.size(); i++) {
				JSONObject customers = (JSONObject) jsonObject.get("c" + i);
//				String customer = (String) packages.get("idUser");
//				if (customer.equals(customerID)) {
				String id = (String) customers.get("id");
				String fullName = (String) customers.get("fullName");
				String phoneNumber = (String) customers.get("phoneNumber");
				String address = (String) customers.get("address");

				Customer customers0 = new Customer();
				customers0.setId(id);
				customers0.setFullName(fullName);
				customers0.setPhoneNumber(phoneNumber);
				customers0.setAddress(address);

				arrObj0.add(customers0);
//				}

			}

		} catch (IOException e) {
			e.printStackTrace();
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return arrObj0;
	}

	/** Phương thức kiểm tra số điện thoại đã tồn tại hay chưa? **/
	public boolean checkExistPhone(String phoneNumber) {
		JSONParser parser = new JSONParser();
		String link = PackageDatabase.relativePath() + "\\customer.json";
		try (Reader reader = new FileReader(link)) {
			JSONObject jsonObject = (JSONObject) parser.parse(reader);
			for (int i = 0; i < jsonObject.size(); i++) {

				JSONObject customer = (JSONObject) jsonObject.get("c" + i);

				String phoneNumberJson = (String) customer.get("phoneNumber");
				if (phoneNumber.equals(phoneNumberJson)) {
					return true;
				}

			}
		} catch (IOException e) {
			e.printStackTrace();
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return false;
	}

	/** Phương thức addCustomer cho API **/
	public boolean addCustomer(String fullName, String address, String phoneNumber) throws IOException, ParseException {
		String link = PackageDatabase.relativePath() + "\\customer.json";
		Reader reader = new FileReader(link);
		JSONParser parser = new JSONParser();
		JSONArray customerList = getListCustomers();
		JSONObject jsonObject = (JSONObject) parser.parse(reader);
		int customerLengh = customerList.size();
		JSONObject obj = new JSONObject();
		if (!checkExistPhone(phoneNumber)) {
			obj.put("id", "c" + (customerLengh + 1));
			obj.put("fullName", fullName);
			obj.put("address", address);
			obj.put("phoneNumber", phoneNumber);
			jsonObject.put("c" + (customerLengh + 1), obj);
			try (FileWriter file = new FileWriter(link)) {

				file.write(jsonObject.toJSONString().toString());
//				return true;
			} catch (IOException e) {
				e.printStackTrace();
			}

			return true;
		} else
			return false;

	}

}