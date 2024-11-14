package edu.com.upc.minfulu.dbprojectmindfulu.serviciesimplements;

import edu.com.upc.minfulu.dbprojectmindfulu.entities.User;
import edu.com.upc.minfulu.dbprojectmindfulu.repositories.UserRepository;
import edu.com.upc.minfulu.dbprojectmindfulu.servicesinterfaces.UserServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImplement implements UserServiceInterface {
    @Autowired
    private UserRepository userRepository;

    //Listar Usuario
    @Override
    public List<User> listar() {return userRepository.findAll();}

    //Registrar Usuario
    @Override
    public User registrar(User user) {return userRepository.save(user);}

    //Listar por Id Usuario
    @Override
    public User listarId(Long id) {
        return userRepository.findById(id).orElse(new User());
    }

    //Actualizar Usuario
    @Override
    public void actualizar(User user) {userRepository.save(user); }

    //Eliminar Usuario
    @Override
    public void eliminar(Long id) {
        userRepository.deleteById(id);
    }

 //   @Override
  //  public List<UserXAppointmentCountDTO> countAppointmentXUser() {
//
   //     return userRepository.countAppointmentXUser();
 //   }
}
