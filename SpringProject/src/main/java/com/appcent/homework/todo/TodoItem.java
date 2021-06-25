package com.appcent.homework.todo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;

import lombok.Data;


@Entity
@Data
public class TodoItem {
	
	
	private Long id;
	@NotBlank
	private String task;
	private boolean status;
	
	
	public TodoItem() {
		super();
	}


	public TodoItem(Long id, @NotBlank String task, boolean status) {
		super();
		this.id = id;
		this.task = task;
		this.status = status;
	}


	@Id
	@GeneratedValue
	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getTask() {
		return task;
	}


	public void setTask(String task) {
		this.task = task;
	}


	public boolean isStatus() {
		return status;
	}


	public void setStatus(boolean status) {
		this.status = status;
	}
	
	
	
	
	

}
