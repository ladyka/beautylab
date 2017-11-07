package by.havefun.beautylab.controller;

import by.havefun.beautylab.dto.PageDto;
import by.havefun.beautylab.service.PageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class PageController {

    @Autowired
    private PageService pageService;

    @RequestMapping(value = "/")
    public String index(Model model, String page) {
        page = (page == null) ? "index" : page;
        final PageDto pageDto = pageService.getPage(page);
        model.addAttribute("text", pageDto.getText());
        model.addAttribute("beautyTitle", pageDto.getTitle());
        model.addAttribute("headerMenus", pageService.getHeaders());
        model.addAttribute("footerMenus", pageService.getFooters());
        return "page";
    }
}
