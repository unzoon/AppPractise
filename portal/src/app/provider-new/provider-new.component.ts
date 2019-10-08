import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Provider } from '../provider';
import { ProviderService } from '../provider.service';
@Component({
  selector: 'app-provider-new',
  templateUrl: './provider-new.component.html',
  styleUrls: ['./provider-new.component.scss']
})
export class ProviderNewComponent implements OnInit {

@Input() provider: Provider = { id: 0, name: '', fio: '', phone: null,address: ''};

constructor(private providerService: ProviderService, private location: Location) { }

	ngOnInit() {
	}

	save(): void {
		this.providerService.addProvider(this.provider).subscribe(() => this.goBack());
	}

	goBack(): void {
		this.location.back();
  }

}




