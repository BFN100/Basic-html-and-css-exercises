function valider() {
    var nom = document.forms["monFormulaire"].elements["txtNom"].value;
    var prenom = document.forms["monFormulaire"].elements["txtPrenom"].value;
    var code = document.forms["monFormulaire"].elements["txtCode"].value;
    var commentaire = document.forms["monFormulaire"].elements["txtCommentaire"].value;
    alert("Nom : " + nom + ", prenom : " + prenom + ", code : " + code + ", commentaire : " + commentaire);
}