import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Provider } from '../provider';
import { ProviderService } from '../provider.service';
@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.scss']
})
export class ProviderListComponent implements OnInit {

providers: Provider[] = [];

constructor(private route: ActivatedRoute, private providerService: ProviderService) { }

	ngOnInit() {
		this.getProviders();
	}

	getProviders(): void {
		this.providerService.getProviders().subscribe(providers => this.providers = providers);
	}

	delete(provider: Provider): void {
		this.providerService.deleteProvider(provider).subscribe(success=> {this.getProviders();});
	}

}


