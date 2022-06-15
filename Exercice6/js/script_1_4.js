function valider() {
    var nom = document.monFormulaire.txtNom.value;
    var prenom = document.monFormulaire.txtPrenom.value;
    var code = document.monFormulaire.txtCode.value;
    var commentaire = document.monFormulaire.txtCommentaire.value;
    alert("Nom : " + nom + ", prenom : " + prenom + ", code : " + code + ", commentaire : " + commentaire);
}