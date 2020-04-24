package com.interaction.webapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Map;


@SpringBootApplication
public class WebappApplication {

    public static void main(String[] args) {
        /*Getting MongoDB URL via environment variable*/
        Map<String, String> env = System.getenv();
        String mongoUrl= env.get("MONGODB_URL");
//        System.out.println(mongoUrl);
        SpringApplication.run(WebappApplication.class, args);
    }

}
