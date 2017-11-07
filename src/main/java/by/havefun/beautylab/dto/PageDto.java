package by.havefun.beautylab.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PageDto {
    private Long id;
    public  String path;
    public  String title;
    private String text;
    private Boolean topMenu;
    private Boolean footerMenu;
}
