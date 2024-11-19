package edu.com.upc.minfulu.dbprojectmindfulu.serviciesimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import edu.com.upc.minfulu.dbprojectmindfulu.entities.Appointment;
import edu.com.upc.minfulu.dbprojectmindfulu.repositories.AppointmentRepository;
import edu.com.upc.minfulu.dbprojectmindfulu.servicesinterfaces.AppointmentServicesInterface;

import java.util.List;
@Service
public class AppointmentServiceImplement implements AppointmentServicesInterface {

    @Autowired
    private AppointmentRepository appointmentRepository;

    //Listar Cita
    @Override
    public List<Appointment> list() {return appointmentRepository.findAll();}

    //Registrar Cita
    @Override
    public Appointment insert(Appointment appointment) {return appointmentRepository.save(appointment);}

    //Listar por Id Cita
    @Override
    public Appointment listId(Long id) {
        return appointmentRepository.findById(id).orElse(new Appointment());
    }

    //Actualizar Cita
    @Override
    public void update(Appointment v) {appointmentRepository.save(v); }

    //Eliminar Cita
    @Override
    public void delete(Long id) {
        appointmentRepository.deleteById(id);
    }

 //   @Override
 //   public List<TotalAmountPaymentXAppointmentsDTO> listTotalPaymentAppointments() {
  //      return appointmentRepository.calculateTotalPaymentAppointments();
    //}
}
