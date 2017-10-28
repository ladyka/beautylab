package by.havefun.beautylab.exception.beauty.user;

import by.havefun.beautylab.exception.BeautyLabException;
import by.havefun.beautylab.exception.ColumbaExceptionType;
import org.springframework.http.HttpStatus;

public class UserAlreadyExists extends BeautyLabException {

	public UserAlreadyExists() {
		super(USER_ALREADY_EXISTS, HttpStatus.BAD_REQUEST, "Пользователь существует", "Придумайте другой логин", ColumbaExceptionType.APPLICATION);
	}
}