package com.pro.os.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pro.os.entity.Users;
import com.pro.os.repository.UsersRepository;

@Service
public class UsersService {
	@Autowired
	UsersRepository urepo;

	public Users saveUsers(Users u) {

		return urepo.save(u);
	}

	public List<Users> getAllUsers() {
		// TODO Auto-generated method stub

		return urepo.findAll();
	}

	public Users getUserById(int id) {
		// TODO Auto-generated method stub

		Optional<Users> op = urepo.findById(id);
		if (op.isPresent()) {
			return op.get();
		} else {
			return null;
		}

	}

	public Users updateUser(Users user) {
		// TODO Auto-generated method stub
		return urepo.save(user);

	}

	public String deleteUser(int user_id) {
		// TODO Auto-generated method stub
		urepo.deleteById(user_id);
		return "DELETED SUCCESSFULLY...";
	}

}
