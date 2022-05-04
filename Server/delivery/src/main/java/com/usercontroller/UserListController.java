package com.usercontroller;

import java.util.ArrayList;
import java.util.List;

import org.json.simple.JSONArray;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.connection.JsonResponse;
import com.database.Customer;
import com.database.CustomerDatabase;
import com.database.User;

@Controller
public class UserListController {
	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(path = "/userlist", method = RequestMethod.GET)
	@ResponseBody
	public JsonResponse getListUsers(@RequestParam(value = "userID") String userID) {
		JsonResponse res = new JsonResponse();
		String fullName = (String) new CustomerDatabase().getCustomer(userID).get("fullName");
		String[] name = fullName.split(" ");
		res.setResult(name[name.length - 1]);
		List<User> list = loadData();
		res.setResponse(list);
		return res;
	}

	public List<User> loadData() {
		List<User> result = new ArrayList<User>();
		JSONArray jsonUser = new com.database.UserDatabase().getListUsers();

		for (int i = 0; i < jsonUser.size(); i++) {
			User userDB = (User) jsonUser.get(i);
			result.add(userDB);

		}

		return result;
	}

}