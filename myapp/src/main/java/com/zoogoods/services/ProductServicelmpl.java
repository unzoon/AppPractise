package com.zoogoods.services;
import com.zoogoods.modeld.Product;
import com.zoogoods.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductServicelmpl implements ProductService {


        private ProductRepository productRepository;


        @Autowired
        public ProductServicelmpl(ProductRepository productRepository) {
            this.productRepository = productRepository;

        }

        @Override
        public List<Product> listAll() {
            List<Product> products = new ArrayList<>();
            productRepository.findAll().forEach(products::add);
            return products;
        }

        @Override
        public Product getById(Long id) {
            return productRepository.findById(id).orElse(null);
        }

        @Override
        public Product create(Product product) {
            return productRepository.save(product);
        }

        @Override
        public Product delete(Long id) {

            productRepository.deleteById(id);
            return null;
        }
        @Override
        public  Product saveOrUpdate(Product product)
        {
            return productRepository.save(product);
        }

    }


