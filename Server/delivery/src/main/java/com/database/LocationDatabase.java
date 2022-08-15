package com.database;

import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.Reader;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

public class LocationDatabase {
	String link = PackageDatabase.relativePath() + "\\location.json";
	@SuppressWarnings("unchecked")
	public void setLocation(String userId,double latitude,double longitude) {
		try {
			Reader reader = new FileReader(link);
			JSONParser parser = new JSONParser();
			JSONObject jsonObject = (JSONObject) parser.parse(reader);
			JSONObject obj = new JSONObject();
			obj.put("latitude",latitude);
			obj.put("longitude",longitude);
			jsonObject.putIfAbsent(userId, obj);
			FileWriter file = new FileWriter(link);
			file.write(jsonObject.toJSONString().toString());
			file.close();
		} catch (IOException | ParseException e) {
			e.printStackTrace();
		}
	}
	public Location getLocation(String userId) {
		try {
			Reader reader = new FileReader(link);
			JSONParser parser = new JSONParser();
			JSONObject jsonObject = (JSONObject) parser.parse(reader);
			JSONObject location=  (JSONObject) jsonObject.get(userId);
			Location result = new Location();
			result.setLatitude((double)location.get("latitude"));
			result.setLongitude((double)location.get("longitude"));
			return result;
		} catch (IOException | ParseException e) {
//			e.printStackTrace();
			return null;
		}
	}
}
