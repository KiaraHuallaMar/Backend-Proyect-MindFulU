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
    public List<Role> list() {return roleRepository.findAll();}

    //Registrar Cita
    @Override
    public Role insert(Role role) {return roleRepository.save(role);}

    //Listar por Id Cita
    @Override
    public Role listId(int id) {
        return roleRepository.findById(id).orElse(new Role());
    }

    //Actualizar Cita
    @Override
    public void update(Role role) {roleRepository.save(role); }

    //Eliminar Cita
    @Override
    public void delete(int id) {
        roleRepository.deleteById(id);
    }

    //Buscar Rol
    @Override
    public List<Role> buscar(String role) {return roleRepository.buscar(role);}
}
