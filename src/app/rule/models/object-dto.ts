export class ObjectDto {
  objetId :any
  objetName: string = '';
  objetType: any;
  objetAction: string = '';
  objetContent: string = '';
  creationDate: any;
  orderObject : any;

  constructor( objetType: any, ) {

    this.objetType = objetType;

  }

  }
