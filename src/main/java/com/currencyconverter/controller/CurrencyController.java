package com.currencyconverter.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.currencyconverter.service.CurrencyResponse;
import com.currencyconverter.service.CurrencyService;

@RestController
@RequestMapping("/api/currency")
public class CurrencyController {

    private final CurrencyService currencyService;

    public CurrencyController(CurrencyService currencyService) {
        this.currencyService = currencyService;
    }

    @GetMapping("/test")
    public String test() {
        return "Currency Backend is Working!";
    }

    @GetMapping("/convert")
    public CurrencyResponse convert(
            @RequestParam double amount,
            @RequestParam String from,
            @RequestParam String to) {

        return currencyService.convertCurrency(amount, from, to);
    }
}