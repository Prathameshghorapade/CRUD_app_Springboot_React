package com.pratham.crudappln.Service;

import com.pratham.crudappln.Model.User;
import com.pratham.crudappln.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepo;

public List<User> getAllUers() {
    return userRepo.findAll();
}


    public User createUser(User user){
        return userRepo.save(user);
    }

    public User getUserById(int id){
    return userRepo.findById(id).get();
    }


    public User updateUser(int id,User user){
     User existingUser = userRepo.findById(id).orElseThrow(() -> new RuntimeException("User Not Found by This Id"+ id) );

        existingUser.setName(user.getName());
        existingUser.setAge(user.getAge());
        existingUser.setDept(user.getDept());

        return userRepo.save(existingUser);

    }


    public boolean deleteByid(int id){

    userRepo.deleteById(id);
    return true;
    }

}
