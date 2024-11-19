package edu.com.upc.minfulu.dbprojectmindfulu.servicesinterfaces;

import edu.com.upc.minfulu.dbprojectmindfulu.entities.Appointment;

import java.util.List;

public interface AppointmentServicesInterface {
    //Listar Cita
    public List<Appointment> list();

    //Registrar Cita
    public Appointment insert (Appointment appointment);

    //Listar por Id Cita
    public Appointment listId(Long id);

    //Actualizar Cita
    public void update(Appointment appointment);

    //Eliminar Cita
    public void  delete(Long id);

    //Eliminar Cita
    //  void eliminar(Long id);

    // public List<CitaUsuarioCountDTO> obtenerCantidadUsuariosPorCita();
  //  public List<TotalAmountPaymentXAppointmentsDTO> listTotalPaymentAppointments();
}
