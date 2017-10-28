package by.havefun.beautylab.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Type;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.Arrays;
import java.util.List;

import static java.lang.Boolean.TRUE;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "columba_user")
@EntityListeners(AuditingEntityListener.class)
public class BeautyUser extends BeautyAbstractEntity implements UserDetails {

	private static final long serialVersionUID = 2L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String username;
	private String password;
	@Type(type = "boolean")
	private Boolean accountNonExpired;
	@Type(type = "boolean")
	private Boolean accountNonLocked;
	@Type(type = "boolean")
	private Boolean credentialsNonExpired;
	@Type(type = "boolean")
	private Boolean enabled;

	@ManyToMany
	private List<BeautyRole> authorities;

	public static BeautyUser getNew(BeautyRole role) {
		BeautyUser user = new BeautyUser();
		user.setAccountNonExpired(TRUE);
		user.setAccountNonLocked(TRUE);
		user.setCredentialsNonExpired(TRUE);
		user.setEnabled(TRUE);
		user.setAuthorities(Arrays.asList(role));
		return user;
	}

	@Override
	public boolean isAccountNonExpired() {
		return accountNonExpired;
	}

	@Override
	public boolean isAccountNonLocked() {
		return accountNonLocked;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return credentialsNonExpired;
	}

	@Override
	public boolean isEnabled() {
		return enabled;
	}
}
