package com.adressPackage;

import java.util.StringJoiner;
import java.util.StringTokenizer;

import org.json.simple.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.connection.JsonResponse;
import com.database.PackageDatabase;

@Controller
public class AddressPackageController {
	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(path = "/address", method = RequestMethod.GET)
	@ResponseBody
	public JsonResponse connectpath(@RequestParam(value = "packageID") String packageID) {
		JsonResponse res = new JsonResponse();
		String address = getAddressPackage(packageID);
		if (address != null) {
			res.setResult("SUCCESS");
			res.setResponse(address);
		} else
			res.setResult("FAIL");
		return res;
	}

	private String getAddressPackage(String packageID) {
		JSONObject packageJSObj = new PackageDatabase().getPackage(packageID);
		if (packageJSObj == null)
			return null;

		String addressOrigin = (String) packageJSObj.get("addressDelivery");
		StringJoiner addressReturn = new StringJoiner("+");

		StringTokenizer splitProp = new StringTokenizer(addressOrigin, ",");

		String provincial = splitProp.nextToken();
		String district = splitProp.nextToken();
		String ward = splitProp.nextToken();
		String detail = splitProp.nextToken();

		String temp = new String(detail + "," + ward + "," + district + "," + provincial);

		StringTokenizer format = new StringTokenizer(temp, " ");

		while (format.hasMoreTokens()) {
			addressReturn.add(format.nextToken());
		}

		return addressReturn.toString();
	}
}
