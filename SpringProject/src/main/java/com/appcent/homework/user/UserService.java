package com.appcent.homework.user;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {
	
	
	IUserRepository userRepository;
	
	PasswordEncoder passwordEncoder;
	
	
	public UserService(IUserRepository userRepository,PasswordEncoder passwordEncoder ) {
		super();
		this.userRepository = userRepository;
		this.passwordEncoder = passwordEncoder;
	}



	public void save(User user) {
		user.setPassword(this.passwordEncoder.encode(user.getPassword()));
		userRepository.save(user);
	}
}
