package com.interaction.webapp.controller;

import com.interaction.webapp.model.User;
import com.interaction.webapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;
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
    @PostMapping
    public User add(@RequestBody @Valid User user){
        return userService.save(user);
    }

    /*HTTP Delete methods delete user*/
    @DeleteMapping(value = "/{id}")
    public ResponseEntity delete(@PathVariable Long id){
        userService.delete(id);
        return new ResponseEntity<>(id, HttpStatus.OK);
    }
}
