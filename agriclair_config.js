/**
 * AGRICLAIR - Fichier de Configuration
 * 
 * Ce fichier contient toutes les données fiscales, juridiques et tarifaires.
 * Modifiez ces valeurs pour mettre à jour le site selon les évolutions législatives.
 * 
 * IMPORTANT : Respectez le format JavaScript pour que le site continue de fonctionner.
 * Dernière mise à jour : Février 2026
 */

const AGRICLAIR_CONFIG = {
  
  // ============================================
  // PARAMÈTRES FISCAUX 2026
  // ============================================
  
  fiscal: {
    // Barème Impôt sur le Revenu 2026 (par part fiscale)
    baremeIR: [
      { seuil: 0,      taux: 0,    description: "Jusqu'à 11 294€" },
      { seuil: 11294,  taux: 0.11, description: "De 11 294€ à 28 797€" },
      { seuil: 28797,  taux: 0.30, description: "De 28 797€ à 82 341€" },
      { seuil: 82341,  taux: 0.41, description: "De 82 341€ à 177 106€" },
      { seuil: 177106, taux: 0.45, description: "Au-delà de 177 106€" }
    ],
    
    // Micro-BA (Micro-Bénéfices Agricoles)
    microBA: {
      plafondCA: 91900,           // Plafond de CA en euros
      tauxAbattement: 0.87,       // 87% d'abattement
      tauxCotisationsSociales: 0.11, // 11% du CA
      description: "Régime simplifié pour CA < 91 900€"
    },
    
    // Réel Simplifié et Normal
    reelSimplifie: {
      tauxCotisationsSociales: 0.45, // 45% du bénéfice
      fraisComptabilite: 2000,       // Coût moyen annuel expert-comptable
      description: "Déduction des charges réelles"
    },
    
    reelNormal: {
      tauxCotisationsSociales: 0.45, // 45% du bénéfice
      fraisComptabilite: 2500,       // Coût moyen annuel expert-comptable
      description: "Comptabilité complète obligatoire"
    }
  },
  
  // ============================================
  // STATUTS JURIDIQUES
  // ============================================
  
  statuts: {
    individuelle: {
      nom: "Exploitation Individuelle",
      emoji: "🌾",
      capitalMinimum: 0,
      nombreAssocie: "1 seul",
      responsabilite: "Illimitée",
      regimeFiscal: "IR",
      regimeSocial: "MSA non-salarié",
      aidesPAC: "100%",
      coutAnnuel: "500-1 500€",
      avantages: [
        "Simplicité administrative maximale",
        "Aucun capital minimum requis",
        "Décisions en totale autonomie",
        "Charges sociales adaptées petits revenus"
      ],
      inconvenients: [
        "Patrimoine personnel non protégé",
        "Difficultés de transmission",
        "Capacité d'investissement limitée"
      ],
      idealPour: [
        "Jeune installation avec activité modeste",
        "Exploitation de petite taille",
        "Agriculteur souhaitant rester seul"
      ]
    },
    
    earl: {
      nom: "EARL",
      nomComplet: "Entreprise Agricole à Responsabilité Limitée",
      emoji: "🏢",
      capitalMinimum: 7500,
      nombreAssocie: "1 à 10",
      responsabilite: "Limitée aux apports",
      regimeFiscal: "IR ou IS (option)",
      regimeSocial: "MSA non-salarié",
      aidesPAC: "100%",
      coutAnnuel: "2 500-4 000€",
      avantages: [
        "Responsabilité limitée aux apports",
        "Patrimoine personnel protégé",
        "Flexibilité : 1 à 10 associés",
        "Option IS ou IR selon besoins",
        "Transmission facilitée"
      ],
      inconvenients: [
        "Capital minimum : 7 500€",
        "Comptabilité commerciale obligatoire",
        "Formalités de création plus lourdes",
        "Coûts comptables significatifs"
      ],
      idealPour: [
        "Exploitations moyennes à grandes",
        "Projet nécessitant investisseurs",
        "Protection patrimoine familial",
        "Transmission progressive"
      ]
    },
    
    gaec: {
      nom: "GAEC",
      nomComplet: "Groupement Agricole d'Exploitation en Commun",
      emoji: "👨‍👩‍👧‍👦",
      capitalMinimum: "1 500€/associé",
      nombreAssocie: "2 à 10",
      responsabilite: "Conjointe et solidaire",
      regimeFiscal: "IR (transparence)",
      regimeSocial: "MSA non-salarié",
      aidesPAC: "Transparence (1 DPB/associé)",
      coutAnnuel: "2 500-4 000€",
      avantages: [
        "Transparence fiscale (pas d'IS)",
        "Transparence PAC",
        "Mutualisation travail et matériel",
        "Idéal exploitations familiales",
        "Reconnaissance travail de chaque associé"
      ],
      inconvenients: [
        "Responsabilité conjointe et solidaire",
        "Agrément préfectoral obligatoire",
        "Tous associés doivent participer",
        "Pas d'investisseurs extérieurs"
      ],
      idealPour: [
        "Association familiale",
        "Mutualisation du travail",
        "Optimisation aides PAC",
        "Transmission progressive enfants"
      ]
    },
    
    scea: {
      nom: "SCEA",
      nomComplet: "Société Civile d'Exploitation Agricole",
      emoji: "💼",
      capitalMinimum: 0,
      nombreAssocie: "2 minimum",
      responsabilite: "Limitée aux apports",
      regimeFiscal: "IR ou IS",
      regimeSocial: "MSA ou régime général",
      aidesPAC: "Sous conditions",
      coutAnnuel: "3 000-5 000€",
      avantages: [
        "Grande souplesse fonctionnement",
        "Responsabilité limitée",
        "Investisseurs extérieurs sans limite",
        "Pas de capital minimum",
        "Associés non exploitants possibles"
      ],
      inconvenients: [
        "Complexité juridique et fiscale",
        "Aides PAC sous conditions strictes",
        "Risque perte caractère agricole",
        "Peut être requalifiée commerciale"
      ],
      idealPour: [
        "Projets capitaux importants",
        "Diversification non agricole",
        "Association avec non-exploitants",
        "Grandes exploitations"
      ]
    }
  },
  
  // ============================================
  // TARIFS AGRICLAIR
  // ============================================
  
  tarifs: {
    gratuit: {
      nom: "Découverte",
      prix: 0,
      periode: "mois",
      fonctionnalites: [
        "50 fiches pratiques",
        "Calculateur simplifié",
        "2 simulations/mois",
        "Newsletter mensuelle",
        "Accès forum communauté"
      ],
      cta: "Commencer gratuitement"
    },
    
    premium: {
      nom: "Premium",
      prix: 49,
      prixAnnuel: 470,
      periode: "mois",
      economie: "2 mois offerts",
      populaire: true,
      fonctionnalites: [
        "Simulations illimitées",
        "Comparateur avancé",
        "Tableau de bord complet",
        "Alertes automatiques",
        "Support email 48h",
        "Webinaires trimestriels",
        "200+ fiches actualisées"
      ],
      cta: "Choisir Premium"
    },
    
    expert: {
      nom: "Expert",
      prix: 149,
      prixAnnuel: 1490,
      periode: "mois",
      economie: "1 mois offert",
      fonctionnalites: [
        "Tout Premium +",
        "1h visio conseiller/mois",
        "Stratégies personnalisées",
        "Aide dossiers subventions",
        "Support téléphone prioritaire",
        "Réseau experts partenaires",
        "Relecture documents"
      ],
      cta: "Choisir Expert"
    }
  },
  
  // ============================================
  // INFORMATIONS GÉNÉRALES
  // ============================================
  
  general: {
    nomPlateforme: "AgriClair",
    slogan: "Simplifiez votre gestion agricole",
    description: "La plateforme 100% digitale qui accompagne les agriculteurs dans leurs démarches administratives, juridiques, fiscales et sociales.",
    
    contact: {
      email: "contact@agriclair.fr",
      telephone: "",  // À compléter
      adresse: ""     // À compléter
    },
    
    stats: {
      exploitationsFrance: 400000,
      marcheAdressable: 120000,
      tauxConversionCible: 0.12, // 12% gratuit vers premium
      objectifClientsN4: 1000
    }
  },
  
  // ============================================
  // MESSAGES ET DISCLAIMERS
  // ============================================
  
  messages: {
    disclaimerFiscal: "Ces simulations sont basées sur les barèmes fiscaux 2026. Elles sont données à titre indicatif et ne se substituent pas à un conseil personnalisé d'un expert-comptable ou conseiller fiscal.",
    
    disclaimerJuridique: "Les informations présentées sont générales. Chaque situation étant unique, nous recommandons de consulter un avocat spécialisé en droit rural avant toute décision.",
    
    rgpd: "Vos données sont hébergées en France et protégées conformément au RGPD. Nous ne les partageons jamais avec des tiers."
  },
  
  // ============================================
  // VERSION ET MISE À JOUR
  // ============================================
  
  meta: {
    version: "1.0.0",
    dateMiseAJour: "2026-02-15",
    prochaineRevision: "2026-09-01", // Révision annuelle recommandée
    auteur: "Équipe AgriClair",
    notes: "Première version du prototype - Données fiscales 2026 validées"
  }
};

// ============================================
// INSTRUCTIONS DE MISE À JOUR
// ============================================

/**
 * COMMENT METTRE À JOUR CE FICHIER :
 * 
 * 1. MISE À JOUR FISCALE (chaque année ou lors de changement législatif) :
 *    - Modifier les valeurs dans fiscal.baremeIR
 *    - Ajuster fiscal.microBA.plafondCA si nécessaire
 *    - Mettre à jour les taux de cotisations sociales
 * 
 * 2. MISE À JOUR TARIFAIRE :
 *    - Modifier tarifs.premium.prix ou tarifs.expert.prix
 *    - Ajuster les fonctionnalités si nouvelle offre
 * 
 * 3. MISE À JOUR STATUTS JURIDIQUES :
 *    - Modifier les capitalMinimum si changement légal
 *    - Ajouter/retirer avantages/inconvénients
 * 
 * 4. APRÈS CHAQUE MODIFICATION :
 *    - Incrémenter meta.version
 *    - Mettre à jour meta.dateMiseAJour
 *    - Ajouter une note dans meta.notes
 *    - Sauvegarder et republier le site
 * 
 * EXEMPLE DE MODIFICATION :
 * 
 * Pour changer le plafond Micro-BA de 91 900€ à 95 000€ :
 * 
 * AVANT :
 * microBA: {
 *   plafondCA: 91900,
 * 
 * APRÈS :
 * microBA: {
 *   plafondCA: 95000,
 * 
 * Puis mettre à jour :
 * meta: {
 *   version: "1.0.1",
 *   dateMiseAJour: "2026-03-15",
 *   notes: "Mise à jour plafond Micro-BA suite à loi de finances 2026"
 * }
 */

// Export de la configuration (ne pas modifier cette ligne)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = AGRICLAIR_CONFIG;
}