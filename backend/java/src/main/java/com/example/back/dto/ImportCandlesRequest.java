package com.example.back.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ImportCandlesRequest {

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
}