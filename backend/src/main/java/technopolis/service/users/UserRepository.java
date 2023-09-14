package technopolis.service.users;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserRepository extends JpaRepository<User, Integer> {
    
    Iterable<User> findByUsername(String username);
    
    Iterable<User> findByUsernameAndPassword(String username, String password);
}
