package com.database;

import java.io.FileReader;
import java.io.IOException;
import java.io.Reader;
import java.util.ArrayList;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

public class UserDatabase {

	/**
	 * Phương thức lấy người giao hàng(JSONObject) bao gồm tất cả hông tin theo ID
	 **/
	public JSONObject getUser(String id_user) {
		JSONParser parser = new JSONParser();
		JSONObject obj0 = new JSONObject();
		String link = "D:\\Study\\RedBullProject\\Server\\delivery\\user.json";
		try (Reader reader = new FileReader(link)) {
			JSONObject jsonObject = (JSONObject) parser.parse(reader);
//			System.out.println(jsonObject);
			JSONObject user = (JSONObject) jsonObject.get(id_user);

			obj0 = user;

		} catch (IOException e) {
			e.printStackTrace();
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return obj0;
	}

	/** Phương thức kiểm tra tài khoản nhập vào có tồn tại hay không? **/
	public boolean checkExistAccount(String accountInput) {
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
				if (accountInput.equals(account)) {
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

	/** Phương thức kiểm tra mật khẩu nhập vào có tồn tại hay không? **/
	public boolean checkExistPassword(String passwordInput) {
		JSONParser parser = new JSONParser();
		String link = "user.json";
		try (Reader reader = new FileReader(link)) {
			JSONObject jsonObject = (JSONObject) parser.parse(reader);
			System.out.println(jsonObject);
			for (int i = 0; i < jsonObject.size(); i++) {

				JSONObject user = (JSONObject) jsonObject.get("u" + i);

				String password = (String) user.get("password");
				System.out.println(password);
				if (passwordInput.equals(password)) {
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
}