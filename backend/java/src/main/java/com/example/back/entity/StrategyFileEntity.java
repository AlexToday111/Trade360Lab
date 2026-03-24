package com.example.back.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import java.time.Instant;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "strategy_file")
public class StrategyFileEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String fileName;

    @Column(nullable = false)
    private String storagePath;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private StrategyStatus status;

    @Column
    private String validationError;

    @Column(columnDefinition = "TEXT")
    private String parametersSchemaJson;

    @Column(nullable = false, updatable = false)
    private Instant createdAt;

    @PrePersist
    protected void onCreate() {
        createdAt = Instant.now();
    }

    public enum StrategyStatus {
        PENDING, VALID, INVALID
    }
}