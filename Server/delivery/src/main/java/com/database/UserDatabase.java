package com.database;

import java.io.FileReader;
import java.io.IOException;
import java.io.Reader;
import java.util.ArrayList;
import java.util.HashMap;

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
	public HashMap getMapUser() {
		JSONParser parser = new JSONParser();
		HashMap<String, Integer> result  = new HashMap<String, Integer>();
		String link = PackageDatabase.relativePath()+"\\user.json";
		try (Reader reader = new FileReader(link)) {
			JSONObject jsonObject = (JSONObject) parser.parse(reader);
			for (int i = 0; i < jsonObject.size(); i++) {
				JSONObject user = (JSONObject) jsonObject.get("u" + i);
				if(!checkDeleted("u"+i)&&user.get("role").equals("ROLE_USER")) {
					result.put("u"+i, 0);
				}
			}
		} catch (IOException e) {
			e.printStackTrace();
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return result;
	}
	public boolean checkDeleted(String userID) {
		JSONParser parser = new JSONParser();
		String link = PackageDatabase.relativePath()+"\\deleteduser.json";
		try (Reader reader = new FileReader(link)) {
			JSONObject jsonObject = (JSONObject) parser.parse(reader);
			if(jsonObject.get(userID)!=null) {return true;};
		} catch (IOException e) {
			e.printStackTrace();
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return false;
	}
	
	public String getUserRole(String userName) {
		JSONParser parser = new JSONParser();
		String result  = null;
		String link = PackageDatabase.relativePath()+"\\user.json";
		try (Reader reader = new FileReader(link)) {
			JSONObject jsonObject = (JSONObject) parser.parse(reader);
			for (int i = 0; i < jsonObject.size(); i++) {

				JSONObject user = (JSONObject) jsonObject.get("u" + i);

				String account = (String) user.get("account");
				
				if (userName.equals(account)) {
					result= (String) user.get("role");
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

	/** Phương thức kiểm tra số điện thoại nhập vào có tồn tại hay không? **/
	public boolean checkExistPhone(String phoneInput) {
		JSONParser parser = new JSONParser();
		ArrayList<String> list = new ArrayList<String>();
		String link = PackageDatabase.relativePath()+"\\user.json";
		try (Reader reader = new FileReader(link)) {
			JSONObject jsonObject = (JSONObject) parser.parse(reader);
			for (int i = 0; i < jsonObject.size(); i++) {
				if(checkDeleted("u" + i)) {return false;}
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
		String link = PackageDatabase.relativePath() + "\\user.json";
		try (Reader reader = new FileReader(link)) {
			JSONObject jsonObject = (JSONObject) parser.parse(reader);
			for (int i = 0; i < jsonObject.size(); i++) {
				if(checkDeleted("u" + i)) {return false;}
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

// <<<<<<< quyet2
// 	/** Phương thức lấy ra danh sách người giao hàng (JSONObject) bao gồm tất cả hông tin **/
// 	public JSONObject getUserList() {
// 		JSONParser parser = new JSONParser();
// 		JSONObject list = null;
		
// 		String link = PackageDatabase.relativePath()+"\\user.json";
// 		try (Reader reader = new FileReader(link)) {
// 			list = (JSONObject) parser.parse(reader);
// =======
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
	/** Phương thức getListUsers cho API **/
	public JSONArray getListUsers() {
		JSONParser parser = new JSONParser();
		JSONArray arrObj0 = new JSONArray();
		String link = PackageDatabase.relativePath() + "\\user.json";
		try (Reader reader = new FileReader(link)) {
			JSONObject jsonObject = (JSONObject) parser.parse(reader);
			for (int i = 0; i < jsonObject.size(); i++) {
				if(!checkDeleted("u" + i)) {
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
				}
//				}

			}

// >>>>>>> main
		} catch (IOException e) {
			e.printStackTrace();
		} catch (ParseException e) {
			e.printStackTrace();
		}
// <<<<<<< quyet2
// 		return list;
// =======
		return arrObj0;
// >>>>>>> main
	}
}