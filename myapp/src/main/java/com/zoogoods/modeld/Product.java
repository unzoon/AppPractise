package com.zoogoods.modeld;
import com.fasterxml.jackson.annotation.JsonProperty;
import javax.persistence.*;

@Entity
@Table(name = "product")
public class Product {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name")
    private String name;
    @Column(name = "price")
    private int price;



    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="w_id", nullable = false )
    private Warehouse warehouse;

    @JsonProperty("w_id")
    private void unpackNestedW(Long id) {
        this.warehouse = new Warehouse();
        warehouse.setId(id);
    }

    public Long getW_id() { return warehouse.getId(); }

    public void setW_id(Provider provider) {
        this.warehouse = warehouse;
    }


    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="p_id", nullable = false )
    private Provider provider;


    @JsonProperty("p_id")
    private void unpackNestedP(Long id) {
        this.provider = new Provider();
        provider.setId(id);
    }

    public Long getP_id() { return provider.getId(); }

    public void setP_id(Provider provider) {
        this.provider = provider;
    }

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

    public int getPrice() { return price;}
    public void setPrice(int price) {
        this.price = price;
    }






}
