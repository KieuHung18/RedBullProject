package com.login;


import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.connection.JsonResponse;
import com.database.UserDatabase;


@Controller
public class LoginController {
	
	@RequestMapping(path="/protecteduser",method = RequestMethod.GET)
	public void user() {
		System.out.println("user");
	}
	@RequestMapping(path="/protectedadmin",method = RequestMethod.GET)
	public void admin() {
		System.out.println("admin");
	}
	
	@RequestMapping(path="/denied",method = RequestMethod.GET)
	@ResponseBody
	public JsonResponse denied() {
		JsonResponse res =new JsonResponse();
		res.setResult("FAIL");
		res.setResponse("FAIL");
		System.out.println("denied");
		return res;
	}
	
	@RequestMapping(path="/authorize",method = RequestMethod.GET)
	@ResponseBody
	public JsonResponse authorize(HttpServletRequest request) {
		String account = (String) request.getSession(false).getAttribute("account");
		request.getSession(false).removeAttribute("account");
		
		JsonResponse res =new JsonResponse();
		res.setResult("SUCCESS");
		res.setResponse(provideAuthorize(account));
		System.out.println("login");
		return res;
	}
	public Authorize provideAuthorize(String account) {
		UserDatabase database =new  UserDatabase();
		String UID=database.getUserID(account);
		String UR=database.getUserRole(account);
		return new Authorize(UID, UR);
	}
}
