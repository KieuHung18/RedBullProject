package com.database;

import java.io.FileReader;
import java.io.IOException;
import java.io.Reader;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

public class CustomerDatabase {
	/** Phương thức lấy khách hàng(JSONObject) bao gồm tất cả hông tin theo ID **/
	public JSONObject getCustomer(String id_customer) {
		JSONParser parser = new JSONParser();
		JSONObject obj0 = new JSONObject();
//		String link = "customer.json";
		String link = PackageDatabase.relativePath()+"\\customer.json";
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
}