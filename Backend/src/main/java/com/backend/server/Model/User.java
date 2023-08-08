package com.backend.server.Model;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Document(collection = "user")
//@JsonInclude(JsonInclude.Include.NON_NULL)
public class User {
    private String email;
    private String firstName;
    private String lastName;
    @Id
    private String mobileNumber;
    private String password;
    private String Address;
    private String role;

}
