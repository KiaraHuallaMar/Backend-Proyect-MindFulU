package edu.com.upc.minfulu.dbprojectmindfulu.repositories;

import edu.com.upc.minfulu.dbprojectmindfulu.entities.Support_Group;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Support_GroupRepository extends JpaRepository<Support_Group,Integer> {
}
