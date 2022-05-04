package com.user;

import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.Reader;
import java.util.ArrayList;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.connection.JsonResponse;
import com.database.Package;
import com.database.PackageDatabase;
import com.database.UserDatabase;

@Controller
public class UserController {

	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(path = "/user", method = RequestMethod.GET)
	@ResponseBody
	public JsonResponse connectpath(@RequestParam(value = "userID") String userID) {
		JsonResponse res = new JsonResponse();

		if (getUser(userID) != null) {
			res.setResult("SUCCESS");
			res.setResponse(getUser(userID));
		} else {
			res.setResult("FAIL");
		}
		return res;
	}

	public User getUser(String userID) {
		User result = new User();
		JSONObject jsonPackage = new com.database.UserDatabase().getUser(userID);
		if (jsonPackage == null) {
			return null;
		} else {
			String fullName = (String) jsonPackage.get("fullName");
			String[] tmp = fullName.split(" ");
			int count = tmp.length;
			String firstName = "";
			String lastName = tmp[count - 1];
			for (int i = 0; i < tmp.length - 1; i++) {
				firstName += tmp[i] + " ";
			}
			result.setFirstName(firstName);
			result.setLastName(lastName);
			result.setPhoneNumber((String) jsonPackage.get("phoneNumber"));
			result.setAddress((String) jsonPackage.get("address"));
			result.setUserName((String) jsonPackage.get("account"));

		}
		return result;
	}

	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(path = "/addUser", method = RequestMethod.GET)
	@ResponseBody
	public JsonResponse addUser(@RequestParam(value = "account") String account,
			@RequestParam(value = "password") String password, @RequestParam(value = "name") String name,
			@RequestParam(value = "phone") String phone, @RequestParam(value = "address") String address) {
		JsonResponse res = new JsonResponse();

		UserDatabase userDB = new UserDatabase();
		JSONObject userList = userDB.getUserList();

		if (userDB.checkExistAccount(account)) {
			res.setResult("FAIL");
			res.setResponse("ACCOUNT");
			return res;
		}
		if (userDB.checkExistPhone(phone)) {
			res.setResult("FAIL");
			res.setResponse("PHONE");
			return res;
		}

		String id = new String("u" + userList.size());

		JSONObject userJSObj = new JSONObject();
		userJSObj.put("id", id);
		userJSObj.put("account", account);
		userJSObj.put("password", password);
		userJSObj.put("fullName", name);
		userJSObj.put("phoneNumber", phone);
		userJSObj.put("address", address);

		userList.put(id, userJSObj);

		String link = PackageDatabase.relativePath() + "\\user.json";
		try (FileWriter writer = new FileWriter(link)) {
			writer.write(userList.toJSONString());
			writer.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
		res.setResult("SUCCESS");
		return res;
	}

	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(path = "/editUser", method = RequestMethod.GET)
	@ResponseBody
	public JsonResponse editUser(@RequestParam(value = "id") String id, @RequestParam(value = "account") String account,
			@RequestParam(value = "password") String password, @RequestParam(value = "name") String name,
			@RequestParam(value = "phone") String phone, @RequestParam(value = "address") String address) {
		JsonResponse res = new JsonResponse();

		UserDatabase userDB = new UserDatabase();
		JSONObject userList = userDB.getUserList();

		if (userDB.checkExistAccount(account)) {
			res.setResult("FAIL");
			res.setResponse("ACCOUNT");
			return res;
		}
		if (userDB.checkExistPhone(phone)) {
			res.setResult("FAIL");
			res.setResponse("PHONE");
			return res;
		}

		JSONObject userJSObj = new JSONObject();
		userJSObj.put("id", id);
		userJSObj.put("account", account);
		userJSObj.put("password", password);
		userJSObj.put("fullName", name);
		userJSObj.put("phoneNumber", phone);
		userJSObj.put("address", address);

		userList.replace(id, userJSObj);

		String link = PackageDatabase.relativePath() + "\\user.json";
		try (FileWriter writer = new FileWriter(link)) {
			writer.write(userList.toJSONString());
			writer.close();
		} catch (Exception e) {
			e.printStackTrace();
		}

		res.setResult("SUCCESS");
		return res;
	}

	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(path = "/deleteUser", method = RequestMethod.GET)
	@ResponseBody
	public JsonResponse deleteUser(@RequestParam(value = "id") String id) {
		JsonResponse res = new JsonResponse();

		JSONParser parser = new JSONParser();
		JSONObject userDeletedList = new JSONObject();
		JSONObject userDeleted = new JSONObject();
		
		String link = PackageDatabase.relativePath()+"\\deleteduser.json";
		try (Reader reader = new FileReader(link)) {
			userDeletedList = (JSONObject) parser.parse(reader);
		} catch (IOException e) {
			e.printStackTrace();
		} catch (ParseException e) {
			e.printStackTrace();
		}
		userDeleted.put("id", id);
		userDeletedList.put(id, userDeleted);

		try (FileWriter writer = new FileWriter(link)) {
			writer.write(userDeletedList.toJSONString());
			writer.close();
		} catch (Exception e) {
			e.printStackTrace();
		}

		PackageDatabase packageDB = new PackageDatabase();
		ArrayList<Package> pckListTransfered = packageDB.getListPackages(id);

		res.setResult("SUCCESS");
		res.setResponse(pckListTransfered);

		return res;
	}

	public static void main(String[] args) {
//		UserController uc = new UserController();
//		System.out.println(uc.addUser("acc", "pass", "Nguyen Van Quyet", "0971619485", "thu duc"));
//		System.out.println(uc.editUser("u3", "ngvanquyet2000", "5655", "Nguyen Van Quyet", "0971619480", "BD"));
//		System.out.println(uc.deleteUser("u3"));
	}

}
