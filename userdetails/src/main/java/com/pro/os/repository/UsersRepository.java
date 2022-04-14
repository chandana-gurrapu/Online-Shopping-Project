package com.pro.os.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.pro.os.entity.Users;

public interface UsersRepository extends CrudRepository<Users, Integer> {
	List<Users> findAll();
}
