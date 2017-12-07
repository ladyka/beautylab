package by.havefun.beautylab.service;

import by.havefun.beautylab.dto.PageDto;
import by.havefun.beautylab.entity.BeautyPage;
import by.havefun.beautylab.repository.PageRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class PageServiceImpl implements PageService {

    private final PageRepository repository;

    @Autowired
    public PageServiceImpl(PageRepository repository) {
        this.repository = repository;
    }


    @Override
    public PageDto getPage(String path) {
        BeautyPage beautyPage = repository.findByPath(path);
        PageDto dto = new PageDto();
        if (beautyPage == null) {
            dto.setTitle("404. NOT FOUND");
            dto.setText("<center><h1>404 NOT FOUND</h1></center>");
        } else {
            BeanUtils.copyProperties(beautyPage, dto);
        }
        return dto;
    }

    private List<PageDto> getPagesMenu(List<BeautyPage> menuPages) {
        return (menuPages == null) ? Collections.emptyList() :
                menuPages.stream().map(BeautyPage::toPageDTO).collect(Collectors.toList());

    }

    @Override
    public List<PageDto> getHeaders() {
        return getPagesMenu(repository.findByTopMenu(true));
    }

    @Override
    public List<PageDto> getFooters() {
        return getPagesMenu(repository.findByFooterMenu(true));
    }

    @Override
    public PageDto update(Long id, String path, String title, String text, Boolean topMenu, Boolean footerMenu) {
        BeautyPage beautyPage = (id == null) ? new BeautyPage() : repository.findOne(id);
        beautyPage.setPath(path);
        beautyPage.setText(text);
        beautyPage.setTitle(title);
        beautyPage.setTopMenu(topMenu);
        beautyPage.setFooterMenu(footerMenu);
        repository.save(beautyPage);
        return beautyPage.toPageDTO();
    }
}
