package com.zoogoods.services;
import com.zoogoods.modeld.Product;

import java.util.List;

public interface ProductService {

    List<Product> listAll();

    Product getById(Long id);

    Product create(Product product);

    Product delete(Long id);

    Product saveOrUpdate(Product product);

}
