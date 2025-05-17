export class Pokemon {
  index: number;
  name: string;
  type: string[];
  evolution: string;
  description: string;
  imagePath: string;
}

export class Generations {
  generation1?: Pokemon[];
  generation2?: Pokemon[];
  generation3?: Pokemon[]; 
}