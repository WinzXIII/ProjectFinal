/* package technopolis.Authentication;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Authcontoller {
    
    @GetMapping(path = "/")
    public String home(Authentication authentication){
        return "Hello, " + authentication.getName();
    }
}
 */