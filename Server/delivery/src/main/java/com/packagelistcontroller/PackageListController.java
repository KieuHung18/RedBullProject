package com.packagelistcontroller;

import java.util.ArrayList;
import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.connection.JsonResponse;
import com.database.Customer;
import com.database.CustomerDatabase;
import com.database.Date;
import com.database.Package;
import com.database.UserDatabase;

@Controller
public class PackageListController {
	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(path = "/packagelist", method = RequestMethod.GET)
	@ResponseBody
	public JsonResponse getPackageList(@RequestParam(value = "userID") String userID) {
		JsonResponse res = new JsonResponse();
		UserDatabase user = new UserDatabase();
		String fullName = (String) new UserDatabase().getUser(userID).get("fullName");
		String[] name = fullName.split(" ");
		res.setResult(name[name.length - 1]);
		List<PackageList> list = loadData(userID);
		res.setResponse(list);
		return res;
	}

	public List<PackageList> loadData(String userID) {
		List<PackageList> result = new ArrayList<PackageList>();
		JSONArray jsonPackage = new com.database.PackageDatabase().getListPackages(userID);

		for (int i = 0; i < jsonPackage.size(); i++) {
			PackageList packageList = new PackageList();
			Package packageDB = (Package) jsonPackage.get(i);

			packageList.setPackageID(packageDB.getId());
			packageList.setAddress(packageDB.getAddressDelivery());
			packageList.setPrice(packageDB.getCost());
			packageList.setStatus(packageDB.getStatus());
			JSONObject jsonCustomer = new CustomerDatabase().getCustomer(packageDB.getIdCustomer());

			packageList.setCustomerName((String) jsonCustomer.get("fullName"));
			packageList.setCustomerPhone((String) jsonCustomer.get("phoneNumber"));

			result.add(packageList);

		}

		return result;
	}
}
