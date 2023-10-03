package technopolis.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import technopolis.Employee.Employee;
import technopolis.Employee.EmployeeDTO;
import technopolis.Employee.EmployeeService;

@RestController
@RequestMapping(path = "/api/v1/employee")
@RequiredArgsConstructor
public class EmployeeController {

    @Autowired
    private final EmployeeService service;

    @GetMapping(path = "/employees")
    public ResponseEntity<List<EmployeeDTO>> getEmployees() {
        return ResponseEntity.ofNullable(service.findEmployees());
    }

    @PostMapping(path = "/register")
    public ResponseEntity<Iterable<Employee>> addEmployees(@RequestBody Iterable<Employee> request) {
        return ResponseEntity.ok(service.addEmployees(request));
    }

    @GetMapping(path = "/{empId}")
    public ResponseEntity<EmployeeDTO> getEmployee(@PathVariable("empId") String empNumber) {
        return ResponseEntity.ofNullable(service.findEmployee(empNumber));
    }

}
