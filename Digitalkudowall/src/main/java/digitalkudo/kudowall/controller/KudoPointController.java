package digitalkudo.kudowall.controller;

import digitalkudo.kudowall.model.KudoPoint;
import digitalkudo.kudowall.repository.KudoPointRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class KudoPointController {
    @Autowired
    private KudoPointRepository kudoPointRepository;
    @PostMapping(value = "/kudopoint", consumes = {MediaType.APPLICATION_JSON_VALUE})
    public KudoPoint kudoPoint(@RequestBody(required = false) KudoPoint kp){

        return kudoPointRepository.save(kp);
    }

    }


