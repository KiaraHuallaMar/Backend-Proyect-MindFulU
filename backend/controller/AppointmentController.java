package edu.com.upc.minfulu.dbprojectmindfulu.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import edu.com.upc.minfulu.dbprojectmindfulu.dtos.AppointmentDTO;
import edu.com.upc.minfulu.dbprojectmindfulu.entities.Appointment;
import edu.com.upc.minfulu.dbprojectmindfulu.servicesinterfaces.AppointmentServicesInterface;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/appointment")
public class AppointmentController {
    @Autowired
    private AppointmentServicesInterface appointmentServiceInterface;

    //Listar Cita
    @GetMapping("/listar")
    public List<AppointmentDTO> obtenerListadoCitas() {

        return appointmentServiceInterface.listar().stream().map(x -> {
            ModelMapper m = new ModelMapper();
            return m.map(x, AppointmentDTO.class);
        }).collect(Collectors.toList());
    }

    //Registrar Cita
    @PostMapping
    public void registrar(@RequestBody AppointmentDTO appointmentDTO){
        ModelMapper m = new ModelMapper();
        Appointment appointment = m.map(appointmentDTO, Appointment.class);
        appointmentServiceInterface.registrar(appointment);
    }

    //Listar por Id Cita
    @GetMapping("/{id}")
    public AppointmentDTO listarId(@PathVariable("id") Long id){
        ModelMapper m=new ModelMapper();
        AppointmentDTO appointmentDTO = m.map(appointmentServiceInterface.listarId(id),AppointmentDTO.class);
        return appointmentDTO;
    }

    //Actualizar Cita
    @PutMapping
    public void actualizar(@RequestBody AppointmentDTO appointmentDTO){
        ModelMapper m=new ModelMapper();
        Appointment appointment=m.map(appointmentDTO,Appointment.class);
        appointmentServiceInterface.actualizar(appointment);
    }

    //Eliminar Cita
    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id") Long id){
        appointmentServiceInterface.eliminar(id);
    }

  //  @GetMapping("/listarTotalPagoCitas")
  //  public List<TotalAmountPaymentXAppointmentsDTO> listTotalPaymentAppointments (){
   //     return appointmentServiceInterface.listTotalPaymentAppointments();
  //  }

}
