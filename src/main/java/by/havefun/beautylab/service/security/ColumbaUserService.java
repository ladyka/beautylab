package by.havefun.beautylab.service.security;


import by.havefun.beautylab.entity.BeautyUser;
import by.havefun.beautylab.exception.BeautyLabException;

import java.util.List;

public interface ColumbaUserService {
	List<BeautyUser> findAll();
	BeautyUser getUserByUsername(String userName) throws BeautyLabException;
}
