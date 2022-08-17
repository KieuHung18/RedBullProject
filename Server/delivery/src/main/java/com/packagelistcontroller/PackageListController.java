package com.packagelistcontroller;

import java.sql.Date;
import java.util.ArrayList;
import java.util.Calendar;
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
import com.database.CustomerDatabase;
import com.database.Package;
import com.database.PackageDatabase;
import com.database.UserDatabase;

@Controller
public class PackageListController {
	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(path = "/packagelist", method = RequestMethod.GET)
	@ResponseBody
	public JsonResponse getPackageList(@RequestParam(value = "userID") String userID) {
		JsonResponse res = new JsonResponse();
		String fullName = (String) new UserDatabase().getUser(userID).get("fullName");
		String[] name = fullName.split(" ");
		res.setResult(name[name.length - 1]);
		List<PackageList> list = loadData(userID);
		res.setResponse(list);
		return res;
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(path = "/deliveredpackages", method = RequestMethod.GET)
	@ResponseBody
	public JsonResponse getDeleveredPackages(@RequestParam(value = "userID") String userID,@RequestParam(value = "date") Date date) {
		JsonResponse res = new JsonResponse();
		res.setResult("SUCCESS");
		List<PackageList> result = new ArrayList<PackageList>();
		JSONArray jsonPackage = new com.database.PackageDatabase().getListPackages(userID);
		int total=0;
		for (int i = 0; i < jsonPackage.size(); i++) {
			Package packageDB = (Package) jsonPackage.get(i);
			if(packageDB.getStatus().equals("delivered")&&compare(packageDB.getDayDelivery(), date)) {
				PackageList packageList = new PackageList();
				packageList.setPackageID(packageDB.getId());
				packageList.setAddress(packageDB.getAddressDelivery());
				packageList.setPrice(packageDB.getCost());
				packageList.setStatus(packageDB.getStatus());
				JSONObject jsonCustomer = new CustomerDatabase().getCustomer(packageDB.getIdCustomer());

				packageList.setCustomerName((String) jsonCustomer.get("fullName"));
				packageList.setCustomerPhone((String) jsonCustomer.get("phoneNumber"));
				total+=10000;
				result.add(packageList);
			}
		}
		res.setResponse(result);
		res.setResult(String.valueOf(total));
		return res;
	}
	private boolean compare(com.database.Date d1,Date d2) {
		String[]arr=String.valueOf(d2).split("-");
		boolean d= d1.getDay()==Integer.parseInt(arr[2]);
		boolean m=d1.getMonth()==Integer.parseInt(arr[1]);
		boolean y=d1.getYear()==Integer.parseInt(arr[0]);
		if(d&&m&&y) {return true;}
		return false;
		
	}
	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(path = "/unassignpackages", method = RequestMethod.GET)
	@ResponseBody
	public JsonResponse getUnassignPackages(@RequestParam(value = "userID") String userID) {
		JsonResponse res = new JsonResponse();
		List<PackageList> result = new ArrayList<PackageList>();
		JSONArray jsonPackage = new PackageDatabase().getUnassignPakages();
		for (int i = 0; i < jsonPackage.size(); i++) {
			Package packageDB = (Package) jsonPackage.get(i);
			PackageList packageList = new PackageList();
			packageList.setPackageID(packageDB.getId());
			packageList.setAddress(packageDB.getAddressDelivery());
			packageList.setPrice(packageDB.getCost());
			packageList.setStatus(packageDB.getStatus());
			JSONObject jsonCustomer = new CustomerDatabase().getCustomer(packageDB.getIdCustomer());

			packageList.setCustomerName((String) jsonCustomer.get("fullName"));
			packageList.setCustomerPhone((String) jsonCustomer.get("phoneNumber"));

			result.add(packageList);
		}
		res.setResponse(result);
		return res;
	}
	
	
	public List<PackageList> loadData(String userID) {
		List<PackageList> result = new ArrayList<PackageList>();
		JSONArray jsonPackage = new com.database.PackageDatabase().getListPackages(userID);

		for (int i = 0; i < jsonPackage.size(); i++) {
			Package packageDB = (Package) jsonPackage.get(i);
			if(packageDB.getStatus().equals("pending")) {
				PackageList packageList = new PackageList();
				packageList.setPackageID(packageDB.getId());
				packageList.setAddress(packageDB.getAddressDelivery());
				packageList.setPrice(packageDB.getCost());
				packageList.setStatus(packageDB.getStatus());
				JSONObject jsonCustomer = new CustomerDatabase().getCustomer(packageDB.getIdCustomer());

				packageList.setCustomerName((String) jsonCustomer.get("fullName"));
				packageList.setCustomerPhone((String) jsonCustomer.get("phoneNumber"));

				result.add(packageList);
			}
		}

		return result;
	}

	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(path = "/asignpackage", method = RequestMethod.GET)
	@ResponseBody
	public JsonResponse asignPackage(@RequestParam(value = "userID") String userID,
			@RequestParam(value = "packageID") String packageID) {
		JsonResponse res = new JsonResponse();
		PackageDatabase database = new PackageDatabase();
		if(database.asignPackage(userID, packageID)) {
			res.setResult("SUCCESS");
		}else {
			res.setResult("FAIL");
		}
		
		return res;
	}

	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(path = "/requestremove", method = RequestMethod.GET)
	@ResponseBody
	public JsonResponse requestRemove(
			@RequestParam(value = "packageID") String packageID) {
		JsonResponse res = new JsonResponse();
		
		PackageDatabase database = new PackageDatabase();
		database.requestRemove(packageID);
		res.setResult("SUCCESS");
		return res;
	}
	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(path = "/undorequest", method = RequestMethod.GET)
	@ResponseBody
	public JsonResponse undorequest(
			@RequestParam(value = "packageID") String packageID) {
		JsonResponse res = new JsonResponse();
		PackageDatabase database = new PackageDatabase();
		database.undoRequest(packageID);
		res.setResult("SUCCESS");
		return res;
	}

	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(path = "/deassignpackage", method = RequestMethod.GET)
	@ResponseBody
	public JsonResponse deasignPackage(
			@RequestParam(value = "packageID") String packageID) {
		JsonResponse res = new JsonResponse();
		PackageDatabase database = new PackageDatabase();
		database.deassignPackage(packageID);
		res.setResult("SUCCESS");
		return res;
	}

}
