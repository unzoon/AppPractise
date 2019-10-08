package com.zoogoods.services;


import com.zoogoods.modeld.Warehouse;

import java.util.List;


public interface WarehouseService {

    List<Warehouse> listAll();

    Warehouse getById(Long id);

    Warehouse create(Warehouse warehouse);

    Warehouse delete(Long id);

    Warehouse saveOrUpdate(Warehouse warehouse);
}
