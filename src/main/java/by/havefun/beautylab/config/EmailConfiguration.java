package by.havefun.beautylab.config;

import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Setter
@Getter
@Configuration
public class EmailConfiguration {
    @Value("${email.sendEmail}")
    private String sendEmail;
    @Value("${email.loginEmail}")
    private String loginEmail;
    @Value("${email.passwordEmail}")
    private String passwordEmail;
    @Value("${email.serverName}")
    private String serverName;
    @Value("${email.smtpPort}")
    private String smtpPort;
    @Value("${email.mailSubject}")
    private String mailSubject;
    @Value("${email.mailBodyBefore}")
    private String mailBodyBefore;
    @Value("${email.mailBodyAfter}")
    private String mailBodyAfter;

    @Bean
    public EmailConfig emailConfig() {
        EmailConfig ec = new EmailConfig();
        BeanUtils.copyProperties(this, ec);
        ec.setSendEmail("true".equals(sendEmail));
        return ec;
    }
}