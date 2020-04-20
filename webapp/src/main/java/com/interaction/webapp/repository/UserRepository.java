package com.interaction.webapp.repository;

import com.interaction.webapp.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;


/*Interface layer to interact with the NOSQL database
* Using all the methods from Mongo Repository*/
public interface UserRepository extends MongoRepository<User, String> {

}
