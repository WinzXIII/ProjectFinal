package technopolis.Config;

import java.io.IOException;

import org.springframework.stereotype.Service;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CookieService {

    private final HttpServletResponse httpServletResponse;

    public void addCookieToken(String jwtToken) throws ServletException, IOException {
        int cookieAgeInSeconds = 43200;

        Cookie cookie = new Cookie("token", jwtToken);
        cookie.setMaxAge(cookieAgeInSeconds);
        cookie.setHttpOnly(true);
        cookie.setSecure(true);
        cookie.setPath("/");

        httpServletResponse.addCookie(cookie);
    }

    public void deleteCookieToken() {
        Cookie cookie = new Cookie("token", null);
        cookie.setMaxAge(0);
        cookie.setPath("/");

        httpServletResponse.addCookie(cookie);
    }

    String extractTokenFromCookies(HttpServletRequest httpServletRequest) throws ServletException, IOException {
        Cookie[] cookies = httpServletRequest.getCookies();
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if ("token".equals(cookie.getName())) {
                    return cookie.getValue();
                }
            }
        }

        return null;
    }
}
