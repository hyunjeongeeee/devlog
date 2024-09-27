package com.example.devlog.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {

    @RequestMapping("")
    public String aboutMe() {
        return "index";
    }

    @GetMapping("/resume")
    public String resume() {
        return "sub/resume";
    }

    @GetMapping("/projects")
    public String projects() {
        return "sub/projects";
    }

    @GetMapping("/contact")
    public String contact() {
        return "sub/contact";
    }

}
