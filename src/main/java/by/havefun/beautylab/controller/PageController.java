package by.havefun.beautylab.controller;

import by.havefun.beautylab.dto.PageDto;
import by.havefun.beautylab.service.PageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.persistence.Lob;

@Controller
public class PageController {

    @Autowired
    private PageService pageService;

    @RequestMapping(value = "/")
    public String page(Model model, String page) {
        page = (page == null) ? "index" : page;
        final PageDto pageDto = pageService.getPage(page);
        setDefaultParamsInModel(model, pageDto.getTitle());

        model.addAttribute("text", pageDto.getText());
        return "page/read";
    }

    private void setDefaultParamsInModel(Model model, String title) {
        model.addAttribute("beautyTitle", title);
        model.addAttribute("headerMenus", pageService.getHeaders());
        model.addAttribute("footerMenus", pageService.getFooters());
    }

    @RequestMapping(value = "/{pathPage}/edit")
    public String pageEdit(Model model, @PathVariable("pathPage") String pathPage) {
        final PageDto pageDto = pageService.getPage(pathPage);
        setDefaultParamsInModel(model, pageDto.getTitle());
        model.addAttribute("page", pageDto);
        model.addAttribute("path", pathPage);
        return "page/edit";
    }

    @RequestMapping(value = "/api/page", method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity pageEdit(Long id,
                                   String path,
                                   String title,
                                   String text,
                                   Boolean topMenu,
                                   Boolean footerMenu
    ) {
        PageDto pageDto = pageService.update(id, path,title,text,topMenu,footerMenu);
        return ResponseEntity.ok(pageDto);
    }
}
