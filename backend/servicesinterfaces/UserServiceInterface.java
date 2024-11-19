package edu.com.upc.minfulu.dbprojectmindfulu.servicesinterfaces;

import edu.com.upc.minfulu.dbprojectmindfulu.entities.User;

import java.util.List;

public interface UserServiceInterface {
    //Listar Usuario
    public List<User> list();

    //Registrar Usuario
    public User insert (User user);

    //Listar por Id Usuario
    public User listId(Long id);

    //Listar por Id Usuario
    // Usuario listarId(Long id);

    //Actualizar Usuario
    public void update(User user);

    //Eliminar Usuario
    // public void  eliminar(int id);

    //Eliminar Usuario
    void delete(Long id);

   // public List<UserXAppointmentCountDTO> countAppointmentXUser();
}
