package edu.com.upc.minfulu.dbprojectmindfulu.serviciesimplements;

import edu.com.upc.minfulu.dbprojectmindfulu.entities.Specialist;
import edu.com.upc.minfulu.dbprojectmindfulu.repositories.SpecialistRepository;
import edu.com.upc.minfulu.dbprojectmindfulu.servicesinterfaces.SpecialistServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SpecialistServiceImplement implements SpecialistServiceInterface {
    @Autowired
    public SpecialistRepository specialistRepository;

    @Override
    public Specialist registrar(Specialist specialist) {
        return specialistRepository.save(specialist);
    }

    @Override
    public List<Specialist> listar() {
        return specialistRepository.findAll();
    }

    //Actualizar especialista
    @Override
    public void actualizar(Specialist specialist) {specialistRepository.save(specialist); }

    //Eliminar especialista
    @Override
    public void eliminar(Long id) {
        specialistRepository.deleteById(id);
    }

  //  @Override
 //   public List<SpecialistXAppointmentCountDTO> specialistXappointmentCount() {
  //      return specialistRepository.specialistXappointmentCount();
  //  }
}
