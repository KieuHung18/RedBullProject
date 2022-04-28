package com.packagestate;

import java.time.LocalDate;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.database.PackageDatabase;
@RestController
public class PackageStateController {
	@RequestMapping(path = "/delivered", method = RequestMethod.GET)
	public void delivered(@RequestParam(value = "packageID") String packageID) {
		com.database.PackageDatabase database = new PackageDatabase();
		database.updateDelivered(packageID,"delivered");
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
	}
	
	@RequestMapping(path = "/exception", method = RequestMethod.GET)
	public void exception(@RequestParam(value = "packageID") String packageID) {
		com.database.PackageDatabase database = new PackageDatabase();
		database.updateDelivered(packageID,"exception");
		com.database.Date dateCurrent = new com.database.Date();
		long millis = System.currentTimeMillis();

		int day = -1;
		int month = -1;
		int year = -1;
		dateCurrent.setDay(day);
		dateCurrent.setMonth(month);
		dateCurrent.setYear(year);
		database.updateDayDelivery(dateCurrent, packageID);
	}
	
	@RequestMapping(path = "/pending", method = RequestMethod.GET)
	public void pending(@RequestParam(value = "packageID") String packageID) {
		com.database.PackageDatabase database = new PackageDatabase();
		database.updateDelivered(packageID,"pending");
		com.database.Date dateCurrent = new com.database.Date();
		long millis = System.currentTimeMillis();

		int day = -1;
		int month = -1;
		int year = -1;
		dateCurrent.setDay(day);
		dateCurrent.setMonth(month);
		dateCurrent.setYear(year);
		database.updateDayDelivery(dateCurrent, packageID);
	}

}
