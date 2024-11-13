package edu.com.upc.minfulu.dbprojectmindfulu.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import edu.com.upc.minfulu.dbprojectmindfulu.dtos.RoleDTO;
import edu.com.upc.minfulu.dbprojectmindfulu.entities.Role;
import edu.com.upc.minfulu.dbprojectmindfulu.servicesinterfaces.RoleServiceInterface;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/role")
public class RoleController {

    @Autowired
    private RoleServiceInterface roleServiceInterface;

    //Listar Rol
    @GetMapping("/listar")
    public List<RoleDTO> obtenerRoles(){

        return roleServiceInterface.listar().stream().map(x->{
            ModelMapper m=new ModelMapper();
            return m.map(x,RoleDTO.class);
        }).collect(Collectors.toList());
    }

    //Registrar Rol
    @PostMapping("/registrar")
    public void registrar(@RequestBody RoleDTO roleDTO){
        ModelMapper m = new ModelMapper();
        Role role = m.map(roleDTO, Role.class);
        roleServiceInterface.registrar(role);
    }

    //Listar por Id Rol
    @GetMapping("/{id}")
    public RoleDTO listarId(@PathVariable("id") Integer id){
        ModelMapper m=new ModelMapper();
        RoleDTO roleDTO = m.map(roleServiceInterface.listarId(id),RoleDTO.class);
        return roleDTO;
    }

    //Actualizar Rol
    @PutMapping("/actualizar")
    public void actualizar(@RequestBody RoleDTO roleDTO){
        ModelMapper m=new ModelMapper();
        Role role=m.map(roleDTO,Role.class);
        roleServiceInterface.actualizar(role);
    }

    //Eliminar Rol
    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id") Integer id){

        roleServiceInterface.eliminar(id);
    }

    //Buscar Rol
    @GetMapping("/busquedas")
    public List<RoleDTO> buscar(@RequestParam String r){

        return roleServiceInterface.buscar(r).stream().map(x->{
            ModelMapper m=new ModelMapper();
            return m.map(x,RoleDTO.class);
        }).collect(Collectors.toList());
    }

}
