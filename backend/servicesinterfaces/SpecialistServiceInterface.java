package edu.com.upc.minfulu.dbprojectmindfulu.servicesinterfaces;

import edu.com.upc.minfulu.dbprojectmindfulu.entities.Specialist;

import java.util.List;

public interface SpecialistServiceInterface {
    public Specialist registrar (Specialist specialist);
    //Listar Especialista
    public List<Specialist> listar();
    //Actualizar Especialista
    public void actualizar(Specialist specialist);
    //Eliminar Especialista
    public void  eliminar(Long id);
    //ListarMontototaldetoas las citas que se registre
  //  public List<SpecialistXAppointmentCountDTO>specialistXappointmentCount();
}
