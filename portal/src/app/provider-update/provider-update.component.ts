import { Component, OnInit,Input} from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Provider } from '../provider';
import { ProviderService } from '../provider.service';
@Component({
  selector: 'app-provider-update',
  templateUrl: './provider-update.component.html',
  styleUrls: ['./provider-update.component.scss']
})
export class ProviderUpdateComponent implements OnInit {

@Input() provider: Provider;

constructor(private route: ActivatedRoute, private providerService: ProviderService, private location: Location) { }

ngOnInit() {
		this.getProvider();
	}

	getProvider(): void {
		const id = + this.route.snapshot.paramMap.get('id');
		this.providerService.getProvider(id).subscribe(provider => this.provider = provider);
	}

	save(): void {
		this.providerService.updateProvider(this.provider).subscribe(success=> {this.goBack();});
	}

	goBack(): void {
		this.location.back();

}
}
