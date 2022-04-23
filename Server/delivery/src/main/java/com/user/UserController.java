package com.user;

import java.util.Iterator;
import java.util.StringTokenizer;

import org.json.simple.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.connection.JsonResponse;

@Controller
public class UserController {

	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(path = "/user", method = RequestMethod.GET)
	@ResponseBody
	public JsonResponse connectpath(@RequestParam(value = "userID") String userID) {
		System.out.println(userID);
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

}
