package com.cognizant.jwtAuth.controller;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import javax.crypto.SecretKey;
import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@RestController
public class AuthenticationController {

    private static final Logger LOGGER = LoggerFactory.getLogger(AuthenticationController.class);

    private static final SecretKey SECRET_KEY = Keys.secretKeyFor(SignatureAlgorithm.HS256);

    @GetMapping("/authenticate")
    public Map<String, String> authenticate(@RequestHeader("Authorization") String authHeader) {
        LOGGER.info("START - /authenticate");
        LOGGER.debug("Authorization Header: {}", authHeader);

        String username = getUser(authHeader);
        LOGGER.debug("Decoded Username: {}", username);

        String token = generateJwt(username);
        LOGGER.debug("Generated JWT: {}", token);

        Map<String, String> response = new HashMap<>();
        response.put("token", token);

        LOGGER.info("END - /authenticate");
        return response;
    }

    private String getUser(String authHeader) {
        LOGGER.debug("Inside getUser()");
        if (authHeader == null || !authHeader.startsWith("Basic ")) {
            throw new IllegalArgumentException("Missing or invalid Authorization header");
        }

        try {
            String base64Credentials = authHeader.substring("Basic ".length()).trim();
            byte[] decodedBytes = Base64.getDecoder().decode(base64Credentials);
            String credentials = new String(decodedBytes);
            LOGGER.debug("Decoded Credentials: {}", credentials);

            String[] parts = credentials.split(":", 2);
            if (parts.length != 2) {
                throw new IllegalArgumentException("Malformed credentials");
            }

            return parts[0];

        } catch (Exception e) {
            LOGGER.error("Failed to decode credentials", e);
            throw new RuntimeException("Invalid Authorization format", e);
        }
    }

    private String generateJwt(String user) {
        LOGGER.debug("Generating JWT for user: {}", user);

        return Jwts.builder()
                .setSubject(user)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 20 * 60 * 1000)) // 20 min expiry
                .signWith(SECRET_KEY)
                .compact();
    }
}
