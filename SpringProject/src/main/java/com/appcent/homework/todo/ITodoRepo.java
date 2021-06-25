package com.appcent.homework.todo;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ITodoRepo extends JpaRepository<TodoItem, Long> {

}
