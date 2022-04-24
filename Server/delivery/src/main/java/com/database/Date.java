package com.database;

import java.util.Comparator;

public class Date implements Comparator<Date> {
	private int day;
	private int month;
	private int year;

	public Date(int i, int j, int year) {
		super();
		this.day = i;
		this.month = j;
		this.year = year;
	}

	public Date() {

	}

	public int getDay() {
		return day;
	}

	public void setDay(int day) {
		this.day = day;
	}

	public int getMonth() {
		return month;
	}

	public void setMonth(int month) {
		this.month = month;
	}

	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}

	@Override
	public String toString() {
		return  day + "/" + month + "/" + year;
	}

	@Override
	public int compare(Date o1, Date o2) {
		// TODO Auto-generated method stub
		if (o1.getDay() == o2.getDay() && o1.getMonth() == o2.getMonth() && o1.getYear() == o2.getYear()) {
			return 1;
		}
		return -1;
	}

}
