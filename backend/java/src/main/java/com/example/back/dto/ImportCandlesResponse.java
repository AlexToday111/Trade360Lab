package com.example.back.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ImportCandlesResponse {

    @NotBlank
    private String status;

    @NotBlank
    private String exchange;

    @NotBlank
    private String symbol;

    @NotBlank
    private String interval;

    @NotNull
    private int imported;

    @NotBlank
    private String from;

    @NotBlank
    private String to;
}