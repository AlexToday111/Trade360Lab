package com.example.back.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class StrategyValidationResponse {
    private Boolean valid;
    private String name;
    private List<String> parametersSchema;
    private String error;
}