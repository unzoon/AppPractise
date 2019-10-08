package com.zoogoods.services;

import com.zoogoods.modeld.Provider;

import java.util.List;

public interface ProviderService {

    List<Provider> listAll();

    Provider getById(Long id);

    Provider create(Provider product);

    Provider delete(Long id);

    Provider saveOrUpdate(Provider product);

    }


