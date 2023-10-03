package technopolis.Auth;

import java.io.IOException;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import technopolis.Config.CookieService;
import technopolis.Config.JwtService;
import technopolis.Employee.EmployeeDTO;
import technopolis.Employee.EmployeeService;
import technopolis.User.Role;
import technopolis.User.User;
import technopolis.User.UserRepository;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

        private final UserRepository userRepository;
        private final EmployeeService employeeService;
        private final PasswordEncoder passwordEncoder;
        private final JwtService jwtService;
        private final AuthenticationManager authenticationManager;
        private final CookieService cookieService;

        public AuthenticationResponse register(RegisterRequest request) {
                var user = User
                                .builder()
                                .username(request.getUsername())
                                .password(passwordEncoder.encode(request.getPassword()))
                                .role(Role.USER)
                                .build();

                userRepository.save(user);
                var jwtToken = jwtService.generateToken(user);

                return AuthenticationResponse.builder()
                                .token(jwtToken)
                                .build();
        }

        public EmployeeDTO authenticate(AuthenticationRequest request) throws ServletException, IOException {
                authenticationManager.authenticate(
                                new UsernamePasswordAuthenticationToken(
                                                request.getUsername(),
                                                request.getPassword()));
                var user = userRepository.findByUsername(request.getUsername())
                                .orElseThrow();
                var jwtToken = jwtService.generateToken(user);

                cookieService.addCookieToken(jwtToken);

                return employeeService.findEmployee(request.getUsername());
        }

        public String deleteCookie() {
                cookieService.deleteCookieToken();

                return "Delete token success!";
        }

}
