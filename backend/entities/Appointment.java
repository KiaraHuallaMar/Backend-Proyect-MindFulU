package edu.com.upc.minfulu.dbprojectmindfulu.entities;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalTime;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "appointment")
public class Appointment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "date",nullable = false)
    private LocalDate date;

    @Column(name = "hour", nullable = false)
    @JsonFormat(pattern = "HH:mm:ss")
    private LocalTime hour;

    @Column(name = "appointment_type",length = 50, nullable = false)
    private String appointment_type;

    @Column(name = "status",length = 50, nullable = false)
    private String status;

    @Column(name = "payment", nullable = false)
    private double payment;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;


}
