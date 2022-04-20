package com.packagelistcontroller;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.connection.JsonResponse;
import com.database.Customer;
import com.database.CustomerDatabase;
import com.database.Date;
import com.database.Package;

@Controller
public class PackageListController {
	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(path = "/packagelist", method = RequestMethod.GET)
	@ResponseBody
	public JsonResponse getPackageList() {
		JsonResponse res = new JsonResponse();
		res.setResult("SUCCESS");
		res.setResponse(loadData());
		return res;
	}

	public List<PackageList> loadData() {
		List<PackageList> result = new ArrayList<PackageList>();
		JSONArray jsonPackage = new com.database.PackageDatabase().getListPackages();

		for (int i = 0; i < jsonPackage.size(); i++) {
			PackageList packageList = new PackageList();
			Package packageDB = (Package) jsonPackage.get(i);

			packageList.setUserID(packageDB.getIdUser());
			packageList.setPackageID(packageDB.getId());
			packageList.setAddress(packageDB.getAddressDelivery());
			packageList.setPrice(packageDB.getCost());
			packageList.setStatus(packageDB.getStatus());
			packageList.setCustomerID(packageDB.getIdCustomer());

			JSONObject jsonCustomer = new CustomerDatabase().getCustomer(packageList.getCustomerID());
			packageList.setCustomerName((String) jsonCustomer.get("fullName"));
			packageList.setCustomerPhone((String) jsonCustomer.get("phoneNumber"));

			result.add(packageList);

		}

		return result;
	}

	public static void main(String[] args) {
		System.out.println(new PackageListController().loadData());
	}
}
