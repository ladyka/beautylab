package by.havefun.beautylab.service.security;


import by.havefun.beautylab.entity.BeautyUser;
import by.havefun.beautylab.exception.BeautyLabException;
import by.havefun.beautylab.repository.ColumbaRoleRepository;
import by.havefun.beautylab.repository.ColumbaUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ColumbaUserServiceImpl implements ColumbaUserService {

	@Autowired
	private PasswordService passwordService;

	@Autowired
	private ColumbaUserRepository usersRepository;

	@Autowired
	private ColumbaRoleRepository roleRepository;

	@Override
	public List<BeautyUser> findAll() {
		return usersRepository.findAll();
	}


	@Override
	public BeautyUser getUserByUsername(String userName) throws BeautyLabException {
		return usersRepository.findByUsername(userName);
	}
}
