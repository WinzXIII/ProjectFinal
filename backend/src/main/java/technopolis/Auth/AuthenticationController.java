package technopolis.Auth;

import java.io.IOException;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.ServletException;
import lombok.RequiredArgsConstructor;
import technopolis.Employee.EmployeeDTO;


@RestController
@RequestMapping(path = "api/v1/auth")
@CrossOrigin(origins = "http://localhost:5173", allowedHeaders = {"content-type", "application/json"}, allowCredentials = "true")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService service;

    @PostMapping(path = "/register")
    public ResponseEntity<AuthenticationResponse> register(@RequestBody RegisterRequest request) {
        return ResponseEntity.ok(service.register(request));
    }

    @PostMapping(path = "/login")
    public ResponseEntity<EmployeeDTO> login(@RequestBody AuthenticationRequest request) throws ServletException, IOException {
        return ResponseEntity.ok(service.authenticate(request));
    }

    @PostMapping(path = "/logout")
    public ResponseEntity<String> logout() {
        return ResponseEntity.ok(service.deleteCookie());
    }
    

}
