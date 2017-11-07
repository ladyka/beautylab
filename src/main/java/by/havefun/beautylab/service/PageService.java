package by.havefun.beautylab.service;


import by.havefun.beautylab.dto.PageDto;

import java.util.List;

public interface PageService {
    PageDto getPage(String pathOfPage);
    List<PageDto> getHeaders();
    List<PageDto> getFooters();
}
