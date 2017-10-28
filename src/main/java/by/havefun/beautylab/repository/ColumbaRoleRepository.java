package by.havefun.beautylab.repository;

import by.havefun.beautylab.entity.BeautyRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository("columbaRoleRepository")
public interface ColumbaRoleRepository extends JpaRepository<BeautyRole, Long> {

}