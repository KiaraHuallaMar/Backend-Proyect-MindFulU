package edu.com.upc.minfulu.dbprojectmindfulu.dtos;

import edu.com.upc.minfulu.dbprojectmindfulu.entities.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RoleDTO {
    private Long id;
    private String role;
}
