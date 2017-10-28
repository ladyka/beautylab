package by.havefun.beautylab.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;

@Configuration
public class ConfigDataSources {

	@Value("${spring.datasource.url}")
	private String url;
	@Value("${spring.datasource.username}")
	private String username;
	@Value("${spring.datasource.password}")
	private String password;
	@Value("${dataSource.driverClassName}")
	private String driver;

	@Bean
	public DataSource buildDataSourceDev() {
		DataSourceBuilder dsb = DataSourceBuilder.create();
		dsb.driverClassName(driver);
		dsb.url(url);
		dsb.username(username);
		dsb.password(password);
		return dsb.build();
	}
}