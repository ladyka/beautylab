package by.havefun.beautylab.service.security;

import org.springframework.stereotype.Service;

@Service
public class PasswordServiceImpl implements PasswordService {
	@Override
	public boolean isValid(String passwordDatabase, String passwordRequest) {
		return passwordDatabase.equals(passwordRequest);
	}
}