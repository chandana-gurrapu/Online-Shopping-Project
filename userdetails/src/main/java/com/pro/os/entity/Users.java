package com.pro.os.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name = "users")
@Entity
public class Users {
	
	@Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int user_id;
	private String name;
	private String email_id;
	private long mobile_no;
	private String gender;
	private String password;
	private String address;

	public Users() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Users(int user_id, String name, String email_id, long mobile_no, String gender, String password,
			String address) {
		super();
		this.user_id = user_id;
		this.name = name;
		this.email_id = email_id;
		this.mobile_no = mobile_no;
		this.gender = gender;
		this.password = password;
		this.address = address;
	}

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail_id() {
		return email_id;
	}

	public void setEmail_id(String email_id) {
		this.email_id = email_id;
	}

	public long getMobile_no() {
		return mobile_no;
	}

	public void setMobile_no(long mobile_no) {
		this.mobile_no = mobile_no;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	@Override
	public String toString() {
		return "Users [user_id=" + user_id + ", name=" + name + ", email_id=" + email_id + ", mobile_no=" + mobile_no
				+ ", gender=" + gender + ", password=" + password + ", address=" + address + "]";
	}

	
	
}