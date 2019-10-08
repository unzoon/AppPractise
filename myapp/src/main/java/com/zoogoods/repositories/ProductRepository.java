package com.zoogoods.repositories;

import com.zoogoods.modeld.Product;
import org.springframework.data.repository.CrudRepository;

public interface ProductRepository extends CrudRepository<Product, Long> {
}
