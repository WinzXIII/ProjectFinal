package technopolis.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import technopolis.service.personal.Personal;
import technopolis.service.personal.PersonalRepository;
import technopolis.service.users.User;
import technopolis.service.users.UserRepository;

@Service
public class ServiceUserPersonal {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PersonalRepository personalRepository;

    // User

    public Iterable<User> findAllUser() {
        Iterable<User> dataUserAll = userRepository.findAll();

        return dataUserAll;
    }

    public Iterable<User> findByUsername(String username) {
        Iterable<User> dataUsername = userRepository.findByUsername(username);

        return dataUsername;
    }

    // Personal

    public Iterable<Personal> findAllPersonal() {
        Iterable<Personal> dataPersonal = personalRepository.findAll();

        return dataPersonal;
    }

    public Iterable<Personal> findByEmployeeId(String employeeId) {
        Iterable<Personal> dataEmployeeId = personalRepository.findByEmployeeId(employeeId);

        return dataEmployeeId;
    }

}
