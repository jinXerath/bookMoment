package com.bookMoment.user.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import lombok.extern.slf4j.Slf4j;

@Controller
@RequestMapping("/user/*")
@Slf4j
public class UserController {
	
	@GetMapping("/userSign/userSignUp")
	public String userSignUp() {
		log.info("userSignUp 메소드 호출 성공");
		return "user/userSign/userSignUp";
	}
}
