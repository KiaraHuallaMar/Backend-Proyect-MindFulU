package edu.com.upc.minfulu.dbprojectmindfulu.repositories;

import edu.com.upc.minfulu.dbprojectmindfulu.entities.Treatment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TreatmentRepository extends JpaRepository<Treatment,Long> {
}
