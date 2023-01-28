export interface Project {
  "featured": boolean,
  "title": string,
  "slug": string,
  "summary": string,
  "client"?: string,
  "service"?: string,
  "about"?: any
  "thumbnail": {
    [key:string] : any,
    "fields": {
      [key:string] : any,
      "title": string,
      "file": {
        "url": string,
        "details": {
          "size": number,
          "image": {
            "width": number,
            "height": number
          }
        },
        "fileName": string,
        "contentType": string
      }
    }
  },
  "icon": {
    [key:string] : any,
    "fields": {
      [key:string] : any,
      "title": string,
      "file": {
        "url": string,
        "details": {
          "size": number,
          "image": {
            "width": number,
            "height": number
          }
        },
        "fileName": string,
        "contentType": string
      }
    }
  },
  "github"?: string,
  "demo"?: string,
  "technologies"?: Array<string>
}