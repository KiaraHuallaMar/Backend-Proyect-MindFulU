package edu.com.upc.minfulu.dbprojectmindfulu.servicesinterfaces;

import edu.com.upc.minfulu.dbprojectmindfulu.entities.Sos_Button;

import java.util.List;

public interface Sos_ButtonServiceInterface {
    //Listar Boton Sos
    public List<Sos_Button> listar();

    //Registrar Boton Sos
    public Sos_Button registrar (Sos_Button sos_button);

    //Listar por Id Boton Sos
    public Sos_Button listarId(int id);

    //Actualizar Boton Sos
    public void actualizar(Sos_Button botonSos);

    //Eliminar Boton Sos
    public void  eliminar(int id);
}
