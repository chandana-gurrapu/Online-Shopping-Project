package com.pro.os.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.pro.os.entity.Users;
import com.pro.os.service.UsersService;

@CrossOrigin(origins="http://localhost:4200/")
@RestController
public class UsersController {
	@Autowired
    private UsersService uservice;

    @PostMapping("/saveuser")
    public ResponseEntity<Users> saveUsers(@RequestBody Users user) {
        System.out.println(user);
        return new ResponseEntity<Users>(uservice.saveUsers(user), HttpStatus.OK);

    }

    @GetMapping("/getallusers")
    public List<Users> getAllUsers() {

        return uservice.getAllUsers();
    }

    @GetMapping("/getuser/{id}")
    public ResponseEntity<Object> getUserById(@PathVariable("id") int id) {

        Users u = uservice.getUserById(id);
        if (u == null) {
            return new ResponseEntity<Object>("NO DATA FOUND!", HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<Object>(u, HttpStatus.OK);
        }
    } 
    
    @PutMapping("/updateuser")
    public Users updateUser(@RequestBody Users user) {
        return uservice.updateUser(user);
        
    }
    
    

    @DeleteMapping("/deleteuser/{user_id}")
    public String deleteUser(@PathVariable("user_id") int user_id) {
    return uservice.deleteUser(user_id);
      
        
    }

}
