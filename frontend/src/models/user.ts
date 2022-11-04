export interface Address {
  country: string;
  address: string;
  city: string;
  postalCode: number;
}

export interface User {
  firstname?: string;
  lastname?: string;
  username: string;
  email: string;
  password: string;
  addresses: Address;
}
