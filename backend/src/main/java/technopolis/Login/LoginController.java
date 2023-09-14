package technopolis.Login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import technopolis.service.personal.Personal;
import technopolis.service.personal.PersonalRepository;
import technopolis.service.users.User;
import technopolis.service.users.UserRepository;

@CrossOrigin(origins = "http://localhost:5173", allowedHeaders = { "Content-Type", "application/json" })
@RestController
@RequestMapping(path = "/technopolis/auth")
public class LoginController {

    @Autowired
    private PersonalRepository personalRepository;

    @Autowired
    private UserRepository userRepository;

    @PostMapping(path = "/login", consumes = "application/json", produces = "application/json")
    public ResponseEntity<Iterable<Personal>> getLogin(@RequestBody User user) {

        String username = user.getUsername();
        String password = user.getPassword();

        Iterable<User> userLogin = userRepository.findByUsernameAndPassword(username, password);

        if (userLogin.iterator().hasNext()) {

            String employeeId = username;

            Iterable<Personal> dataUser = personalRepository.findByEmployeeId(employeeId);

            return new ResponseEntity<Iterable<Personal>>(dataUser, HttpStatus.OK);
        }

        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }
}
