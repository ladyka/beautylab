package by.havefun.beautylab.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

import static by.havefun.beautylab.config.Config.DATE_TIME_PATTERN;
import static java.lang.Boolean.TRUE;

@Controller
public class HealthCheck {

	private Logger logger = LoggerFactory.getLogger(HealthCheck.class);

	@RequestMapping("/health-check")
	@ResponseBody
	public ResponseEntity<Map> healthCheck(HttpServletRequest request) {
		Map<String, Object> map = new HashMap<>();
		map.put("timestamp", LocalDateTime.now().format(DateTimeFormatter.ofPattern(DATE_TIME_PATTERN)));
		map.put("status", TRUE);
		StringBuilder message = new StringBuilder("\n\nRequest: \n");
		try {
			message.append(String.format("URI : %s\n", request.getRequestURI()));
			message.append(String.format("ADDRESS : %s\n", request.getRemoteAddr()));
			message.append(String.format("PARAMS : %s\n", new PrettyPrintingMap<>(request.getParameterMap()).toString()));
			message.append(String.format("USERAGENT : %s\n\n", request.getHeader("User-Agent")));
		} catch (Exception ignore) {
		}
		logger.info(message.toString());
		return ResponseEntity.ok(map);
	}

	public class PrettyPrintingMap<K, V> {
		private Map<K, V> map;

		public PrettyPrintingMap(Map<K, V> map) {
			this.map = map;
		}

		public String toString() {
			StringBuilder sb = new StringBuilder();
			Iterator<Map.Entry<K, V>> iter = map.entrySet().iterator();
			while (iter.hasNext()) {
				Map.Entry<K, V> entry = iter.next();
				sb.append(entry.getKey());
				sb.append('=').append('"');
				sb.append(String.valueOf(entry.getValue()));
				sb.append('"');
				if (iter.hasNext()) {
					sb.append(',').append(' ');
				}
			}
			return sb.toString();
		}
	}
}
