package com.database;

import java.io.FileReader;
import java.io.IOException;
import java.io.Reader;
import java.util.ArrayList;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

public class UserDatabase {
//	private static String link = PackageDatabase.LINK+"\\user.json";
	/**
	 * Phương thức lấy người giao hàng(JSONObject) bao gồm tất cả hông tin theo ID
	 **/
	public JSONObject getUser(String id_user) {
		JSONParser parser = new JSONParser();
		JSONObject obj0 = new JSONObject();
		String link = PackageDatabase.relativePath()+"\\user.json";
		try (Reader reader = new FileReader(link)) {
			JSONObject jsonObject = (JSONObject) parser.parse(reader);
			JSONObject user = (JSONObject) jsonObject.get(id_user);

			obj0 = user;

		} catch (IOException e) {
			e.printStackTrace();
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return obj0;
	}

	/**
	 * Phương thức lấy ID người giao hàng theo tên tài khoản
	 **/
	public String getUserID(String userName) {
		JSONParser parser = new JSONParser();
		String result  = null;
		String link = PackageDatabase.relativePath()+"\\user.json";
		try (Reader reader = new FileReader(link)) {
			JSONObject jsonObject = (JSONObject) parser.parse(reader);
			for (int i = 0; i < jsonObject.size(); i++) {

				JSONObject user = (JSONObject) jsonObject.get("u" + i);

				String account = (String) user.get("account");
				if (userName.equals(account)) {
					result= "u"+i;
					break;
				}

			}
		} catch (IOException e) {
			e.printStackTrace();
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return result;
	}

	
	/** Phương thức kiểm tra tài khoản nhập vào có tồn tại hay không? **/
	public boolean checkExistAccount(String accountInput) {
		JSONParser parser = new JSONParser();
		ArrayList<String> list = new ArrayList<String>();
		String link = PackageDatabase.relativePath()+"\\user.json";
		try (Reader reader = new FileReader(link)) {
			JSONObject jsonObject = (JSONObject) parser.parse(reader);
			for (int i = 0; i < jsonObject.size(); i++) {

				JSONObject user = (JSONObject) jsonObject.get("u" + i);

				String account = (String) user.get("account");
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

	/** Phương thức kiểm tra số điện thoại nhập vào có tồn tại hay không? **/
	public boolean checkExistPhone(String phoneInput) {
		JSONParser parser = new JSONParser();
		ArrayList<String> list = new ArrayList<String>();
		String link = PackageDatabase.relativePath()+"\\user.json";
		try (Reader reader = new FileReader(link)) {
			JSONObject jsonObject = (JSONObject) parser.parse(reader);
			for (int i = 0; i < jsonObject.size(); i++) {
				
				JSONObject user = (JSONObject) jsonObject.get("u" + i);
				
				String phone = (String) user.get("phoneNumber");
				if (phoneInput.equals(phone)) {
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
		String link = PackageDatabase.relativePath()+"\\user.json";
		try (Reader reader = new FileReader(link)) {
			JSONObject jsonObject = (JSONObject) parser.parse(reader);
			for (int i = 0; i < jsonObject.size(); i++) {

				JSONObject user = (JSONObject) jsonObject.get("u" + i);

				String password = (String) user.get("password");
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

	/** Phương thức lấy ra danh sách người giao hàng (JSONObject) bao gồm tất cả hông tin **/
	public JSONObject getUserList() {
		JSONParser parser = new JSONParser();
		JSONObject list = null;
		
		String link = PackageDatabase.relativePath()+"\\user.json";
		try (Reader reader = new FileReader(link)) {
			list = (JSONObject) parser.parse(reader);
		} catch (IOException e) {
			e.printStackTrace();
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return list;
	}
}