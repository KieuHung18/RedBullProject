package com.packagelistcontroller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.connection.JsonResponse;

@Controller
public class PackageListController {
	@CrossOrigin(origins="http://localhost:3000")
	@RequestMapping(path = "/packagelist",method=RequestMethod.GET)
	@ResponseBody
	public JsonResponse getPackageList() {
		JsonResponse res=new JsonResponse();
		res.setResult("SUCCESS");
		res.setResponse(loadData());
		return res;
	}
	public List<PackageList> loadData() {
		List<PackageList> result =new ArrayList<PackageList>();
		result.add(new PackageList("u01","p01","someplace/someplace",20000,false,"c01","cusname","0905050851"));
		result.add(new PackageList("u02","p02","someplace2/someplace2",22000,false,"c02","cusname2","0905050852"));
		return result;
	}
}
