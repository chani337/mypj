package com.smartfarm.prediction.client;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.util.Map;

@Component
@RequiredArgsConstructor
public class AiServerClient {

    private final WebClient aiWebClient;

    public Mono<Map> requestPrediction(Map<String, Object> envData) {
        return aiWebClient.post()
                .uri("/api/v1/prediction/")
                .bodyValue(envData)
                .retrieve()
                .bodyToMono(Map.class);
    }
}
