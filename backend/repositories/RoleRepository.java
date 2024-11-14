package edu.com.upc.minfulu.dbprojectmindfulu.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import edu.com.upc.minfulu.dbprojectmindfulu.entities.Role;

import java.util.List;

@Repository
public interface RoleRepository extends JpaRepository<Role,Integer> {
    //Buscar Rol
    @Query("select r from Role r where r.role like %:type%")
    public List<Role> buscar(@Param("type")String type);
}
