package com.adminpackage;

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
import com.database.PackageDatabase;
import com.database.UserDatabase;
import com.packagelistcontroller.PackageList;

@Controller
public class AdminPackageListController {
	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(path = "/adminpackagelist", method = RequestMethod.GET)
	@ResponseBody
	public JsonResponse getPackageList(@RequestParam(value = "userID") String userID) {
		JsonResponse res = new JsonResponse();
		UserDatabase user= new UserDatabase();
		String fullName=(String) new UserDatabase().getUser(userID).get("fullName");
		String[]name=fullName.split(" ");
		res.setResult(name[name.length-1]);
		List<AdminPackageList> list = loadData();
		res.setResponse(list);
		return res;
	}

	public List<AdminPackageList> loadData() {
		List<AdminPackageList> result = new ArrayList<AdminPackageList>();
		JSONArray jsonPackage = new com.database.PackageDatabase().getListPackages();
		
		for (int i = 0; i < jsonPackage.size(); i++) {
			AdminPackageList packageList = new AdminPackageList();
			Package packageDB = (Package) jsonPackage.get(i);
			
			packageList.setPackageID(packageDB.getId());
			
			if(!packageDB.getIdUser().equals("")) {
				JSONObject jsonUser = new UserDatabase().getUser(packageDB.getIdUser());
				packageList.setUserName((String) jsonUser.get("fullName"));
				packageList.setUserID(packageDB.getIdUser());
			}else {
				packageList.setUserName("Not Recived");
				packageList.setUserID("Not Recive");
			}
			
			
			packageList.setStatus(packageDB.getStatus());
			JSONObject jsonCustomer = new CustomerDatabase().getCustomer(packageDB.getIdCustomer());
			packageList.setCustomerName((String) jsonCustomer.get("fullName"));
			packageList.setCustomerPhone((String) jsonCustomer.get("phoneNumber"));

			result.add(packageList);

		}

		return result;
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(path = "/requesremovelist", method = RequestMethod.GET)
	@ResponseBody
	public JsonResponse requesRemoveList() {
		JsonResponse res = new JsonResponse();
		res.setResponse(getRequestRemove());
		res.setResult("SUCCESS");
		return res;
	}
	public List<AdminPackageList> getRequestRemove() {
		List<AdminPackageList> result = new ArrayList<AdminPackageList>();
		JSONArray jsonPackage = new PackageDatabase().requestRemoveList();
		
		for (int i = 0; i < jsonPackage.size(); i++) {
			AdminPackageList packageList = new AdminPackageList();
			Package packageDB = (Package) jsonPackage.get(i);
			
			packageList.setPackageID(packageDB.getId());
			
			
			JSONObject jsonUser = new UserDatabase().getUser(packageDB.getIdUser());
			packageList.setUserName((String) jsonUser.get("fullName"));
			packageList.setUserID(packageDB.getIdUser());
			
			packageList.setStatus(packageDB.getStatus());
			JSONObject jsonCustomer = new CustomerDatabase().getCustomer(packageDB.getIdCustomer());
			packageList.setCustomerName((String) jsonCustomer.get("fullName"));
			packageList.setCustomerPhone((String) jsonCustomer.get("phoneNumber"));

			result.add(packageList);

		}

		return result;
	}
	
}
