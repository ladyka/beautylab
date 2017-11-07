package by.havefun.beautylab.exception;

import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;

import java.time.LocalDateTime;

public class BeautyLabException extends Exception {
	protected static final int ERROR_CODE = 1;
	protected static final int ERROR_AUTH_WRONG_USER_OR_PASSWORD_CODE = 19;
	protected static final int USER_ALREADY_EXISTS = 101;

	@Getter
	@Setter
	private Integer code;
	@Getter
	@Setter
	private Integer httpCode;
	@Getter
	@Setter
	private String desc;
	@Getter
	@Setter
	private String descFix;
	@Getter
	@Setter
	private String type;
	@Getter
	@Setter
	private LocalDateTime timestamp;
	@Getter
	@Setter
	private String uuid;
	protected BeautyLabException(Integer code, HttpStatus status, String desc, String descFix, BeautyExceptionType type) {
		this.code = code;
		this.httpCode = status.value();
		this.desc = desc;
		this.descFix = descFix;
		this.type = type.getValue();
		this.timestamp = LocalDateTime.now();
	}
}
