package com.packageList;

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
import com.database.PackageDatabase;

@Controller
public class PackageController {
	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(path = "/package", method = RequestMethod.GET)
	@ResponseBody
	public JsonResponse connectpath(@RequestParam(value = "packageID") String packageID) {
		JsonResponse res = new JsonResponse();
		if (getPackage(packageID) != null) {
			res.setResult("SUCCESS");
			res.setResponse(getPackage(packageID));
		} else {
			res.setResult("FAIL");
		}
		return res;
	}

	public Package getPackage(String packageID) {
		Package result = new Package();
		JSONObject jsonPackage = new com.database.PackageDatabase().getPackage(packageID);
		if (jsonPackage == null) {
			return null;
		} else {
			result.setAddress((String) jsonPackage.get("addressDelivery"));
			result.setUserID((String) jsonPackage.get("idUser"));
			
			com.database.Date dateD = new Date();
			JSONObject jsonDateD = (JSONObject) jsonPackage.get("dayDelivery");
			Long day = (long) jsonDateD.get("day");
			dateD.setDay(day.intValue());
			Long month = (long) jsonDateD.get("month");
			dateD.setMonth(month.intValue());
			Long year = (long) jsonDateD.get("year");
			dateD.setYear(year.intValue());
			result.setDeliveryDate(dateD.toString());

			com.database.Date dateR = new Date();
			JSONObject jsonDateR = (JSONObject) jsonPackage.get("dayReceive");
			Long dayR = (long) jsonDateR.get("day");
			dateR.setDay(dayR.intValue());
			Long monthR = (long) jsonDateR.get("month");
			dateR.setMonth(monthR.intValue());
			Long yearR = (long) jsonDateR.get("year");
			dateR.setYear(yearR.intValue());
			result.setReceiveDate(dateR.toString());

			Long cost = (long) jsonPackage.get("cost");
			result.setPrice(cost.intValue());

			String status = (String) jsonPackage.get("status");
			result.setStatus(status);

			String customerID = (String) jsonPackage.get("idCustomer");
			
			JSONObject jsonCustomer = new CustomerDatabase().getCustomer(customerID);
			result.setCustomerID(customerID);
			result.setCustomerName((String) jsonCustomer.get("fullName"));
			result.setCustomerPhone((String) jsonCustomer.get("phoneNumber"));
			return result;
		}

// 		Package pck = new Package();
// 		JSONObject packageJSObj = new PackageDatabase().getPackage(packageID);

// 		String address = (String) packageJSObj.get("addressDelivery");

// 		JSONObject deliveryDate = (JSONObject) packageJSObj.get("dayDelivery");
// 		long dayDe = (long) deliveryDate.get("day");
// 		long monthDe = (long) deliveryDate.get("month");
// 		long yearDe = (long) deliveryDate.get("year");
// 		Date DateDe = new Date((int) dayDe, (int) monthDe, (int) yearDe);

// 		JSONObject receiveDate = (JSONObject) packageJSObj.get("dayReceive");
// 		long dayRe = (long) receiveDate.get("day");
// 		long monthRe = (long) receiveDate.get("month");
// 		long yearRe = (long) receiveDate.get("year");
// 		Date DateRe = new Date((int) dayRe, (int) monthRe, (int) yearRe);

// 		Long price = (long) packageJSObj.get("cost");
// 		boolean status = (boolean) packageJSObj.get("status");

// 		String customerID = (String) packageJSObj.get("idCustomer");
// 		JSONObject customer = (JSONObject) new CustomerDatabase().getCustomer(customerID);
// 		String customerName = (String) customer.get("fullName");
// 		String customerPhone = (String) customer.get("phoneNumber");

// 		pck.setAddress(address);
// 		pck.setDeliveryDate(DateDe.toString());
// 		pck.setReceiveDate(DateRe.toString());
// 		pck.setPrice(price.intValue());
// 		pck.setStatus(status);
// 		pck.setCustomerName(customerName);
// 		pck.setCustomerPhone(customerPhone);

// 		return pck;

	}
public static void main(String[] args) {
	System.out.println(new PackageController().getPackage("p2"));
}
}
