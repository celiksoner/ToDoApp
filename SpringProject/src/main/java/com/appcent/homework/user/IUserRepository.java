package com.appcent.homework.user;

import org.springframework.data.jpa.repository.JpaRepository;



public interface IUserRepository extends JpaRepository<User,Long> {
	User findByuserName(String userName);
}
