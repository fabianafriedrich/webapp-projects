package com.interaction.webapp.repository;

import com.interaction.webapp.model.User;
import org.springframework.data.jpa.repository.JpaRepository;


/*Interface layer to interact with the database
* Using all the methods from Jpa Repository*/
public interface UserRepository extends JpaRepository<User, Long>{

}
