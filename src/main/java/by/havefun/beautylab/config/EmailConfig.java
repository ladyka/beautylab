package by.havefun.beautylab.config;

import lombok.Data;

@Data
public class EmailConfig {
    private Boolean sendEmail;
    private String loginEmail;
    private String passwordEmail;
    private String serverName;
    private String smtpPort;
    private String mailSubject;
    private String mailBodyBefore;
    private String mailBodyAfter;
}
