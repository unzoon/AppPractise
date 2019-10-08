import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Provider } from '../provider';
import { ProviderService } from '../provider.service';
@Component({
  selector: 'app-provider-show',
  templateUrl: './provider-show.component.html',
  styleUrls: ['./provider-show.component.scss']
})
export class ProviderShowComponent implements OnInit {

provider: Provider ;

constructor(private route: ActivatedRoute, private providerService: ProviderService, private location: Location) { }

	ngOnInit() {
		this.getProvider();
	}

	getProvider(): void {
		const id = + this.route.snapshot.paramMap.get('id');
		this.providerService.getProvider(id).subscribe(provider => this.provider = provider);
	}

	goBack(): void {
		this.location.back();
	}


}
