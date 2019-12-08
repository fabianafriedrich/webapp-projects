package com.interaction.webapp;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.interaction.webapp.model.User;
import com.interaction.webapp.service.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;


import java.io.IOException;
import java.io.InputStream;
import java.util.List;

@SpringBootApplication
public class WebappApplication {

    public static void main(String[] args) {
        SpringApplication.run(WebappApplication.class, args);
    }

    /*Initial database loading.
    Loading JSON data into the database*/
    @Bean
    CommandLineRunner runner(UserService userService) {
        return args -> {
            ObjectMapper mapper = new ObjectMapper();
            TypeReference<List<User>> typeReference = new TypeReference<List<User>>(){};
            InputStream inputStream = TypeReference.class.getResourceAsStream("/json/users.json");
            try {
                List<User> users = mapper.readValue(inputStream,typeReference);
                userService.loadAll(users);
                System.out.println("Users Saved!");
            } catch (IOException e){
                System.out.println("Unable to save users: " + e.getMessage());
            }
        };
    }
}
