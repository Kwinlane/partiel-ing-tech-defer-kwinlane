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
