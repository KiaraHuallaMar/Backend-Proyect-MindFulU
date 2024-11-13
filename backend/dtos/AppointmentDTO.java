package edu.com.upc.minfulu.dbprojectmindfulu.dtos;

import lombok.Getter;
import lombok.Setter;
import edu.com.upc.minfulu.dbprojectmindfulu.entities.User;

import java.time.LocalDate;
import java.time.LocalTime;
@Getter
@Setter
public class AppointmentDTO {
    private Long id;
    private LocalDate date;
    private LocalTime hour;
    private String appointment_type;
    private String status;
    private double payment;
    private User user;

}
