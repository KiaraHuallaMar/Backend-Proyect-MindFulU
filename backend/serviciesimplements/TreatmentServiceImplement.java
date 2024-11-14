package edu.com.upc.minfulu.dbprojectmindfulu.serviciesimplements;

import edu.com.upc.minfulu.dbprojectmindfulu.entities.Treatment;
import edu.com.upc.minfulu.dbprojectmindfulu.repositories.TreatmentRepository;
import edu.com.upc.minfulu.dbprojectmindfulu.servicesinterfaces.TreatmentServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class TreatmentServiceImplement implements TreatmentServiceInterface {
    @Autowired
    private TreatmentRepository treatmentRepository;

    //Listar Tratamiento
    @Override
    public List<Treatment> listar() {return treatmentRepository.findAll();}

    //Registrar Tratamiento
    @Override
    public Treatment registrar(Treatment treatment) {return treatmentRepository.save(treatment);}

    //Listar por Id Tratamiento
    @Override
    public Treatment listarId(Long id) {
        return treatmentRepository.findById(id).orElse(new Treatment());
    }

    //Actualizar Tratamiento
    @Override
    public void actualizar(Treatment treatment) {treatmentRepository.save(treatment); }

    //Eliminar Tratamiento
    @Override
    public void eliminar(Long id) {
        treatmentRepository.deleteById(id);
    }
}
