import { Component, OnInit } from '@angular/core';
import { DonorService } from './../api/donor.service';

@Component({
	selector: 'app-details',
	templateUrl: './details.page.html',
	styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
	donarDetails: any;
	constructor(private ds: DonorService) {
		this.donarDetails = this.ds.allData.filter(
			(record) => record.Emp_Reg_No === this.ds.id
		);
		console.log(this.donarDetails);
	}

	ngOnInit() {}
}
