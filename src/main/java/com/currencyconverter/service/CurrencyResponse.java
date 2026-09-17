package com.currencyconverter.service;

public record CurrencyResponse(
        double amount,
        String from,
        String to,
        double rate,
        double convertedAmount
) {
}