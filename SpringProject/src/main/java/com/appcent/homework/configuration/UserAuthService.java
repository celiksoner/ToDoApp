package com.appcent.homework.configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.appcent.homework.user.IUserRepository;
import com.appcent.homework.user.User;

@Service
public class UserAuthService implements UserDetailsService{

	@Autowired
	IUserRepository userRepository;
	
	@Override
	public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
		User inDB = userRepository.findByuserName(userName);
		if(inDB == null) 
			throw new UsernameNotFoundException("User not found");
		return inDB;
		
	}

}
