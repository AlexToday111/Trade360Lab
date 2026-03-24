package com.example.back.dto;

import com.example.back.entity.StrategyFileEntity;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;

import java.time.Instant;
import java.util.List;

@Slf4j
public record StrategyResponse(
        Long id,
        String name,
        String fileName,
        StrategyFileEntity.StrategyStatus status,
        String validationError,
        List<String> parametersSchema,
        Instant createdAt
) {
    private static final ObjectMapper objectMapper = new ObjectMapper();

    public static StrategyResponse fromEntity(StrategyFileEntity entity) {
        List<String> parametersSchema = null;

        if (entity.getParametersSchemaJson() != null && !entity.getParametersSchemaJson().isEmpty()) {
            try {
                parametersSchema = objectMapper.readValue(
                        entity.getParametersSchemaJson(),
                        new TypeReference<List<String>>() {}
                );
            } catch (Exception e) {
                log.error("Failed to parse parametersSchemaJson", e);
                parametersSchema = List.of();
            }
        }

        return new StrategyResponse(
                entity.getId(),
                entity.getName(),
                entity.getFileName(),
                entity.getStatus(),
                entity.getValidationError(),
                parametersSchema,
                entity.getCreatedAt()
        );
    }
}