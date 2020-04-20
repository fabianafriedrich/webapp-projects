package com.interaction.webapp.controller;

import com.interaction.webapp.model.User;
import com.interaction.webapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

/*Controller/Resources Layer to handle all the request that come from the UI*/
@RestController
@RequestMapping(value = "/users")
public class UserController {

    /*Spring Dependence Injection */
    @Autowired
    private UserService userService;

    /*HTTP get methods to list all the results*/
    @GetMapping
    public List<User> getAll(){
        return userService.listAll();
    }

    /*HTTP post methods to persist user*/
    @PostMapping("/add")
    public ResponseEntity<User> add(@RequestBody @Valid User user){
        userService.save(user);
        return new ResponseEntity<User>(user, HttpStatus.CREATED);
    }
    /*HTTP post methods to persist user*/
    @PutMapping("/update")
    public ResponseEntity<User> update(@RequestBody @Valid User user){
        userService.save(user);
        return new ResponseEntity<User>(user, HttpStatus.OK);
    }

    /*HTTP Delete methods delete user*/
    @DeleteMapping(value = "/{id}")
    public ResponseEntity delete(@PathVariable Long id){
        userService.delete(id);
        return new ResponseEntity<>(id, HttpStatus.OK);
    }

}
