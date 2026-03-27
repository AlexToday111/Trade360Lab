package com.example.back.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.util.Map;

@Data
@NoArgsConstructor
public class CreateRunRequest {

    @NotNull
    private Long strategyId;

    @NotBlank
    private String exchange;

    @NotBlank
    private String symbol;

    @NotBlank
    private String interval;

    @NotBlank
    private String from;

    @NotBlank
    private String to;

    @NotNull
    private Map<String, Object> params;
}
