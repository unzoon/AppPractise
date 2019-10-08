package com.zoogoods.modeld;


import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

    @Entity
    @Table(name = "warehouse")
    public class Warehouse  {

        @Id
        @Column(name = "id")
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        @OneToMany(mappedBy = "warehouse", cascade = CascadeType.ALL, fetch = FetchType.LAZY,orphanRemoval = true)
        private List<Product> products = new ArrayList<>();

        @Column(name = "address")
        private String address;
        @Column(name = "pickup")
        private String pickup;
        @Column(name = "phone")
        private Long phone;

        public Long getId() {
            return id;
        }

        public void setId(Long id) {
            this.id = id;
        }

        public String getAddress() {
            return address;
        }

        public void setAddress(String address) {
            this.address = address;
        }

        public String getPickup() {
            return pickup;
        }

        public void setPickup(String pickup) {
            this.pickup = pickup;
        }

        public Long getPhone() {
            return phone;
        }

        public void setPhone(Long phone) {
            this.phone = phone;
        }

        public List<Product> getProducts() {
            return products;
        }

        public void setProducts()
        {
            this.products = products;
        }

        }




