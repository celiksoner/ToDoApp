package com.appcent.homework;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.appcent.homework.todo.ITodoRepo;
import com.appcent.homework.user.UserService;


@SpringBootApplication
public class HomeworkApplication {

	public static void main(String[] args) {
		SpringApplication.run(HomeworkApplication.class, args);
	}

	@Bean
	CommandLineRunner CreateInitialUsers(UserService userService, ITodoRepo todoRepo) {
		return (args) -> {
				
				
			};
			
		
	}	
	
}
