package com.backend.server.controller;

import com.backend.server.Model.User;
import com.backend.server.dao.Login;
import com.backend.server.repository.UserRepository;
import com.backend.server.service.UserService;
import com.google.gson.Gson;
import com.google.gson.JsonObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;


import java.lang.reflect.Type;
import java.util.Optional;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "*")
public class UserApis {

    @Autowired
    UserService userService;

    @Autowired
    AuthenticationProvider authenticationProvider;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    UserRepository userRepository;

    @PostMapping(value = "/login")
    public String userLogin(@RequestBody Login login){
        String json="";
        Optional<User> user;
        if(login.getUsername()!=null){
            user=userRepository.findById(login.getUsername());
            if (passwordEncoder.matches(login.getPassword(), user.get().getPassword())){
                json+="{\"email\":\""+user.get().getEmail()+"\"," +
                        "\"firstName\":\""+user.get().getFirstName()+"\"," +
                        "\"lastName\":\""+user.get().getLastName()+"\"," +
                        "\"mobileNumber\":\""+user.get().getMobileNumber()+"\", " +
                        "\"Address\":\""+user.get().getAddress()+"\"," +
                        "\"role\":\""+user.get().getRole()+"\"}";
                return json;
            }

            else
                return null;
        }
        else
            return null;
    }


    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/addUser")
    public User addUser(@RequestBody User user){

        return(userService.addUser(user));
    }

    @GetMapping("/getUser")
    public Optional<User> getUser(@RequestParam("mobileMumber") String mobileNumber){
        return(userService.getUser(mobileNumber));
    }

    @PostMapping("/updateUser")
    public User updateUser(@RequestBody User user){
        return(userService.updateUser(user));
    }

    @DeleteMapping("/deleteUser")
    public String deleteUser(@RequestParam String mobileNumber){
        return userService.deleteUser(mobileNumber);
    }
//    @PostMapping("/addItemToCart")
//    public Inventory addItemToCart(@RequestBody Inventory inventory){
//        userService.addItemToCart(inventory);
//        return inventory;
//    }

}
