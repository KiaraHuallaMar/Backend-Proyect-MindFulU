package edu.com.upc.minfulu.dbprojectmindfulu.servicesinterfaces;

import edu.com.upc.minfulu.dbprojectmindfulu.entities.Treatment;

import java.util.List;

public interface TreatmentServiceInterface {
    //Registrar Tratamiento
    public Treatment registrar (Treatment treatment);

    //Listar por Id Tratamiento
    public Treatment listarId(Long id);
    //Listar Tratamiento
    public List<Treatment> listar();

    //Listar por Id Tratamiento
    // Tratamiento listarId(Long id);

    //Actualizar Tratamiento
    public void actualizar(Treatment treatment);

    //Eliminar Tratamiento
    public void  eliminar(Long id);

    //Eliminar Tratamiento
    // void eliminar(Long id);
}
