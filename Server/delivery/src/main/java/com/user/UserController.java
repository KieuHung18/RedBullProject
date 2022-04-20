package com.user;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.connection.JsonResponse;

@Controller
public class UserController {
	
	@CrossOrigin(origins="http://localhost:3000")
	@RequestMapping(path = "/user",method=RequestMethod.GET)
	@ResponseBody
	public JsonResponse connectpath(@RequestParam(value ="userID")String userID) {
		System.out.println(userID);
		JsonResponse res=new JsonResponse();
		res.setResponse(getUser(userID));
		res.setResult("SUCCESS");
		return res;
	}
	public User getUser(String userID) {
		User result = new User("asd", "asdsad", "asd", "asd", "asd");
		
		return result;
		
	}
}
