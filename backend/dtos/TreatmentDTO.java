package edu.com.upc.minfulu.dbprojectmindfulu.dtos;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TreatmentDTO {
    private Long id;
    private String name;
    private String category_type;
    private String description;
    private int payment;

}
