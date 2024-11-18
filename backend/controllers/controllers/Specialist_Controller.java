package edu.com.upc.minfulu.dbprojectmindfulu.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import edu.com.upc.minfulu.dbprojectmindfulu.dtos.SpecialistDTO;
import edu.com.upc.minfulu.dbprojectmindfulu.entities.Specialist;
import edu.com.upc.minfulu.dbprojectmindfulu.servicesinterfaces.SpecialistServiceInterface;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/specialist")
public class Specialist_Controller {
    @Autowired
    private SpecialistServiceInterface specialistServiceInterface;

    //Listar Especialista
    @GetMapping("/listar")
    public List<SpecialistDTO> obtenerEspecialista(){

        return specialistServiceInterface.listar().stream().map(x->{
            ModelMapper m=new ModelMapper();
            return m.map(x,SpecialistDTO.class);
        }).collect(Collectors.toList());
    }
    //Registrar especilistas
    @PostMapping("/registrar")
    public void registrar(@RequestBody SpecialistDTO specialistDTO){
        ModelMapper m = new ModelMapper();
        Specialist specialist = m.map(specialistDTO, Specialist.class);
        specialistServiceInterface.registrar(specialist);
    }

    //Actualizar especilistas
    @PutMapping("/Actualizar")
    public void actualizar(@RequestBody SpecialistDTO specialistDTO){
        ModelMapper m=new ModelMapper();
        Specialist specialists=m.map(specialistDTO,Specialist.class);
        specialistServiceInterface.actualizar(specialists);
    }

    //Eliminar especilistas
    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id") Long id){
        specialistServiceInterface.eliminar(id);
    }

    //CONTAR especilistas POR cita
  //  @GetMapping("/ListarCitasPorEspecialista")
  //  public List<SpecialistXAppointmentCountDTO> countAppointmentsXSpecialist() {
   //     return specialistServiceInterface.specialistXappointmentCount();
  //  }
}
