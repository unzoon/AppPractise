package com.zoogoods.services;
import com.zoogoods.modeld.Provider;
import com.zoogoods.repositories.ProviderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProviderServicelmpl implements ProviderService{

        private ProviderRepository providerRepository;


        @Autowired
        public ProviderServicelmpl(ProviderRepository providerRepository) {
            this.providerRepository = providerRepository;

        }

        @Override
        public List<Provider> listAll() {
            List<Provider> providers = new ArrayList<>();
            providerRepository.findAll().forEach(providers::add);
            return providers;
        }

        @Override
        public Provider getById(Long id) {
            return providerRepository.findById(id).orElse(null);
        }

        @Override
        public Provider create(Provider provider) {
            return providerRepository.save(provider);
        }

        @Override
        public Provider delete(Long id) {
            providerRepository.deleteById(id);
            return null;
        }
        @Override
        public Provider saveOrUpdate(Provider provider)
        {
            return providerRepository.save(provider);
        }

    }

