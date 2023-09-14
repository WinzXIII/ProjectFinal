package technopolis.service.personal;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface PersonalRepository extends JpaRepository<Personal, Integer> {

    @Query("SELECT p FROM Personal p INNER JOIN p.user u ON u.username = :employeeId")
    Iterable<Personal> findByEmployeeId(String employeeId);

    
}
