import { Component} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  constructor(private http: HttpClient) { }
  uploadFile(event) {
    let elem = event.target;
    if (elem.files.length > 0) {
      let formData = new FormData();
      formData.append('file', elem.files[0]);
      this.http.post('http://localhost/test.php', formData).subscribe((data) => {
        console.log('Got some data from backend', data);
      }, (error) => {
        console.log('Error occurred ', error);
      });
    }
  }

}
