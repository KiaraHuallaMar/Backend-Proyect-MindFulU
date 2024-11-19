package edu.com.upc.minfulu.dbprojectmindfulu.servicesinterfaces;

import edu.com.upc.minfulu.dbprojectmindfulu.entities.Support_Group;

import java.util.List;

public interface Support_GroupServiceInterface {
    //Listar Grupo Apoyo
    public List<Support_Group> listar();

    //Registrar Grupo Apoyo
    public Support_Group registrar (Support_Group support_group);

    //Listar por Id Grupo Apoyo
    public Support_Group listarId(int id);

    //Actualizar Grupo Apoyo
    public void actualizar(Support_Group support_group);

    //Eliminar Grupo Apoyo
    public void  eliminar(int id);
}
