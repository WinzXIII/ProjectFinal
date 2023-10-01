package technopolis.Employee;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import technopolis.User.User;
import technopolis.User.UserRepository;

@Service
@RequiredArgsConstructor
public class EmployeeService {

    @Autowired
    private final EmployeeRepository empRepo;

    @Autowired
    private final UserRepository userRepo;

    public List<EmployeeDTO> findEmployees() {
        return empRepo.findAllEmployee();
    }

    public Iterable<Employee> addEmployees(Iterable<Employee> request) {
        if (request != null) {
            for (Employee employee : request) {
                Optional<User> user = userRepo.findByUsername(employee.getEmpNumber());

                if (user.isPresent()) {
                    Employee employees = Employee
                            .builder()
                            .empNumber(employee.getEmpNumber())
                            .gender(employee.getGender())
                            .firstname(employee.getFirstname())
                            .lastname(employee.getLastname())
                            .position(employee.getPosition())
                            .department(employee.getDepartment())
                            .agency(employee.getAgency())
                            .image(employee.getImage())
                            .role(user.get().getRole().toString())
                            .user(user.get())
                            .build();

                    empRepo.save(employees);
                }
            }
        }

        return null;
    }

    public EmployeeDTO findEmployee(String empNumber) {
        return empRepo.findEmployee(empNumber);
    }

}
