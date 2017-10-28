package by.havefun.beautylab.service.security;

public interface PasswordService {
	boolean isValid(String passwordDatabase, String passwordRequest);
}