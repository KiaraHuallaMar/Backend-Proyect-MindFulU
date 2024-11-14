package edu.com.upc.minfulu.dbprojectmindfulu.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import edu.com.upc.minfulu.dbprojectmindfulu.entities.Specialist;

@Repository
public interface SpecialistRepository extends JpaRepository<Specialist, Long> {
 //   @Query("SELECT new pe.edu.upc.projectmindfulu.dtos.SpecialistXAppointmentCountDTO(s.name, s.lastname, COUNT(a)) " +
  //          "FROM Specialist s " +
  //          "JOIN s.appointment a " +  // Utilizando la relación mapeada entre Especialista y Cita
  //          "GROUP BY s.id, s.name, s.lastname")
 //   List<SpecialistXAppointmentCountDTO> specialistXappointmentCount();
}

