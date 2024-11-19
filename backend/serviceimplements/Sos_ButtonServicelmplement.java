package edu.com.upc.minfulu.dbprojectmindfulu.serviciesimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import edu.com.upc.minfulu.dbprojectmindfulu.entities.Sos_Button;
import edu.com.upc.minfulu.dbprojectmindfulu.repositories.Sos_ButtonRepository;
import edu.com.upc.minfulu.dbprojectmindfulu.servicesinterfaces.Sos_ButtonServiceInterface;

import java.util.List;

@Service
public class Sos_ButtonServiceImplement implements Sos_ButtonServiceInterface {
    @Autowired
    Sos_ButtonRepository sos_buttonRepository;

    //Listar Boton Sos
    @Override
    public List<Sos_Button> listar() {return sos_buttonRepository.findAll();}

    //Registrar Boton Sos
    @Override
    public Sos_Button registrar(Sos_Button sos_button) {return sos_buttonRepository.save(sos_button);}

    //Listar por Id Boton Sos
    @Override
    public Sos_Button listarId(int id) {
        return sos_buttonRepository.findById(id).orElse(new Sos_Button());
    }

    //Actualizar Boton Sos
    @Override
    public void actualizar(Sos_Button sos_button) {sos_buttonRepository.save(sos_button); }

    //Eliminar Boton Sos
    @Override
    public void eliminar(int id) {
        sos_buttonRepository.deleteById(id);
    }
}
