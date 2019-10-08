package com.zoogoods.controllers;


import com.zoogoods.modeld.Provider;
import com.zoogoods.services.ProviderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping({"/provider"})
@RestController

public class ProviderController {

        private ProviderService providerService;

        @Autowired
        public void setProviderService(ProviderService providerService) {
            this.providerService = providerService;
        }


        @GetMapping
        public List<Provider> listProvider(){
            return providerService.listAll();
        }

        @GetMapping(path ="/{id}")
        public Provider getProvider(@PathVariable("id") Long id){
            return  providerService.getById(Long.valueOf(id));
        }


        @PutMapping
        public Provider saveOrUpdate(@RequestBody Provider provider)
        {
            return  providerService.saveOrUpdate(provider);
        }

        @PostMapping
        public Provider newProduct(@RequestBody Provider provider)
        {
            return providerService.create(provider);
        }

        @DeleteMapping(path ="/{id}")
        public Provider delete(@PathVariable("id") Long id){
            return providerService.delete(Long.valueOf(id));
        }

    }
