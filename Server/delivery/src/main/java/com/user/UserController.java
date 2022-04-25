package com.user;

import java.util.StringTokenizer;

import org.json.simple.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.connection.JsonResponse;
import com.database.UserDatabase;

@Controller
public class UserController {

	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(path = "/user", method = RequestMethod.GET)
	@ResponseBody
	public JsonResponse connectpath(@RequestParam(value = "userID") String userID) {
		JsonResponse res = new JsonResponse();
		User user = getUser(userID);
		if (user != null) {
			res.setResponse(user);
			res.setResult("SUCCESS");
		} else {
			res.setResult("FAIL");
		}
		return res;
	}

	public User getUser(String userID) {
		User user = new User();
		JSONObject userJSObj = new UserDatabase().getUser(userID);

		String fullName = (String) userJSObj.get("fullName");
		String phoneNumber = (String) userJSObj.get("phoneNumber");
		String address = (String) userJSObj.get("address");
		String account = (String) userJSObj.get("account");

		StringTokenizer st;
		String firstName = "";
		String lastName = "";

		st = new StringTokenizer(fullName);
		while (st.hasMoreTokens()) {
			firstName = st.nextToken();
		}

		st = new StringTokenizer(fullName);
		for (int i = 0; i < st.countTokens(); i++) {
			lastName += st.nextToken() + " ";
		}

		user.setFirstName(firstName);
		user.setLastName(lastName);
		user.setPhoneNumber(phoneNumber);
		user.setAddress(address);
		user.setUserName(account);

		return user;
	}
}
