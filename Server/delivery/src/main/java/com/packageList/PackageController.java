package com.packageList;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.connection.JsonResponse;
import com.database.Date;

@Controller
public class PackageController {
	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(path = "/package", method = RequestMethod.GET)
	@ResponseBody
	public JsonResponse connectpath(@RequestParam(value = "packageID") String packageID) {
		JsonResponse res = new JsonResponse();
		res.setResponse(getPackage(packageID));
		res.setResult("SUCCESS");
		return res;
	}
	public Package getPackage(String packageID) {
		Package result=new Package("adress",new Date(0, 0, 0).toString(),new Date(0, 0, 0).toString(),23000,false,"cusname","cusnum");
		return result;
	}
}
