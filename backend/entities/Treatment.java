package edu.com.upc.minfulu.dbprojectmindfulu.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "treatment")
public class Treatment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name",length = 50, nullable = false)
    private String name;

    @Column(name = "category_type",length = 50, nullable = false)
    private String category_type;

    @Column(name = "description",length = 150, nullable = false)
    private String description;

    @Column(name = "payment", nullable = false)
    private int payment;

}
