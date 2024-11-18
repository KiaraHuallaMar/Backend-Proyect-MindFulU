package edu.com.upc.minfulu.dbprojectmindfulu.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import edu.com.upc.minfulu.dbprojectmindfulu.entities.Sos_Button;

@Repository
public interface Sos_ButtonRepository extends JpaRepository<Sos_Button, Integer> {
}
