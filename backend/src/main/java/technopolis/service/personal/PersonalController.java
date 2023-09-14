package technopolis.service.personal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import technopolis.service.ServiceUserPersonal;

@CrossOrigin(origins = "http://localhost:5173", allowedHeaders = { "Content-Type", "application/json" })
@RestController
@RequestMapping(path = "/technopolis/personal")
public class PersonalController {

    @Autowired
    private ServiceUserPersonal serviceUserPersonal;

    @GetMapping(path = "/all")
    public Iterable<Personal> getAll() {

        return serviceUserPersonal.findAllPersonal();
    }

    @GetMapping(path = "/{employeeId}")
    public ResponseEntity<Iterable<Personal>> getEmployeeId(@PathVariable("employeeId") String employeeId) {

        Iterable<Personal> dataEmployeeId = serviceUserPersonal.findByEmployeeId(employeeId);

        if (dataEmployeeId.iterator().hasNext()) {
            return new ResponseEntity<>(dataEmployeeId, HttpStatus.OK);
        }

        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }

}
