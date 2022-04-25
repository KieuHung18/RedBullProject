package com.packageList;

import org.json.simple.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.connection.JsonResponse;
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
		Package pck = getPackage(packageID);
		if (pck != null) {
			res.setResponse(pck);
			res.setResult("SUCCESS");
		} else
			res.setResult("FAIL");

		return res;
	}

	public Package getPackage(String packageID) {
		Package pck = new Package();
		JSONObject packageJSObj = new PackageDatabase().getPackage(packageID);

		String address = (String) packageJSObj.get("addressDelivery");

		JSONObject deliveryDate = (JSONObject) packageJSObj.get("dayDelivery");
		long dayDe = (long) deliveryDate.get("day");
		long monthDe = (long) deliveryDate.get("month");
		long yearDe = (long) deliveryDate.get("year");
		Date DateDe = new Date((int) dayDe, (int) monthDe, (int) yearDe);

		JSONObject receiveDate = (JSONObject) packageJSObj.get("dayReceive");
		long dayRe = (long) receiveDate.get("day");
		long monthRe = (long) receiveDate.get("month");
		long yearRe = (long) receiveDate.get("year");
		Date DateRe = new Date((int) dayRe, (int) monthRe, (int) yearRe);

		Long price = (long) packageJSObj.get("cost");
		boolean status = (boolean) packageJSObj.get("status");

		String customerID = (String) packageJSObj.get("idCustomer");
		JSONObject customer = (JSONObject) new CustomerDatabase().getCustomer(customerID);
		String customerName = (String) customer.get("fullName");
		String customerPhone = (String) customer.get("phoneNumber");

		pck.setAddress(address);
		pck.setDeliveryDate(DateDe.toString());
		pck.setReceiveDate(DateRe.toString());
		pck.setPrice(price.intValue());
		pck.setStatus(status);
		pck.setCustomerName(customerName);
		pck.setCustomerPhone(customerPhone);

		return pck;
	}
}
