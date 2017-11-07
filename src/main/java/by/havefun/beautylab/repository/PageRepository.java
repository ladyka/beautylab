package by.havefun.beautylab.repository;

import by.havefun.beautylab.entity.BeautyPage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("pageRepository")
public interface PageRepository extends JpaRepository<BeautyPage, Long> {
    BeautyPage findByPath(String path);

    List<BeautyPage> findByTopMenu(boolean header);
    List<BeautyPage> findByFooterMenu(boolean header);
}
