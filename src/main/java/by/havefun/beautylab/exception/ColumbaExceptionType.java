package by.havefun.beautylab.exception;

public enum  ColumbaExceptionType {
	SYSTEM("System"), APPLICATION("Application");
	private String value;

	ColumbaExceptionType(String value) {
		this.value = value;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}
}