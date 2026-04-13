export interface User {
  id: string;
  nom: string;
  prenom: string;
  postnom: string;
  matricule?: string;
  email: string;
  telephone: string;
  status: string;
  sexe: Sexe;
  roles: Role[];
  created_at: Date;
  university_id:number
}

export interface Role {
  id: number;
  nom: string;
  description: string;
  status: boolean;
  created_at: Date;
}



export enum Sexe {
  MALE = "MALE",
  FEMALE = "FEMALE",
}
