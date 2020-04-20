package com.interaction.webapp.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Objects;


/*Model layer*/
//Getter and setters from lombok
@Data
@Document(collection = "user")
public class User {

/*Attributs*/
    @Id
    private String id;

    private String name;

    @Indexed(unique = true)
    private String email;

    private String phone;

    /*Constructors*/
    public User(){

    }

    public User(String name, String email, String phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    /*HashCode and equals*/
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return Objects.equals(id, user.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
