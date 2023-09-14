package technopolis.service.users;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import technopolis.service.ServiceUserPersonal;

@CrossOrigin(origins = "http://localhost:5173", allowedHeaders = { "Content-Type", "application/json" })
@RestController
@RequestMapping(path = "/technopolis/user")
public class UserController {

    @Autowired
    private ServiceUserPersonal serviceUserPersonal;

    @GetMapping(path = "/all")
    public Iterable<User> getAll() {
        return serviceUserPersonal.findAllUser();
    }

    @GetMapping(path = "/{username}")
    public ResponseEntity<Iterable<User>> getUsername(@PathVariable("username") String username) {

        Iterable<User> dataUsername = serviceUserPersonal.findByUsername(username);

        if (dataUsername.iterator().hasNext()) {
            return new ResponseEntity<>(dataUsername, HttpStatus.OK);
        }

        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }

}
