package edu.com.upc.minfulu.dbprojectmindfulu.repositories;

import edu.com.upc.minfulu.dbprojectmindfulu.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {

    public User findOneByUsername(String username);

    //BUSCAR POR NOMBRE
    @Query("select count(u.username) from User u where u.username =:username")
    public int buscarUsername(@Param("username") String name);

    //INSERTAR ROLES
    @Transactional
    @Modifying
    @Query(value = "insert into roles (role, user_id) VALUES (:role, :user_id)", nativeQuery = true)
    public void insRol(@Param("role") String authority, @Param("user_id") Long user_id);

    //CONTAR CUANTAS CITAS TIENE CADA USUARIO

  //  @Query("SELECT new pe.edu.upc.projectmindfulu.dtos.UserXAppointmentCountDTO(u.id, u.username, COUNT(c)) " +
  //          "FROM User u LEFT JOIN Appointment c ON u.id = c.user.id " +
  //          "GROUP BY u.id, u.username")

  //  List<UserXAppointmentCountDTO> countAppointmentXUser();

}
