export interface userInfo {
  company: string;
  name: string;
  additional: string;
  street: string;
  postalCode: string;
  country: string;
  iban: string;
  bic: string;
  bankName: string;
  fax: string;
  email: string;
  birthday: string;
  homepage: string;
}

export interface IUserActionModel {
  type: string;
  payload: userInfo | any;
}
