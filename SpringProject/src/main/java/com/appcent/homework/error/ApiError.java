package com.appcent.homework.error;

import java.util.Date;
import java.util.Map;

import com.appcent.homework.shared.IViews;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonView;

import lombok.Data;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)

public class ApiError {
	@JsonView(IViews.Base.class)
	private int status;
	
	@JsonView(IViews.Base.class)
	private String message;

	@JsonView(IViews.Base.class)
	private String path;
	
	@JsonView(IViews.Base.class)
	private long timestamp = new Date().getTime();
	
	private Map<String, String> validationErrors;
	
	public ApiError(int status, String message , String path) {
		this.status = status;
		this.message = message;
		this.path = path;
	}
}
