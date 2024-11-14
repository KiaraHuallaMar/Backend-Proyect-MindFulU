package edu.com.upc.minfulu.dbprojectmindfulu.servicesinterfaces;

import edu.com.upc.minfulu.dbprojectmindfulu.entities.Role;

import java.util.List;

public interface RoleServiceInterface {
    //Listar Rol
    public List<Role> listar();

    //Registrar Rol
    public Role registrar (Role role);

    //Listar por Id Rol
    public Role listarId(int id);

    //Actualizar Rol
    public void actualizar(Role role);

    //Eliminar Rol
    public void  eliminar(int id);

    //Buscar Rol
    public List<Role> buscar (String rol);

}
