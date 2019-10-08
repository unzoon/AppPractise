package com.zoogoods.modeld;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "provider")
public class Provider  {

        @Id
        @Column(name = "id")
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        @OneToMany(mappedBy = "provider", cascade = CascadeType.ALL, fetch = FetchType.LAZY,orphanRemoval = true)
        private List<Product> products = new ArrayList<>();

        @Column(name = "name")
        private String name;
        @Column(name = "fio")
        private String fio;
        @Column(name = "phone")
        private Long phone;
        @Column(name = "address")
        private String address;


        public Long getId() {
            return id;
        }

        public void setId(Long id) {
            this.id = id;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getFio() {
            return fio;
        }

        public void setFio(String fio) {
            this.fio = fio;
        }

        public Long getPhone() {
            return phone;
        }

        public void setPhone(Long phone) {
            this.phone = phone;
        }

        public String getAddress() {
            return address;
        }

        public void setAddress(String address) {
            this.address = address;
        }

        public List<Product> getProducts() {
            return products;
        }

        public void setProducts()
        {
            this.products = products;
        }

    }


