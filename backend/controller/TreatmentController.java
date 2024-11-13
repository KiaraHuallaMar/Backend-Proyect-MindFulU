package edu.com.upc.minfulu.dbprojectmindfulu.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import edu.com.upc.minfulu.dbprojectmindfulu.dtos.TreatmentDTO;
import edu.com.upc.minfulu.dbprojectmindfulu.entities.Treatment;
import edu.com.upc.minfulu.dbprojectmindfulu.servicesinterfaces.TreatmentServiceInterface;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/treatment")
public class TreatmentController {
    @Autowired
    private TreatmentServiceInterface treatmentServiceInterface;

    //Listar Tratamiento
    @GetMapping
    public List<TreatmentDTO> obtenerTratamientos(){

        return treatmentServiceInterface.listar().stream().map(x->{
            ModelMapper m=new ModelMapper();
            return m.map(x,TreatmentDTO.class);
        }).collect(Collectors.toList());
    }

    //Registrar Tratamiento
    @PostMapping
    public void registrar(@RequestBody TreatmentDTO treatmentDTO){
        ModelMapper m = new ModelMapper();
        Treatment treatment = m.map(treatmentDTO, Treatment.class);
        treatmentServiceInterface.registrar(treatment);
    }

    //Listar por Id Tratamiento
    @GetMapping("/{id}")
    public TreatmentDTO listarId(@PathVariable("id") Long id){
        ModelMapper m=new ModelMapper();
        TreatmentDTO treatmentDTO = m.map(treatmentServiceInterface.listarId(id),TreatmentDTO.class);
        return treatmentDTO;
    }

    //Actualizar Tratamiento
    @PutMapping
    public void actualizar(@RequestBody TreatmentDTO treatmentDTO){
        ModelMapper m=new ModelMapper();
        Treatment treatment = m.map(treatmentDTO,Treatment.class);
        treatmentServiceInterface.actualizar(treatment);
    }

    //Eliminar Tratamiento
    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id") Long id){

        treatmentServiceInterface.eliminar(id);
    }
}
