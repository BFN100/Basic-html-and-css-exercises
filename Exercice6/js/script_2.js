function valider() {
    const TAUX_TPS = 0.05;
    const TAUX_TVQ = 0.09975;
    var prixProduit = parseFloat(document.forms["formCalculMontantTotal"].elements["txtPrix"].value);
    var quantite = parseInt(document.forms["formCalculMontantTotal"].elements["txtQuantite"].value);
    var totalAvantTaxes = prixProduit * quantite;
    document.forms["formCalculMontantTotal"].elements["txtTotalAvantTaxes"].value = totalAvantTaxes.toFixed(2);
    var tps = totalAvantTaxes * TAUX_TPS;
    document.forms["formCalculMontantTotal"].elements["txtTotalTPS"].value = tps.toFixed(2);
    var tvq = totalAvantTaxes * TAUX_TVQ;
    document.forms["formCalculMontantTotal"].elements["txtTotalTVQ"].value = tvq.toFixed(2);
    var totalApresTaxes = totalAvantTaxes + tps + tvq;
    document.forms["formCalculMontantTotal"].elements["txtApresTaxes"].value = totalApresTaxes.toFixed(2);
}