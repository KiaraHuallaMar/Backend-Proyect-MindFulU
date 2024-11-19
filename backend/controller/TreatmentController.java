package edu.com.upc.minfulu.dbprojectmindfulu.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import edu.com.upc.minfulu.dbprojectmindfulu.dtos.TreatmentDTO;
import edu.com.upc.minfulu.dbprojectmindfulu.entities.Treatment;
import edu.com.upc.minfulu.dbprojectmindfulu.servicesinterfaces.TreatmentServiceInterface;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/treatment")
//@PreAuthorize("hasAuthority('ADMINISTRADOR')")
public class TreatmentController {
    @Autowired
    private TreatmentServiceInterface treatmentServiceInterface;

    //Listar Tratamiento
    @GetMapping("/listar")
    @PreAuthorize("hasAnyAuthority('ADMINISTRADOR','USUARIO')")
    public List<TreatmentDTO> obtenerTratamientos(){

        return treatmentServiceInterface.list().stream().map(x->{
            ModelMapper m=new ModelMapper();
            return m.map(x,TreatmentDTO.class);
        }).collect(Collectors.toList());
    }

    //Registrar Tratamiento
    @PostMapping("/registrar")
    @PreAuthorize("hasAnyAuthority('ADMINISTRADOR','UNIVERSITARIO')")
    public void registrar(@RequestBody TreatmentDTO treatmentDTO){
        ModelMapper m = new ModelMapper();
        Treatment treatment = m.map(treatmentDTO, Treatment.class);
        treatmentServiceInterface.insert(treatment);
    }

    //Listar por Id Tratamiento
    @GetMapping("/{id}")
    @PreAuthorize("hasAnyAuthority('ADMINISTRADOR','UNIVERSITARIO')")
    public TreatmentDTO listarId(@PathVariable("id") Long id){
        ModelMapper m=new ModelMapper();
        TreatmentDTO treatmentDTO = m.map(treatmentServiceInterface.listId(id),TreatmentDTO.class);
        return treatmentDTO;
    }

    //Actualizar Tratamiento
    @PutMapping("/actualizar")
    @PreAuthorize("hasAnyAuthority('ADMINISTRADOR','UNIVERSITARIO')")
    public void actualizar(@RequestBody TreatmentDTO treatmentDTO){
        ModelMapper m=new ModelMapper();
        Treatment treatment = m.map(treatmentDTO,Treatment.class);
        treatmentServiceInterface.update(treatment);
    }

    //Eliminar Tratamiento
    @DeleteMapping("/{id}")
    @PreAuthorize("hasAnyAuthority('ADMINISTRADOR','UNIVERSITARIO')")
    public void eliminar(@PathVariable("id") Long id){

        treatmentServiceInterface.delete(id);
    }
}
