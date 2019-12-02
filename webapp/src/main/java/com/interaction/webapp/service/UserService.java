package com.interaction.webapp.service;

import com.interaction.webapp.model.User;
import com.interaction.webapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/*Service Layer to handle business rules if it have to
* And communicate with repository layer*/
@Service
public class UserService {

    /*Spring Dependence Injection */
    @Autowired
    private UserRepository userRepository;

    /*Method to save user on database*/
    public User save(User user){
        return userRepository.save(user);
    }

    /*Method to load initial data from JSON file and populate a list of users into the database
    * Databind, map JSON data to User model*/
    public void loadAll(List<User> users) {
        for(User user : users){
            userRepository.save(user);
        }
    }

    /*Method to delete user on database*/
    public void delete(Long userId){
        userRepository.deleteById(userId);
    }
    /*Method to list all user on database*/
    public List<User> listAll(){
        return userRepository.findAll();
    }
}
