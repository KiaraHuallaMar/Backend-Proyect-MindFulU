package edu.com.upc.minfulu.dbprojectmindfulu.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "specialist")
public class Specialist {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name",length = 50, nullable = false)
    private String name;

    @Column(name = "lastname",length = 50, nullable = false)
    private String lastname;

    @Column(name = "age",length = 150, nullable = false)
    private Long age;

    @Column(name = "specialty", nullable = false)
    private String specialty;

    @Column(name = "phone", nullable = false)
    private String phone;

    @ManyToOne
    @JoinColumn(name = "appointment_id")
    private Appointment appointment;

    @ManyToOne
    @JoinColumn(name = "treatment_id")
    private Treatment treatment;

}
