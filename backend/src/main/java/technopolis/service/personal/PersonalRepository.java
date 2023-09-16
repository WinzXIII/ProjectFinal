package technopolis.service.personal;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import technopolis.service.ServiceUserPersonalDTO;

public interface PersonalRepository extends JpaRepository<Personal, Integer> {

    @Query("SELECT p FROM Personal p INNER JOIN p.user u ON u.username = :employeeId")
    Iterable<Personal> findByEmployeeId(@Param("employeeId") String employeeId);

    @Query("SELECT new technopolis.service.ServiceUserPersonalDTO(u.id, u.username AS employeeId, p.gender, p.firstName, p.lastName, p.position, p.department, p.agency, u.role, p.image, u.enable) "
            +
            "FROM User u INNER JOIN u.personal p ON u.username = :username")
    ServiceUserPersonalDTO findByInnerJoin(@Param("username") String username);

}
