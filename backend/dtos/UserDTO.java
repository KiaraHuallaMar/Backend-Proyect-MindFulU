package edu.com.upc.minfulu.dbprojectmindfulu.dtos;

import edu.com.upc.minfulu.dbprojectmindfulu.entities.Role;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDTO {
    private Long id;
    private String username;
    private String password;
    private Boolean enabled;
    private Role role;
}
