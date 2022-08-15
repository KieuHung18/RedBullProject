package com.addpackage;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.connection.JsonResponse;
import com.database.PackageDatabase;
@RestController
public class AddPackageController {
	@RequestMapping(path="/addpackage",method = RequestMethod.POST)
	@ResponseBody
	public JsonResponse addpackage(@RequestParam(value = "customerID") String customerID,
							@RequestParam(value = "address") String address,
							@RequestParam(value = "price") int price) {
		JsonResponse response=new JsonResponse();
		response.setResult("SUCCESS");
		return response;
	}
	@RequestMapping(path="/editpackage",method = RequestMethod.POST)
	public void editpackage(@RequestParam(value = "customerID") String customerID,
							@RequestParam(value = "address") String address,
							@RequestParam(value = "price") int price,
							@RequestParam(value = "userID") String userID,
							@RequestParam(value = "packageID") String packageID) {
		System.out.println(address);
		System.out.println(packageID);
		System.out.println(userID);
		System.out.println(customerID);
		System.out.println(price);
		new PackageDatabase().editPackage(address, price, customerID, userID, packageID);
	}
}
