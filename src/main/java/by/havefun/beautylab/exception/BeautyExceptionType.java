package by.havefun.beautylab.exception;

public enum BeautyExceptionType {
	SYSTEM("System"), APPLICATION("Application");
	private String value;

	BeautyExceptionType(String value) {
		this.value = value;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}
}