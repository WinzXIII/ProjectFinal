package com.example.accessingdatamysql;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.CrossOrigin;

@Controller // This means that this class is a Controller
@CrossOrigin(origins = "*", allowedHeaders = "*") // Config CORS for API
@RequestMapping(path="/technopolis") // This means URL's start with /demo (after Application path)
public class MainController {
  @Autowired // This means to get the bean called userRepository
         // Which is auto-generated by Spring, we will use it to handle the data
  private UserRepository userRepository;

  @PostMapping(path="/user/add") // Map ONLY POST Requests
  public @ResponseBody String addNewUser (@RequestParam String codeID , @RequestParam String name , @RequestParam String position , @RequestParam String work 
      , @RequestParam String agency , @RequestParam String email , @RequestParam String password , @RequestParam String settings , @RequestParam String img) {
    // @ResponseBody means the returned String is the response, not a view name
    // @RequestParam means it is a parameter from the GET or POST request

    User n = new User();
    n.setCodeID(codeID);
    n.setName(name);
    n.setPosition(position);
    n.setWork(work);
    n.setAgency(agency);
    n.setEmail(email);
    n.setPassword(password);
    n.setSettings(settings);
    n.setImg(img);

    userRepository.save(n);
    return "Saved";
  }

  @GetMapping(path="/user")
  public @ResponseBody Iterable<User> getAllUsers() {
    // This returns a JSON or XML with the users
    return userRepository.findAll();
  }
}