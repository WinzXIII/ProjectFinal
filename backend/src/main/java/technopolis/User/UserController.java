package technopolis.User;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.Optional;

import technopolis.User.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/technopolis/user")
public class UserController {

    @Autowired
    private UserRespository userRespository;

    @Autowired 
    private PasswordEncoder passwordEncoder;

    @GetMapping(path = "/get")
    public ResponseEntity<Iterable<User>> getAllUser() {

        Iterable<User> dataUser = userRespository.findAll();

        return new ResponseEntity<Iterable<User>>(dataUser, HttpStatus.OK);
    }

    @PostMapping(path = "/add", consumes = "application/json", produces = "application/json")
    public ResponseEntity<String> addUser(@RequestBody Iterable<User> users) {

        for (User user : users) {

            User u = new User();
            u.setUsername(users.getUsername());
            u.setPassword(passwordEncoder.encode(users.getPassword()));
            u.setRole(users.getRole());


            userRespository.save(u);
        }

        return new ResponseEntity<>("Add Success", HttpStatus.OK);
    }

    @PutMapping(path = "/update/{id}", consumes = "application/json", produces = "application/json")
    public ResponseEntity<String> updateUser(@PathVariable Integer id, @RequestBody User user) {

        Optional<User> optionalUser = userRespository.findById(id);

        if (optionalUser.isPresent()) {
            
            User u = optionalUser.get();

            u.setUsername(user.getUsername());
            u.setPassword(user.getPassword());
            u.setRole(user.getRole());

            userRespository.save(u);

            return new ResponseEntity<>("Update successful", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping(path = "/delete/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable Integer id) {

        try {
            userRespository.deleteById(id);
            return new ResponseEntity<>("Delete success", HttpStatus.OK);
        } catch (EmptyResultDataAccessException e) {
            return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
        }
    }
}
