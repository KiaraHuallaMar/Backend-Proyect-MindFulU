package edu.com.upc.minfulu.dbprojectmindfulu.dtos;

import edu.com.upc.minfulu.dbprojectmindfulu.entities.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Support_GroupDTO {
    private int id;
    private String type;
    private String description;
    private LocalDate creation_date;
    private User user;


}
