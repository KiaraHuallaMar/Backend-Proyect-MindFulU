package edu.com.upc.minfulu.dbprojectmindfulu.servicesinterfaces;

import edu.com.upc.minfulu.dbprojectmindfulu.entities.Treatment;

import java.util.List;

public interface TreatmentServiceInterface {
    //Registrar Tratamiento
    public Treatment insert (Treatment treatment);

    //Listar por Id Tratamiento
    public Treatment listId(Long id);
    //Listar Tratamiento
    public List<Treatment> list();

    //Listar por Id Tratamiento
    // Tratamiento listarId(Long id);

    //Actualizar Tratamiento
    public void update(Treatment treatment);

    //Eliminar Tratamiento
    public void  delete(Long id);

    //Eliminar Tratamiento
    // void eliminar(Long id);
}
