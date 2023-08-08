package com.backend.server.controller;

import com.backend.server.Model.Tickets;
import com.backend.server.repository.TicketsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

@RequestMapping("/tickets")
@CrossOrigin("*")
public class TicketsApis {

    @Autowired
    TicketsRepository ticketsRepository;
    @PostMapping("/bookTicket")
    public Tickets bookTicket(@RequestBody Tickets ticket){
        ticketsRepository.save(ticket);
        return ticket;
    }

    @GetMapping("/getTicketByUserId")
    public List<Tickets> getTicketByUserId(@RequestParam String mobileNumber){
        return ticketsRepository.findByMobileNumber(mobileNumber);
    }
}
