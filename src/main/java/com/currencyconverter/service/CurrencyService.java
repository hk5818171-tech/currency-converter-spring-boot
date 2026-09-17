package com.currencyconverter.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

@Service
public class CurrencyService {

    private final RestClient restClient;

    public CurrencyService(RestClient.Builder restClientBuilder) {
        this.restClient = restClientBuilder.build();
    }

    public CurrencyResponse convertCurrency(
            double amount,
            String from,
            String to) {

        String url = "https://api.frankfurter.dev/v2/rate/"
                + from + "/" + to;

        ExchangeRateResponse response = restClient
                .get()
                .uri(url)
                .retrieve()
                .body(ExchangeRateResponse.class);

        double rate = response.rate();

        double convertedAmount = amount * rate;

        return new CurrencyResponse(
                amount,
                from,
                to,
                rate,
                convertedAmount
        );
    }

    public record ExchangeRateResponse(
            String base,
            String quote,
            double rate
    ) {
    }
}