package technopolis.Employee;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping(path = "/api/technopolis/employee")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    @GetMapping(path = "/get")
    public ResponseEntity<Iterable<Employee>> getAllEmp() {

        Iterable<Employee> dataEmp = employeeRepository.findAll();

        return new ResponseEntity<Iterable<Employee>>(dataEmp, HttpStatus.OK);
    }

    @PostMapping(path = "/add", consumes = "application/json", produces = "application/json")
    public ResponseEntity<String> addEmployees(@RequestBody Iterable<Employee> employees) {
        for (Employee employee : employees) {
            employeeRepository.save(employee);
        }
        return new ResponseEntity<>("Add Success", HttpStatus.OK);
    }
    
}
