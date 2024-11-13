package edu.com.upc.minfulu.dbprojectmindfulu.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import edu.com.upc.minfulu.dbprojectmindfulu.dtos.UserDTO;
import edu.com.upc.minfulu.dbprojectmindfulu.entities.User;
import edu.com.upc.minfulu.dbprojectmindfulu.repositories.UserRepository;
import edu.com.upc.minfulu.dbprojectmindfulu.servicesinterfaces.UserServiceInterface;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/users")
//@PreAuthorize("hasAuthority('ADMINISTRADOR')")
public class UserController {
    @Autowired
    private UserServiceInterface userServiceInterface;
    @Autowired
    private UserRepository userRepository;

//ESTE AQUI ES PARA SEGURIDAD
    // @Autowired
    // private PasswordEncoder passwordEncoder;

    //Listar Usuario
    @GetMapping("/listar")
    public List<UserDTO> obtenerUsuarios(){

        return userServiceInterface.listar().stream().map(x->{
            ModelMapper m=new ModelMapper();
            return m.map(x,UserDTO.class);
        }).collect(Collectors.toList());
    }

    //ESTE DE AQUI ES PARA SEGURIDAD
  /*  //Registrar Usuario
    @PostMapping("/insert")
    public void registrar(@RequestBody UsuarioDTO usuarioDTO) {
        ModelMapper m = new ModelMapper();
        Usuario usuario = m.map(usuarioDTO, Usuario.class);
        String encodedPassword = passwordEncoder.encode(usuario.getPassword());
        usuario.setPassword(encodedPassword);
        usuarioServiceInterfaces.registrar(usuario);
    }
*/
    @PostMapping("/registrar")

    public void registrar(@RequestBody UserDTO userDTO) {
        ModelMapper m = new ModelMapper();
        User user = m.map(userDTO, User.class);
        userServiceInterface.registrar(user);
    }

    //Listar por Id Usuario
    @GetMapping("/{id}")
    public UserDTO listarId(@PathVariable("id") Long id){
        ModelMapper m = new ModelMapper();
        UserDTO userDTO=m.map(userServiceInterface.listarId(id),UserDTO.class);
        return userDTO;
    }

    //Actualizar Usuario
    @PutMapping("/actualizar")
    public void actualizar(@RequestBody UserDTO userDTO){
        ModelMapper m=new ModelMapper();
        User user=m.map(userDTO,User.class);
        userServiceInterface.actualizar(user);
    }

    //Eliminar Usuario
    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id") Long id){
        userServiceInterface.eliminar(id);
    }

    //CONTAR CITAS POR USUARIO
  //  @GetMapping("/Listar_citasporusuario")
  //  public List<UserXAppointmentCountDTO> getAppointmentXUser() {
  //      return userServiceInterface.countAppointmentXUser();
  //  }

}
