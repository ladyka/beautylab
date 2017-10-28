package by.havefun.beautylab.repository;

import by.havefun.beautylab.entity.BeautyUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository("columbaUserRepository")
public interface ColumbaUserRepository extends JpaRepository<BeautyUser, Long> {
	BeautyUser findByUsernameIgnoreCase(String username);
	@Query(value = "select u from BeautyUser u where u.username = ?1")
	BeautyUser findByUsername(String username);
}