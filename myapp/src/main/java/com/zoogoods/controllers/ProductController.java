package com.zoogoods.controllers;


import com.zoogoods.modeld.Product;
import com.zoogoods.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping({"/product"})
@RestController
public class ProductController {

    private ProductService productService;

    @Autowired
    public void setProductService(ProductService productService) {
        this.productService = productService;
    }


    @GetMapping
    public List<Product> listProduct(){
        return productService.listAll();
    }

    @GetMapping(path ="/{id}")
    public Product getProduct(@PathVariable("id") Long id){
        return  productService.getById(Long.valueOf(id));
    }


    @PutMapping
    public Product saveOrUpdate(@RequestBody Product product)
    {
        return  productService.saveOrUpdate(product);
    }

    @PostMapping
    public Product newProduct(@RequestBody Product product)
    {
        return productService.create(product);
    }

    @DeleteMapping(path ="/{id}")
    public Product delete(@PathVariable("id") Long id){
        return productService.delete(Long.valueOf(id));
    }


}


