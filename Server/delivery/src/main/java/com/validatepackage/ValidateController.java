package com.validatepackage;

import java.io.IOException;
import java.time.LocalDate;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.connection.JsonResponse;
import com.database.PackageDatabase;

@Controller
public class ValidateController {
	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(path = "/validate", method = RequestMethod.GET)
	@ResponseBody
	public JsonResponse connectpath(@RequestParam(value = "packageID") String packageID) {
		JsonResponse res = new JsonResponse();
		com.database.PackageDatabase database = new PackageDatabase();
		database.updateDelivered(packageID);
		com.database.Date dateCurrent = new com.database.Date();
		long millis = System.currentTimeMillis();

		LocalDate currentDate = LocalDate.now();
		int day = currentDate.getDayOfMonth();
		int month = currentDate.getMonth().getValue();
		int year = currentDate.getYear();
		dateCurrent.setDay(day);
		dateCurrent.setMonth(month);
		dateCurrent.setYear(year);
		database.updateDayDelivery(dateCurrent, packageID);
		res.setResult("SUCCESS");

		return res;
	}

}
