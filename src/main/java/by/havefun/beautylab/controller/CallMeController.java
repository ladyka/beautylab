package by.havefun.beautylab.controller;

import by.havefun.beautylab.service.SendEmail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.Map;

@Controller
public class CallMeController {

    @Autowired
    private SendEmail sendEmail;

    @RequestMapping("/callme")
    @ResponseBody
    public ResponseEntity<Map<String, String>> callme(String fname, String lname, String mphone) {
        String m = String.format("Имя %s\nФамилия %s \nТелефон %s \n", fname, lname, mphone);
        sendEmail.send("fornotificationsbeautylab@ladyka.tk", m);
        Map<String, String> result = new HashMap<>();
        result.put("result", "success");
        result.put("msg", "Спасибо за обращение");
        return ResponseEntity.ok(result);
    }
}
