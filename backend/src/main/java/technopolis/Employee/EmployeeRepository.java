package technopolis.Employee;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

    @Query("SELECT new technopolis.Employee.EmployeeDTO(id, empNumber, CONCAT(gender, firstname, ' ', lastname) AS name, position, department, agency, image, role) FROM Employee")
    List<EmployeeDTO> findAllEmployee();

    @Query("SELECT new technopolis.Employee.EmployeeDTO(id, empNumber, CONCAT(gender, firstname, ' ', lastname) AS name, position, department, agency, image, role) \n"
     + "FROM Employee WHERE empNumber = :empNumber")
     EmployeeDTO findEmployee(String empNumber);
}
