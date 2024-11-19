package edu.com.upc.minfulu.dbprojectmindfulu.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "support_group")
public class Support_Group {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "description", length = 50, nullable = false)
    private String description;

    @Column(name = "creation_date",nullable = false)
    private LocalDate creation_date;

    @Column(name = "type", length = 20, nullable = false)
    private String type;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
