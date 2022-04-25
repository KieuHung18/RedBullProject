package com.database;

import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.Reader;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

public class PackageDatabase {
//	public static final String link = "packages.json";
	public static final String link = "C:\\Users\\QuocKhanh\\Documents\\RedBullProject\\Server\\delivery\\packages.json";
	public static final String link = "D:/Study/RedBullProject/Server/delivery/packages.json";
	/** Phương thức lấy gói hàng(JSONObject) bao gồm tất cả hông tin theo ID **/
	public JSONObject getPackage(String id_package) {
		JSONParser parser = new JSONParser();
		JSONObject obj0 = new JSONObject();

		try (Reader reader = new FileReader(link)) {
			JSONObject jsonObject = (JSONObject) parser.parse(reader);
//			System.out.println(jsonObject);
			JSONObject packages = (JSONObject) jsonObject.get(id_package);

			obj0 = packages;

		} catch (IOException e) {
			e.printStackTrace();
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return obj0;
	}

	/** Phương thức update ngày giao của gói hàng **/
	public static void updateDayDelivery(Date dayDelivery, String id_package) {
		JSONParser parser = new JSONParser();

		try (Reader reader = new FileReader(link)) {

			JSONObject jsonObject = (JSONObject) parser.parse(reader);
//			System.out.println(jsonObject);

			JSONObject user = (JSONObject) jsonObject.get(id_package);

			JSONObject jdd0 = new JSONObject();
			jdd0.put("day", dayDelivery.getDay());
			jdd0.put("month", dayDelivery.getMonth());
			jdd0.put("year", dayDelivery.getYear());

			user.put("dayDelivery", jdd0);

			try (FileWriter file = new FileWriter(link)) {
				file.write(jsonObject.toJSONString());
			} catch (IOException e) {
				e.printStackTrace();
			}

		} catch (IOException e) {
			e.printStackTrace();
		} catch (ParseException e) {
			e.printStackTrace();
		}
	}

	/** Phương thức update gói hàng đã được giao thành công **/
	public static void updateDelivered(String id_package) {
		JSONParser parser = new JSONParser();

		try (Reader reader = new FileReader(link)) {

			JSONObject jsonObject = (JSONObject) parser.parse(reader);
//			System.out.println(jsonObject);

			JSONObject user = (JSONObject) jsonObject.get(id_package);
			user.put("status", true);

			try (FileWriter file = new FileWriter(link)) {
				file.write(jsonObject.toJSONString());
			} catch (IOException e) {
				e.printStackTrace();
			}

		} catch (IOException e) {
			e.printStackTrace();
		} catch (ParseException e) {
			e.printStackTrace();
		}
	}

	/** Phương thức update trạng thái của gói hàng **/
	public static void updateStatus(boolean status, String id_package) {
		JSONParser parser = new JSONParser();

		try (Reader reader = new FileReader(link)) {

			JSONObject jsonObject = (JSONObject) parser.parse(reader);
//			System.out.println(jsonObject);

			JSONObject user = (JSONObject) jsonObject.get(id_package);
			user.put("status", status);

			try (FileWriter file = new FileWriter(link)) {
				file.write(jsonObject.toJSONString());
			} catch (IOException e) {
				e.printStackTrace();
			}

		} catch (IOException e) {
			e.printStackTrace();
		} catch (ParseException e) {
			e.printStackTrace();
		}
	}

	/** Phương thức lấy tất cả gói hàng(JSONArray) bao gồm tất cả hông tin **/
	public JSONArray getListPackages() {
		JSONParser parser = new JSONParser();
		JSONArray arrobj0 = new JSONArray();
//		String link = "packages.json";
		try (Reader reader = new FileReader(link)) {
			JSONObject jsonObject = (JSONObject) parser.parse(reader);
//			System.out.println(jsonObject);
			for (int i = 0; i < jsonObject.size(); i++) {
				JSONObject packages = (JSONObject) jsonObject.get("p" + i);
				String id = (String) packages.get("id");
				String idCustomer = (String) packages.get("idCustomer");
				String idUser = (String) packages.get("idUser");
				JSONObject dayReceive = (JSONObject) packages.get("dayReceive");
//			System.out.println(dayReceive);
				long dr0 = (long) dayReceive.get("day");
				long mr0 = (long) dayReceive.get("month");
				long yr0 = (long) dayReceive.get("year");
				JSONObject dayDelivery = (JSONObject) packages.get("dayDelivery");
//			System.out.println(dayDelivery);
				long dd0 = (long) dayDelivery.get("day");
				long md0 = (long) dayDelivery.get("month");
				long yd0 = (long) dayDelivery.get("year");
				String addressDelivery = (String) packages.get("addressDelivery");
				long cost = (long) packages.get("cost");
				boolean status = (boolean) packages.get("status");

				Package package0 = new Package();
				Date dater0 = new Date();
				dater0.setDay((int) dr0);
				dater0.setMonth((int) mr0);
				dater0.setYear((int) yr0);
				Date dated0 = new Date();
				dated0.setDay((int) dd0);
				dated0.setMonth((int) md0);
				dated0.setYear((int) yd0);
				package0.setId(id);
				package0.setIdCustomer(idCustomer);
				package0.setIdUser(idUser);
				package0.setDayReceive(dater0);
				package0.setDayDelivery(dated0);
				package0.setAddressDelivery(addressDelivery);
				package0.setCost((int) cost);
				package0.setStatus(status);

				arrobj0.add(package0);
			}

		} catch (IOException e) {
			e.printStackTrace();
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return arrobj0;
	}
}
