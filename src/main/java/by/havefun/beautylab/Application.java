package by.havefun.beautylab;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.security.NoSuchAlgorithmException;

@SpringBootApplication(exclude={org.springframework.boot.autoconfigure.thymeleaf.ThymeleafAutoConfiguration.class})
public class Application {
	public static void main(String[] args) throws NoSuchAlgorithmException {
		SpringApplication.run(new Class[]{Application.class, by.havefun.beautylab.config.Config.class}, args);
	}
}
