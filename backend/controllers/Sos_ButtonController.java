package edu.com.upc.minfulu.dbprojectmindfulu.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import edu.com.upc.minfulu.dbprojectmindfulu.dtos.Sos_ButtonDTO;
import edu.com.upc.minfulu.dbprojectmindfulu.entities.Sos_Button;
import edu.com.upc.minfulu.dbprojectmindfulu.servicesinterfaces.Sos_ButtonServiceInterface;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/sos_button")
public class Sos_ButtonController {

    @Autowired
    private Sos_ButtonServiceInterface sos_buttonServiceInterface;

    // Listar los botones sos
    @GetMapping
    public List<Sos_ButtonDTO> obtenerBotones() {

        return sos_buttonServiceInterface.listar().stream().map(x -> {
            ModelMapper m = new ModelMapper();
            return m.map(x, Sos_ButtonDTO.class);
        }).collect(Collectors.toList());
    }

    //Registrar los botones sos
    @PostMapping
    public void registrar(@RequestBody Sos_ButtonDTO sos_buttonDTO){
        ModelMapper m = new ModelMapper();
        Sos_Button sos_button = m.map(sos_buttonDTO, Sos_Button.class);
        sos_buttonServiceInterface.registrar(sos_button);
    }

    //Listar por Id los botones sos
    @GetMapping("/{id}")
    public Sos_ButtonDTO listarId(@PathVariable("id") Integer id){
        ModelMapper m=new ModelMapper();
        Sos_ButtonDTO sos_buttonDTO=m.map(sos_buttonServiceInterface.listarId(id),Sos_ButtonDTO.class);
        return sos_buttonDTO;
    }

    //Actualizar los botones sos
    @PutMapping
    public void actualizar(@RequestBody Sos_ButtonDTO sos_buttonDTO){
        ModelMapper m=new ModelMapper();
        Sos_Button sos_button=m.map(sos_buttonDTO,Sos_Button.class);
        sos_buttonServiceInterface.actualizar(sos_button);
    }

    //Eliminar los botones sos
    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id") Integer id){

        sos_buttonServiceInterface.eliminar(id);
    }

}
