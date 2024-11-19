package edu.com.upc.minfulu.dbprojectmindfulu.servicesinterfaces;

import edu.com.upc.minfulu.dbprojectmindfulu.entities.Role;

import java.util.List;

public interface RoleServiceInterface {
    //Listar Rol
    public List<Role> list();

    //Registrar Rol
    public Role insert (Role role);

    //Listar por Id Rol
    public Role listId(int id);

    //Actualizar Rol
    public void update(Role role);

    //Eliminar Rol
    public void  delete(int id);

    //Buscar Rol
    public List<Role> buscar (String rol);

}
