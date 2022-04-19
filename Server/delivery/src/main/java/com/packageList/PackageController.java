package com.packageList;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.connection.JsonResponse;

@Controller
public class PackageController {
	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(path = "/init", method = RequestMethod.POST)
	@ResponseBody
	public JsonResponse connectpath(@RequestParam(value = "clientData") String data) {
		System.out.println(data);
		JsonResponse res = new JsonResponse();
		res.setRespone("SUCCESS");
		res.setResult("conect");
		return res;
	}
}
