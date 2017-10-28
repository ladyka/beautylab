package by.havefun.beautylab.exception.beauty.user;

import by.havefun.beautylab.exception.BeautyLabException;
import by.havefun.beautylab.exception.ColumbaExceptionType;
import org.springframework.http.HttpStatus;

public class ErrorAuthWrongUserOrPassword extends BeautyLabException {

	public ErrorAuthWrongUserOrPassword() {
		super(
				ERROR_AUTH_WRONG_USER_OR_PASSWORD_CODE,
				HttpStatus.BAD_REQUEST,
				"Неверный логин или пароль",
				"Необходимо повторить запрос с корректными данными.",
				ColumbaExceptionType.SYSTEM
		);
	}
}
