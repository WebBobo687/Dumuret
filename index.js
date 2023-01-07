function constructionCard() {
    Swal.fire({
        title: '<strong>Construction</strong>',
        html:
        '<strong>Construction traditionnelle :</strong>  construction  brique, le béton, le bois, etc. Le chantier est organisé de manière linéaire, avec une séquence de travaux définie à l\'avance.</br>' +
        '</br>' +
        '<strong>Construction en ossature bois :</strong> construction bois . L\'ossature bois permet de réaliser des constructions rapidement et à moindre coût, tout en respectant l\'environnement.</br>' +
        '</br>' +
        '<strong>Construction en acier :</strong> construction acier . L\'acier est un matériau solide et durable, qui permet de réaliser des constructions de grande hauteur ou de grande envergure.</br>' +
        '</br>' +
        '<strong>Construction en béton armé :</strong> construction béton renforcé par des barres d\'acier (armatures). Le béton armé est particulièrement adapté pour les ouvrages de grande envergure ou soumis à de fortes charges.',
        icon: 'info',
        confirmButtonText: 'Ok',
        confirmButtonColor: '#00b3fa'
    })
}