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
@Table(name = "sos_button")
public class Sos_Button {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "description", length = 50, nullable = false)
    private String description;

    @Column(name = "start_date",nullable = false)
    private LocalDate start_date;

    @Column(name = "end_date",nullable = false)
    private LocalDate end_date;

    @Column(name = "hour", nullable = false)
    @JsonFormat(pattern = "HH:mm:ss")
    private LocalTime hour;

    @Column(name = "reason", length = 100, nullable = false)
    private String reason;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

}
