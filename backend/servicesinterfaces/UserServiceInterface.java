package edu.com.upc.minfulu.dbprojectmindfulu.servicesinterfaces;

import edu.com.upc.minfulu.dbprojectmindfulu.entities.User;

import java.util.List;

public interface UserServiceInterface {
    //Listar Usuario
    public List<User> listar();

    //Registrar Usuario
    public User registrar (User user);

    //Listar por Id Usuario
    public User listarId(Long id);

    //Listar por Id Usuario
    // Usuario listarId(Long id);

    //Actualizar Usuario
    public void actualizar(User user);

    //Eliminar Usuario
    // public void  eliminar(int id);

    //Eliminar Usuario
    void eliminar(Long id);

   // public List<UserXAppointmentCountDTO> countAppointmentXUser();
}
