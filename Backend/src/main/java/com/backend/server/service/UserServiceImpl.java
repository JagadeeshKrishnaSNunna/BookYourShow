package com.backend.server.service;

import com.backend.server.Model.User;
import com.backend.server.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    UserRepository userRepository;

    @Autowired
    PasswordEncoder passwordEncoder;


    @Override
    public User addUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }


    @Override
    public Optional<User> getUser(String mobileNumber) {
        return(userRepository.findById(mobileNumber));
    }

    @Override
    public User updateUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public String deleteUser(String mobileNumber) {
       userRepository.deleteById(mobileNumber);
        return("UserDeleted Successfully");
    }

//    @Override
//    public Inventory addItemToCart(Inventory inventory) {
//        user.getCart().add(inventory);
//        return inventory;
//    }

}
