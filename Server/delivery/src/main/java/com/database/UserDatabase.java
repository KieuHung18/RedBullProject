package com.database;

import java.io.FileReader;
import java.io.IOException;
import java.io.Reader;
import java.lang.reflect.Array;
import java.util.ArrayList;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

public class UserDatabase {
	public JSONObject getUser(String id_user) {
		JSONParser parser = new JSONParser();
		JSONObject obj0 = new JSONObject();
		String link = "user.json";
		try (Reader reader = new FileReader(link)) {
			JSONObject jsonObject = (JSONObject) parser.parse(reader);
			System.out.println(jsonObject);
			JSONObject user = (JSONObject) jsonObject.get(id_user);

			String id = (String) user.get("id");
			System.out.println(id);
			String fullName = (String) user.get("fullName");
			System.out.println(fullName);
			String address = (String) user.get("address");
			System.out.println(address);
			String phoneNumber = (String) user.get("phoneNumber");
			System.out.println(phoneNumber);
			String password = (String) user.get("password");
			System.out.println(password);
			String account = (String) user.get("account");
			System.out.println(account);

			obj0.put("id", id);
			obj0.put("idCustomer", fullName);
			obj0.put("idUser", address);
			obj0.put("dayReceive", phoneNumber);
			obj0.put("dayDelivery", password);
			obj0.put("addressDelivery", account);

		} catch (IOException e) {
			e.printStackTrace();
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return obj0;
	}

	public boolean checkExistAccount() {
		JSONParser parser = new JSONParser();
		ArrayList<String> list = new ArrayList<String>();
		String link = "user.json";
		try (Reader reader = new FileReader(link)) {
			JSONObject jsonObject = (JSONObject) parser.parse(reader);
			System.out.println(jsonObject);
			for (int i = 0; i < jsonObject.size(); i++) {

				JSONObject user = (JSONObject) jsonObject.get("u" + i);

				String account = (String) user.get("account");
				System.out.println(account);
				if (!list.contains(account)) {
					list.add(account);
				}

			}
			if (list.size() != jsonObject.size()) {
				return true;
			}
		} catch (IOException e) {
			e.printStackTrace();
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return false;
	}

	public boolean checkExistPassword() {
		JSONParser parser = new JSONParser();
		ArrayList<String> list = new ArrayList<String>();
		String link = "user.json";
		try (Reader reader = new FileReader(link)) {
			JSONObject jsonObject = (JSONObject) parser.parse(reader);
			System.out.println(jsonObject);
			for (int i = 0; i < jsonObject.size(); i++) {

				JSONObject user = (JSONObject) jsonObject.get("u" + i);

				String password = (String) user.get("password");
				System.out.println(password);
				if (!list.contains(password)) {
					list.add(password);
				}

			}
			if (list.size() != jsonObject.size()) {
				return true;
			}
		} catch (IOException e) {
			e.printStackTrace();
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return false;
	}
}