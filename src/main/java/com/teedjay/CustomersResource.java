package com.teedjay;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

import java.util.List;

@Path("/customers")
public class CustomersResource {

    public record Customer(String code, String name, String category, String quantity) {}

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Customer> hello() {
        return List.of(
                new Customer("123", "Teedjay", "Coder", "1"),
                new Customer("234", "Vicky", "Teacher", "17"),
                new Customer("345", "Bram", "Vampire", "7"),
                new Customer("456", "Monie", "Singer", "3"),
                new Customer("567", "Mac", "Computer", "64"),
                new Customer("678", "Amiga", "Computer", "500")
        );
    }
    
}