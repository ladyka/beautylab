package by.havefun.beautylab.entity;

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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String path;
    private String title;
    private String text;
    private Boolean topMenu;
    private Boolean footerMenu;
}