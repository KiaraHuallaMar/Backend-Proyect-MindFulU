package edu.com.upc.minfulu.dbprojectmindfulu.servicesinterfaces;

import edu.com.upc.minfulu.dbprojectmindfulu.entities.Appointment;

import java.util.List;

public interface AppointmentServicesInterface {
    //Listar Cita
    public List<Appointment> listar();

    //Registrar Cita
    public Appointment registrar (Appointment appointment);

    //Listar por Id Cita
    public Appointment listarId(Long id);

    //Actualizar Cita
    public void actualizar(Appointment appointment);

    //Eliminar Cita
    public void  eliminar(Long id);

    //Eliminar Cita
    //  void eliminar(Long id);

    // public List<CitaUsuarioCountDTO> obtenerCantidadUsuariosPorCita();
  //  public List<TotalAmountPaymentXAppointmentsDTO> listTotalPaymentAppointments();
}
