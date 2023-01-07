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
        confirmButtonText: 'Retour',
        confirmButtonColor: '#00b3fa'
    })
}

function habillageCard() {
    Swal.fire({
        title: '<strong>Habillage</strong>',
        html:
        '- Pose de carrelage,</br>' +
        '- Pose de parquet,</br>' +
        '- Installation de fenêtres et de portes,</br>' +
        '- Pose de plaques de plâtre,</br>' +
        '- Peinture,</br>' +
        '- Revêtement piscine',
        icon: 'info',
        confirmButtonText: 'Retour',
        confirmButtonColor: '#00b3fa'
    })
}

function renovationCard() {
    Swal.fire({
        title: '<strong>Rénovation</strong>',
        html:
        '<strong>Rénovation légère :</strong>  travaux de petite envergure, qui visent à apporter des améliorations esthétiques ou fonctionnelles à un bâtiment sans toucher à sa structure. Cela peut inclure la peinture, le remplacement de revêtements de sol ou de carrelage, l\'installation de nouveaux équipements ou la pose de cloisons.</br>' +
        '</br>' +
        '<strong>Rénovation lourde :</strong> travaux de plus grande envergure, qui impliquent des modifications plus importantes à la structure d\'un bâtiment. Cela peut inclure la réfection de toitures, la modification de portes et de fenêtres, l\'ajout de pièces ou la réorganisation des espaces intérieurs.</br>' +
        '</br>' +
        '<strong>Rénovation de façade :</strong> travaux visant à améliorer l\'apparence extérieure d\'un bâtiment, en réparant ou en ravalant sa façade. Cela peut inclure la réparation de fissures, le remplacement de matériaux dégradés ou la peinture de la façade.',
        icon: 'info',
        confirmButtonText: 'Retour',
        confirmButtonColor: '#00b3fa'
    })
}