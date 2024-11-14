package edu.com.upc.minfulu.dbprojectmindfulu.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import edu.com.upc.minfulu.dbprojectmindfulu.entities.Appointment;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
  //  String PAYMENT = "payment";

   // @Query("SELECT new pe.edu.upc.projectmindfulu.dtos.TotalAmountPaymentXAppointmentsDTO(SUM(a." + PAYMENT + ")) FROM Appointment a")
 //   List<TotalAmountPaymentXAppointmentsDTO> calculateTotalPaymentAppointments();
}
