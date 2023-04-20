class Avion {
    constructor(marque, modele, longueur, nbPlace, reservoir, vitesse) {
      this.marque = marque;
      this.modele = modele;
      this.longueur = longueur;
      this.nbPlace = nbPlace;
      this.reservoir = reservoir;
      this.vitesse = vitesse;
    }
  
    get marque() { return this._marque; }
    set marque(value) { this._marque = value; }
  
    get modele() { return this._modele; }
    set modele(value) { this._modele = value; }
  
    get longueur() { return this._longueur; }
    set longueur(value) { this._longueur = value; }
  
    get nbPlace() { return this._nbPlace; }
    set nbPlace(value) { this._nbPlace = value; }
  
    get reservoir() { return this._reservoir; }
    set reservoir(value) { this._reservoir = value; }
  
    get vitesse() { return this._vitesse; }
    set vitesse(value) { this._vitesse = value; }
  }
  
let avion1 = new Avion("Cessna", "172", "8.28", 4, 208, 122);
let avion2 = new Avion('Boeing', '747', 70, 660, 238610, 988);
let avion3 = new Avion('Embraer', 'E175', 31, 76, 10999, 828);
let avion4 = new Avion('Airbus', 'A380', 73, 853, 320000, 945);
let avion5 = new Avion('Airbus', 'A320', 37, 236, 23800, 828);

let tableauAvions = [avion1, avion2, avion3, avion4, avion5];

tableauAvions.forEach(avion => console.log(avion.modele));