import { Component } from '@angular/core';
import { DonorService } from './../api/donor.service';
import { Router } from '@angular/router';
import { CallNumber } from '@ionic-native/call-number/ngx';
@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {
	donors: any;
	query = '';
	constructor(
		private ds: DonorService,
		private router: Router,
		private callNumber: CallNumber
	) {
		fetch('./assets/data/data.json')
			.then((res) => res.json())
			.then((json) => {
				this.donors = json;
				this.ds.allData = this.donors;
				console.log(this.ds.allData);
			});
	} //constructor
	ngOnInit() {} //ngOnInit
	DonorDetails(donor_id: any) {
		this.ds.id = donor_id;
		console.log(donor_id);
		this.router.navigateByUrl('/details');
	} //DonerDetails
	CallDonor(number: any) {
		this.callNumber
			.callNumber(number, true)
			.then((res) => console.log('Launched dialer!', res))
			.catch((err) => console.log('Error launching dialer', err));
	}
}
