package com.connection;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
public class ConnectionController {
	@CrossOrigin(origins="http://localhost:3000")
	@RequestMapping(path = "/user",method=RequestMethod.POST)
	@ResponseBody
	public JsonResponse connectpath(@RequestParam(value ="id")String data) {
		System.out.println("Search database id"+data);
		JsonResponse res=new JsonResponse();
		res.setRespone("user");
		res.setResult("SUCCESS");
		return res;
	}
}
