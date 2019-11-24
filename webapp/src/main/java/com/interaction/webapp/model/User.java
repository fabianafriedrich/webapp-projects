package com.interaction.webapp.model;


import lombok.Data;

import javax.persistence.*;
import java.util.Objects;


/*Entity layer object, relation model */
@Data //Getter and setters from lombok
@Entity
@Table(name = "user")
public class User {
/*Attributs*/
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name ="name")
    private String name;

    @Column(name ="email")
    private String email;

    @Column(name ="phone")
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
