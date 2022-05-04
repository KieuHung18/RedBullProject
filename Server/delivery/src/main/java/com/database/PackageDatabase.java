package com.database;

import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.Reader;
import java.time.LocalDate;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map.Entry;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.core.io.ClassPathResource;


public class PackageDatabase {

//	public static final String LINK = "E:\\RedBull\\RedBullProject\\Server\\delivery";
//	private static 

	/** Phương thức lấy gói hàng(JSONObject) bao gồm tất cả hông tin theo ID **/
	public JSONObject getPackage(String id_package) {
		JSONParser parser = new JSONParser();
		JSONObject obj0 = new JSONObject();
		String link = relativePath()+"\\packages.json";
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
	
	public void editPackage(String address, int price,String CustomerID,String userID,String packageID) {
		JSONParser parser = new JSONParser();
		String link = relativePath()+"\\packages.json";
		try (Reader reader = new FileReader(link)){
			JSONObject jsonObject = (JSONObject) parser.parse(reader);
			JSONObject p = new JSONObject();
			
			p.put("idUser",userID);
			
			LocalDate currentDate = LocalDate.now();
			int day = currentDate.getDayOfMonth();
			int month = currentDate.getMonth().getValue();
			int year = currentDate.getYear();
			JSONObject date = new JSONObject();
			date.put("day", day);
			date.put("month", month);
			date.put("year", year);
			p.put("dayReceive",date);
			
			date = new JSONObject();
			date.put("day", -1);
			date.put("month", -1);
			date.put("year", -1);
			p.put("dayDelivery",date);
			
			p.put("cost",price);
			p.put("id",packageID);
			p.put("addressDelivery",address);
//			
			p.put("idCustomer",CustomerID);
			p.put("status","pending");
			
			jsonObject.put(packageID,p);
			 try (FileWriter file = new FileWriter(link)) {
		            file.write(jsonObject.toJSONString());
		        } catch (IOException e) {
		            e.printStackTrace();
		        }

			
		} catch (Exception e) {
			// TODO: handle exception
		}
	}
	public void addPackage(String address, int price,String CustomerID) {
		JSONParser parser = new JSONParser();
		String link = relativePath()+"\\packages.json";
		try (Reader reader = new FileReader(link)){
			JSONObject jsonObject = (JSONObject) parser.parse(reader);
			JSONObject p = new JSONObject();
			
			p.put("idUser",findUser());
			
			LocalDate currentDate = LocalDate.now();
			int day = currentDate.getDayOfMonth();
			int month = currentDate.getMonth().getValue();
			int year = currentDate.getYear();
			JSONObject date = new JSONObject();
			date.put("day", day);
			date.put("month", month);
			date.put("year", year);
			p.put("dayReceive",date);
			
			date = new JSONObject();
			date.put("day", -1);
			date.put("month", -1);
			date.put("year", -1);
			p.put("dayDelivery",date);
			
			p.put("cost",price);
			p.put("id","p"+jsonObject.size());
			p.put("addressDelivery",address);
//			
			p.put("idCustomer",CustomerID);
			p.put("status","pending");
			
			jsonObject.put("p"+jsonObject.size(),p);
			 try (FileWriter file = new FileWriter(link)) {
		            file.write(jsonObject.toJSONString());
		        } catch (IOException e) {
		            e.printStackTrace();
		        }

			
		} catch (Exception e) {
			// TODO: handle exception
		}
	}
	public String findUser(){
		String result="";
		HashMap<String, Integer> map=new UserDatabase().getMapUser();
		
		JSONParser parser = new JSONParser();
		JSONArray arrobj0 = new JSONArray();
		String link = relativePath()+"\\packages.json";
		try (Reader reader = new FileReader(link)) {
			JSONObject jsonObject = (JSONObject) parser.parse(reader);
			for (int i = 0; i < jsonObject.size(); i++) {
				JSONObject packages = (JSONObject) jsonObject.get("p" + i);
				
				if(packages.get("status").equals("pending")) {
					String idUser = (String) packages.get("idUser");
					int number=map.get(idUser);
					map.put(idUser, number+1);
				}
			}

		} catch (IOException e) {
			e.printStackTrace();
		} catch (ParseException e) {
			e.printStackTrace();
		}
		
		Iterator<Entry<String, Integer>>iter= map.entrySet().iterator();
		Entry<String, Integer>entry=iter.next();
		int min=entry.getValue();result=entry.getKey();
		while(iter.hasNext()) {
			entry=iter.next();
			if(entry.getValue()<min) {
				result=entry.getKey();
				min=entry.getValue();
			}
			
		}
		return result;
		
	}
	/** Phương thức update ngày giao của gói hàng **/
	public static void updateDayDelivery(Date dayDelivery, String id_package) {
		JSONParser parser = new JSONParser();
		String link = relativePath()+"\\packages.json";
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
	public static void updateDelivered(String id_package,String status) {
		JSONParser parser = new JSONParser();
		String link = relativePath()+"\\packages.json";
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

	/** Phương thức update trạng thái của gói hàng **/
	public static void updateStatus(String status, String id_package) {
		JSONParser parser = new JSONParser();
		String link = relativePath()+"\\packages.json";
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
		String link = relativePath()+"\\packages.json";
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
				String status = (String) packages.get("status");

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
	
	public JSONArray getListPackages(String userID) {
		JSONParser parser = new JSONParser();
		JSONArray arrobj0 = new JSONArray();
		String link = relativePath()+"\\packages.json";
		try (Reader reader = new FileReader(link)) {
			JSONObject jsonObject = (JSONObject) parser.parse(reader);
//			System.out.println(jsonObject);
			for (int i = 0; i < jsonObject.size(); i++) {
				JSONObject packages = (JSONObject) jsonObject.get("p" + i);
				String user=(String) packages.get("idUser");
				if(user.equals(userID)) {
					String id = (String) packages.get("id");
					String idCustomer = (String) packages.get("idCustomer");
					String idUser = (String) packages.get("idUser");
					JSONObject dayReceive = (JSONObject) packages.get("dayReceive");
//				System.out.println(dayReceive);
					long dr0 = (long) dayReceive.get("day");
					long mr0 = (long) dayReceive.get("month");
					long yr0 = (long) dayReceive.get("year");
					JSONObject dayDelivery = (JSONObject) packages.get("dayDelivery");
//				System.out.println(dayDelivery);
					long dd0 = (long) dayDelivery.get("day");
					long md0 = (long) dayDelivery.get("month");
					long yd0 = (long) dayDelivery.get("year");
					String addressDelivery = (String) packages.get("addressDelivery");
					long cost = (long) packages.get("cost");
					String status = (String) packages.get("status");

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
				
			}

		} catch (IOException e) {
			e.printStackTrace();
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return arrobj0;
	}
	public static String relativePath() {
		String path = "";
		try {
			path=new ClassPathResource("").getFile().getAbsolutePath();
			String[] pathArr=path.split("\\\\");
			path="";
			for(int i=0;i<pathArr.length;i++) {
				if(pathArr[i].equals("Server")) {
					return path+"Server\\delivery";
				}else {
					path+=pathArr[i]+"\\";
				}
			}
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return path;
	}
	
}
