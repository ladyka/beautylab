package by.havefun.beautylab.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.Map;

import static by.havefun.beautylab.config.Config.DATE_TIME_PATTERN;
import static java.lang.Boolean.TRUE;

@Controller
@RequestMapping(name = "/")
public class PageController {

    @RequestMapping("/")
    public String index() {
        return "index";
    }
}
