package edu.com.upc.minfulu.dbprojectmindfulu.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "users")

public class User implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "username", length = 30, unique = true)
    private String username;

    @Column(name = "password", length = 200)
    private String password;

    private Boolean enabled;

    @ManyToOne
    @JoinColumn(name = "rol_id")
    private Role role;
}
