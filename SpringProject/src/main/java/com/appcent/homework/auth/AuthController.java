package com.appcent.homework.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.appcent.homework.shared.CurrentUser;
import com.appcent.homework.shared.IViews;
import com.appcent.homework.user.IUserRepository;
import com.appcent.homework.user.User;
import com.fasterxml.jackson.annotation.JsonView;


@RestController
public class AuthController {
	
	@Autowired	
	IUserRepository userRepository;
	
	@JsonView(IViews.Base.class)
	@PostMapping("/api/1.0/auth")
	ResponseEntity<?> handleAuthentication(@CurrentUser User user) {					
		return ResponseEntity.ok(user);		
	}

}
