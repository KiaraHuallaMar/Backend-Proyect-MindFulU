package edu.com.upc.minfulu.dbprojectmindfulu.serviciesimplements;

import edu.com.upc.minfulu.dbprojectmindfulu.entities.Support_Group;
import edu.com.upc.minfulu.dbprojectmindfulu.repositories.Support_GroupRepository;
import edu.com.upc.minfulu.dbprojectmindfulu.servicesinterfaces.Support_GroupServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Support_GroupServiceImplement implements Support_GroupServiceInterface {
    @Autowired
    Support_GroupRepository support_groupRepository;

    //Listar Grupo Apoyo
    @Override
    public List<Support_Group> listar() {return support_groupRepository.findAll();}

    //Registrar Grupo Apoyo
    @Override
    public Support_Group registrar(Support_Group support_group) {return support_groupRepository.save(support_group);}

    //Listar por Id Grupo Apoyo
    @Override
    public Support_Group listarId(int id) {
        return support_groupRepository.findById(id).orElse(new Support_Group());
    }

    //Actualizar Grupo Apoyo
    @Override
    public void actualizar(Support_Group support_group) {support_groupRepository.save(support_group); }

    //Eliminar Grupo Apoyo
    @Override
    public void eliminar(int id) {
        support_groupRepository.deleteById(id);
    }
}
