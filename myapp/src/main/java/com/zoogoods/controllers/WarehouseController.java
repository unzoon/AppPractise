package com.zoogoods.controllers;

import com.zoogoods.modeld.Warehouse;
import com.zoogoods.services.WarehouseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping({"/warehouse"})
@RestController

public class WarehouseController  {
    private WarehouseService warehouseService;


    @Autowired
    public void setWarehouseService(WarehouseService warehouseService) {
        this.warehouseService = warehouseService;
    }


    @GetMapping
    public List<Warehouse> listWarehouse(){
        return warehouseService.listAll();
    }

    @GetMapping(path ="/{id}")
    public Warehouse getWarehouse(@PathVariable("id") Long id){
        return  warehouseService.getById(Long.valueOf(id));
    }


    @PutMapping
    public Warehouse saveOrUpdate(@RequestBody Warehouse warehouse)
            {

              return  warehouseService.saveOrUpdate(warehouse);
    }

    @PostMapping
    public Warehouse newWarehouse(@RequestBody Warehouse warehouse)
    {
        return warehouseService.create(warehouse);
    }


    @DeleteMapping(path ="/{id}")
    public Warehouse delete(@PathVariable("id") Long id){
        return warehouseService.delete(Long.valueOf(id));
    }
}

