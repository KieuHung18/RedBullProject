package com.database;

import java.io.FileReader;
import java.io.IOException;
import java.io.Reader;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

public class CustomerDatabase {
	public JSONObject getCustomer(String id_customer) {
		JSONParser parser = new JSONParser();
		JSONObject obj0 = new JSONObject();
		String link = "customer.json";
		try (Reader reader = new FileReader(link)) {
			JSONObject jsonObject = (JSONObject) parser.parse(reader);
			System.out.println(jsonObject);
			JSONObject customer = (JSONObject) jsonObject.get(id_customer);

			String id = (String) customer.get("id");
			System.out.println(id);
			String fullName = (String) customer.get("fullName");
			System.out.println(fullName);
			String address = (String) customer.get("address");
			System.out.println(address);
			String phoneNumber = (String) customer.get("phoneNumber");
			System.out.println(phoneNumber);

			obj0.put("id", id);
			obj0.put("idCustomer", fullName);
			obj0.put("idUser", address);
			obj0.put("dayReceive", phoneNumber);

		} catch (IOException e) {
			e.printStackTrace();
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return obj0;
	}
}