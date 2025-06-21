package com.pratham.crudappln.Controller;

import com.pratham.crudappln.Model.User;
import com.pratham.crudappln.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {

@Autowired
    private UserService userService;

     @GetMapping("all")
    public List<User>getallUsers(User user){
        return userService.getAllUers();
    }

    @PostMapping("/add")
    public User addUser(@RequestBody User user){
         return userService.createUser(user);
    }

    @GetMapping("{id}")
    public User getUserById(@PathVariable int id){
         return userService.getUserById(id);
    }

    @PutMapping("update/{id}")
    public User updateUser(@PathVariable int id,@RequestBody User user){
         return userService.updateUser(id,user);
    }

    @DeleteMapping("/delete/{id}")
    public boolean deleteUser(@PathVariable int id){
         userService.deleteByid(id);
         return true;
    }

}
