package in.codersage.charuvidya.web.rest.vm;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MyContoller {

    @GetMapping("/demo")
    public String demo(){
        return "Hello All";
    }

}
