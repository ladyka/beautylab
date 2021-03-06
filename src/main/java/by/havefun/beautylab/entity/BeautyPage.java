package by.havefun.beautylab.entity;

import by.havefun.beautylab.dto.PageDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "beauty_page")
@EntityListeners(AuditingEntityListener.class)
public class BeautyPage extends BeautyAbstractEntity {

    private static final long serialVersionUID = 201711050016L;
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "beauty_page_id_seq")
    @SequenceGenerator(
            name = "beauty_page_id_seq",
            sequenceName = "beauty_page_sequence"
    )
    private Long id;
    private String path;
    private String title;
    private String text;
    private Boolean topMenu;
    private Boolean footerMenu;

    public PageDto toPageDTO() {
        PageDto dto = new PageDto();
        dto.setPath(getPath());
        dto.setTitle(getTitle());
        dto.setText(getText());
        return dto;
    }
}