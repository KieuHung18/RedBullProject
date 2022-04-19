package com.user;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.connection.JsonResponse;
public class UserController {
	@CrossOrigin(origins="http://localhost:3000")
	@RequestMapping(value = "/connect",method=RequestMethod.POST)
	@ResponseBody
	public JsonResponse connect(@RequestParam(value ="clientData")String data) {
		System.out.println(data);
		JsonResponse res=new JsonResponse();
		res.setRespone("SUCCESS");
		res.setResult("conect");
		return res;
	}
	
	@CrossOrigin(origins="http://localhost:3000")
	@RequestMapping(path = "/init",method=RequestMethod.POST)
	@ResponseBody
	public JsonResponse connectpath(@RequestParam(value ="clientData")String data) {
		System.out.println(data);
		JsonResponse res=new JsonResponse();
		res.setRespone("SUCCESS");
		res.setResult("conect");
		return res;
	}
}
