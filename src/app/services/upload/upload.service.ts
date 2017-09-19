import { Injectable } from '@angular/core'
import { FirebaseApp } from 'angularfire2'
import 'firebase/storage'
import * as JsZip from 'jszip'
const jszip: JsZip = new JsZip()

@Injectable()
export class UploadService {

  private folder: string

  constructor(private app: FirebaseApp) {
  }

  unzip(zip: File): void {
    jszip.loadAsync(zip)
    .then( files => {
      this.folder = files.name
      console.log(files)
      files.forEach( (ele, file) => {
        // this.setFile(file)
      })
    })
  }

  private setFile(file: any): void {
    if (!file.dir) {
      if (file.name.endsWith('.jpg') || file.name.endsWith('.png')) {
        const type = (file.name.endsWith('.jpg')) ? 'image/jpg' : 'image/png'
        const name = file.name
        this.createBlob(file, name, type)
        .then(nwFile => {
          this.upload(nwFile)
        })
      }
    }
  }

  private createBlob (file: any, name: string, type: string): Promise<Object> {
    return new Promise ((resolve) => {
      const newFile: {name: string, type: string , Blob: Uint8Array} = {name: name, Blob: null, type: type}
      file.async('uint8array')
      .then( blob => {
        newFile.Blob = blob
        resolve(newFile)
      })
    })
  }

  private upload(data: any): void {
    const ref = this.app.storage().ref('mangas/nombre/scan')
    ref.child(`${this.folder}/${data.name}`)
    .put(data.Blob, {contentType: data.type})
    .then( snap => {
      console.log(snap.metadata.name + ' subido')
    })
    .catch( err => {
      console.log(err)
    })
  }

}
