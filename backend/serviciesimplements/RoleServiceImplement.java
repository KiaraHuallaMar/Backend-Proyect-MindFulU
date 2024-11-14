package edu.com.upc.minfulu.dbprojectmindfulu.serviciesimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import edu.com.upc.minfulu.dbprojectmindfulu.entities.Role;
import edu.com.upc.minfulu.dbprojectmindfulu.repositories.RoleRepository;
import edu.com.upc.minfulu.dbprojectmindfulu.servicesinterfaces.RoleServiceInterface;

import java.util.List;

@Service
public class RoleServiceImplement implements RoleServiceInterface {
    @Autowired
    private RoleRepository roleRepository;

    //Listar Cita
    @Override
    public List<Role> listar() {return roleRepository.findAll();}

    //Registrar Cita
    @Override
    public Role registrar(Role role) {return roleRepository.save(role);}

    //Listar por Id Cita
    @Override
    public Role listarId(int id) {
        return roleRepository.findById(id).orElse(new Role());
    }

    //Actualizar Cita
    @Override
    public void actualizar(Role role) {roleRepository.save(role); }

    //Eliminar Cita
    @Override
    public void eliminar(int id) {
        roleRepository.deleteById(id);
    }

    //Buscar Rol
    @Override
    public List<Role> buscar(String role) {return roleRepository.buscar(role);}
}
