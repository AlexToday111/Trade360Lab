package com.example.back.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class PythonHealthResponse {

    @NotBlank
    private String status;

    @NotBlank
    private String service;
}