package com.database;

import java.io.FileReader;
import java.io.IOException;
import java.io.Reader;
import java.util.ArrayList;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.core.io.ClassPathResource;

public class UserDatabase {
//	private static String link = PackageDatabase.LINK+"\\user.json";
	/**
	 * Phương thức lấy người giao hàng(JSONObject) bao gồm tất cả hông tin theo ID
	 **/
	public JSONObject getUser(String id_user) {
		JSONParser parser = new JSONParser();
		JSONObject obj0 = new JSONObject();
		String link = PackageDatabase.relativePath() + "\\user.json";
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
		String result = null;
		String link = PackageDatabase.relativePath() + "\\user.json";
		try (Reader reader = new FileReader(link)) {
			JSONObject jsonObject = (JSONObject) parser.parse(reader);
			for (int i = 0; i < jsonObject.size(); i++) {

				JSONObject user = (JSONObject) jsonObject.get("u" + i);

				String account = (String) user.get("account");
				if (userName.equals(account)) {
					result = "u" + i;
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
		String link = PackageDatabase.relativePath() + "\\user.json";
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

	/** Phương thức kiểm tra mật khẩu nhập vào có tồn tại hay không? **/
	public boolean checkExistPassword(String passwordInput) {
		JSONParser parser = new JSONParser();
		String link = PackageDatabase.relativePath() + "\\user.json";
		try (Reader reader = new FileReader(link)) {
			JSONObject jsonObject = (JSONObject) parser.parse(reader);
			for (int i = 0; i < jsonObject.size(); i++) {

				JSONObject user = (JSONObject) jsonObject.get("u" + i);

				String password = (String) user.get("password");
//				System.out.println(password);
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
	/** Phương thức getListUsers cho API **/
	public JSONArray getListUsers() {
		JSONParser parser = new JSONParser();
		JSONArray arrObj0 = new JSONArray();
		String link = relativePath() + "\\user.json";
		try (Reader reader = new FileReader(link)) {
			JSONObject jsonObject = (JSONObject) parser.parse(reader);
			for (int i = 0; i < jsonObject.size(); i++) {
				JSONObject user = (JSONObject) jsonObject.get("u" + i);
				String id = (String) user.get("id");
				String account = (String) user.get("account");
				String password = (String) user.get("password");
				String fullName = (String) user.get("fullName");
				String phoneNumber = (String) user.get("phoneNumber");
				String address = (String) user.get("address");
				String role = (String) user.get("role");

				User user0 = new User();
				user0.setId(id);
				user0.setAccount(account);
				user0.setPassword(password);
				user0.setFullName(fullName);
				user0.setPhoneNumber(phoneNumber);
				user0.setAddress(address);
				user0.setRole(role);

				arrObj0.add(user0);
//				}

			}

		} catch (IOException e) {
			e.printStackTrace();
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return arrObj0;
	}
}