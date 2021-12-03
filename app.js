const Personne = function (sonNom, sonPrenom, sonAge, sonMetier, saVille){
    this.nom = sonNom;
    this.prenom = sonPrenom;
    this.age = sonAge;
    this.metier = sonMetier;
    this.ville = saVille;

    this.getData = function (){
        return "Le nom de ma personne est " + this.nom + ", son prénom est " + this.prenom + ", ma personne a " +
            this.age + " ans, elle est " + this.metier + " et vit à " + this.ville
    }

    this.setData = function (metier, ville){
        this.metier = metier;
        this.ville = ville;
    }
}

let personne_1 = new Personne("Bataille", "Sylvie", 46, "en formation", "Fourmies");
let personne_2 = new Personne("Bataille", "Emilie", 15, "Etudiante", "Fourmies");

document.querySelector('.nom').innerHTML = personne_1.nom;
document.querySelector('.prenom').innerHTML = personne_1.prenom;
document.querySelector('.age').innerHTML = personne_1.age + " ans";
document.querySelector('.metier').innerHTML = personne_1.metier;
document.querySelector('.ville').innerHTML = personne_1.ville;

document.querySelector('.data').innerHTML = personne_1.getData();
personne_1.setData('développeuse web', 'Lille');
document.querySelector('.newData').innerHTML = personne_1.getData();

document.querySelector('.nom2').innerHTML = personne_2.nom;
document.querySelector('.prenom2').innerHTML = personne_2.prenom;
document.querySelector('.age2').innerHTML = personne_2.age + " ans";
document.querySelector('.metier2').innerHTML = personne_2.metier;
document.querySelector('.ville2').innerHTML = personne_2.ville;

document.querySelector('.data2').innerHTML = personne_2.getData();
personne_2.setData('Elfe', 'Foncombe');
document.querySelector('.newData2').innerHTML = personne_2.getData();

