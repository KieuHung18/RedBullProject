package com.database;

public class Package {
	private String id;
	private String idCustomer;
	private String idUser;
	private String addressDelivery;
	private Date dayDelivery;
	private Date dayReceive;
	private int cost;
	private boolean status;

	public Package() {
	}

	public Package(String id, String idCustomer, String idUser, Date dayReceive, Date dayDelivery,
			String addressDelivery, int cost, boolean status) {
		this.id = id;
		this.idCustomer = idCustomer;
		this.idUser = idUser;
		this.dayReceive = dayReceive;
		this.dayDelivery = dayDelivery;
		this.addressDelivery = addressDelivery;
		this.cost = cost;
		this.status = status;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getIdCustomer() {
		return idCustomer;
	}

	public void setIdCustomer(String idCustomer) {
		this.idCustomer = idCustomer;
	}

	public String getIdUser() {
		return idUser;
	}

	public void setIdUser(String idUser) {
		this.idUser = idUser;
	}

	public Date getDayReceive() {
		return dayReceive;
	}

	public void setDayReceive(Date dayReceive) {
		this.dayReceive = dayReceive;
	}

	public Date getDayDelivery() {
		return dayDelivery;
	}

	public void setDayDelivery(Date dayDelivery) {
		this.dayDelivery = dayDelivery;
	}

	public String getAddressDelivery() {
		return addressDelivery;
	}

	public void setAddressDelivery(String addressDelivery) {
		this.addressDelivery = addressDelivery;
	}

	public int getCost() {
		return cost;
	}

	public void setCost(int cost) {
		this.cost = cost;
	}

	public boolean getStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "Package [id=" + id + ", idCustomer=" + idCustomer + ", idUser=" + idUser + ", dayReceive=" + dayReceive
				+ ", dayDelivery=" + dayDelivery + ", addressDelivery=" + addressDelivery + ", cost=" + cost
				+ ", status=" + status + "]";
	}

}
