import { Component, OnInit } from '@angular/core'
import { UploadService } from '../../services/upload/upload.service'
import { FirebaseApp } from 'angularfire2'
import 'firebase/storage'
import * as JsZip from 'jszip'

@Component({
  selector: 'app-unzip',
  templateUrl: './unzip.component.html',
  styleUrls: ['./unzip.component.sass']
})
export class UnzipComponent implements OnInit {
  values = ''
  file: File

  constructor(private up: UploadService) { }

  ngOnInit() {
  }

  onChange(e: Event): void {
    this.values = (<HTMLInputElement>e.target).files[0].name
    this.file = (<HTMLInputElement>e.target).files[0]
    this.unzip(this.file)
  }

  unzip(file: File): void {
    this.up.unzip(file)
  }

}
