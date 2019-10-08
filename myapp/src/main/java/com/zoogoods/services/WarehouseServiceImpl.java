package com.zoogoods.services;

import com.zoogoods.modeld.Warehouse;
import com.zoogoods.repositories.WarehouseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class WarehouseServiceImpl implements WarehouseService {

    private WarehouseRepository warehouseRepository;
    //   private WarehouseFormToWarehouse productFormToProduct;

    @Autowired
    public WarehouseServiceImpl(WarehouseRepository warehouseRepository) {
        this.warehouseRepository = warehouseRepository;

    }

    @Override
    public List<Warehouse> listAll() {
        List<Warehouse> warehouses = new ArrayList<>();
        warehouseRepository.findAll().forEach(warehouses::add);
        return warehouses;
    }

    @Override
    public Warehouse getById(Long id) {
        return warehouseRepository.findById(id).orElse(null);
    }

    @Override
    public Warehouse create(Warehouse warehouse) {
        return warehouseRepository.save(warehouse);
    }

    @Override
    public Warehouse delete(Long id) {
        warehouseRepository.deleteById(id);
        return null;
    }
    @Override
    public  Warehouse saveOrUpdate(Warehouse warehouse)
    {
        return warehouseRepository.save(warehouse);
    }

}
