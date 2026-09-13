// Base d'idées entrepreneuriales — chaque idée est taguée pour le moteur de correspondance.
// sector: ia | local | education | creatif | commerce
// budget: bas | moyen | eleve
// temps: partiel | pleintemps
// competence: technique | relationnel | creatif | organisation

const IDEES = [
  {
    id: "assistant-ia-freelance",
    titre: "Assistant IA freelance pour indépendants",
    pitch: "Vendre des prestations de scraping, automatisation n8n et analyse de données à des indépendants et petites entreprises qui n'ont ni le temps ni les compétences techniques.",
    sector: "ia", budget: "bas", temps: "partiel", competence: "technique",
    etapes: [
      "Créez 2-3 exemples concrets (scraping, rapport automatisé) à montrer en portfolio",
      "Publiez une offre ciblée sur Malt/Fiverr avec un délai de livraison court",
      "Fixez un tarif d'appel bas pour les 3 premières missions afin d'obtenir des avis",
    ],
    potentiel: "50 à 500€ par mission, revenu très variable selon le volume de clients",
  },
  {
    id: "chatbot-niche",
    titre: "Chatbot IA spécialisé pour un métier de niche",
    pitch: "Concevoir un chatbot WhatsApp/Instagram pré-configuré pour un secteur précis (artisans du bâtiment, coiffeurs, kinés) et le revendre en marque blanche à plusieurs professionnels du même métier.",
    sector: "ia", budget: "moyen", temps: "partiel", competence: "technique",
    etapes: [
      "Choisissez UN métier que vous connaissez bien (réseau, ancien emploi)",
      "Construisez un chatbot type avec n8n + Claude AI pour ce métier",
      "Démarchez 5 professionnels de ce secteur avec une démo gratuite de 15 jours",
    ],
    potentiel: "20 à 80€/mois par client abonné, revenu récurrent si plusieurs clients",
  },
  {
    id: "veille-concurrentielle-pme",
    titre: "Service de veille concurrentielle pour PME",
    pitch: "Automatiser la surveillance des sites concurrents et fournir un rapport hebdomadaire synthétique à des PME qui n'ont pas le temps de le faire elles-mêmes.",
    sector: "ia", budget: "bas", temps: "partiel", competence: "technique",
    etapes: [
      "Montez un workflow n8n de veille RSS + résumé IA (réutilisable pour chaque client)",
      "Proposez un rapport gratuit à 3 entreprises locales pour valider l'intérêt",
      "Transformez les retours positifs en abonnement mensuel payant",
    ],
    potentiel: "100 à 400€/mois par client, 3-5 clients suffisent pour un complément de revenu solide",
  },
  {
    id: "reparation-velo",
    titre: "Atelier itinérant de réparation vélo / petit électroménager",
    pitch: "Se déplacer chez les particuliers ou tenir un stand ponctuel pour réparer vélos et petits appareils, dans une logique anti-gaspillage très demandée localement.",
    sector: "local", budget: "moyen", temps: "partiel", competence: "technique",
    etapes: [
      "Suivez une formation courte ou certifiez vos compétences existantes",
      "Investissez dans une caisse à outils de base et une carte de visite simple",
      "Proposez vos services via un groupe Facebook local / Nextdoor",
    ],
    potentiel: "15 à 40€ par intervention, activité d'appoint réaliste dès les premiers mois",
  },
  {
    id: "traiteur-circuit-court",
    titre: "Traiteur healthy en circuit court",
    pitch: "Préparer et livrer des repas sains à base de produits locaux pour les actifs pressés d'un quartier ou d'une zone d'activité.",
    sector: "local", budget: "moyen", temps: "pleintemps", competence: "creatif",
    etapes: [
      "Validez la demande avec un test sur un marché ou une entreprise partenaire",
      "Déclarez votre activité et respectez les normes d'hygiène (formation HACCP)",
      "Ouvrez un canal de commande simple (formulaire + livraison à heure fixe)",
    ],
    potentiel: "8 à 15€ par repas vendu, rentable à partir d'un volume régulier de commandes",
  },
  {
    id: "box-locale",
    titre: "Box mensuelle de produits locaux",
    pitch: "Sélectionner et expédier chaque mois une box de produits artisanaux d'une région (ex: Bretagne) à des abonnés nostalgiques ou curieux.",
    sector: "commerce", budget: "eleve", temps: "pleintemps", competence: "organisation",
    etapes: [
      "Négociez avec 4-5 petits producteurs locaux pour un tarif dégressif",
      "Lancez une pré-vente limitée (30 box) pour valider la demande avant de stocker",
      "Automatisez la facturation récurrente avec un outil d'abonnement",
    ],
    potentiel: "15 à 35€ de marge par abonné et par mois, nécessite un volume pour être rentable",
  },
  {
    id: "revente-niche",
    titre: "Marketplace de seconde main spécialisée",
    pitch: "Se concentrer sur une seule catégorie (matériel de sport, instruments de musique) pour devenir la référence locale de la revente d'occasion, plutôt que de concurrencer les généralistes.",
    sector: "commerce", budget: "bas", temps: "partiel", competence: "organisation",
    etapes: [
      "Choisissez une niche que vous connaissez déjà en tant que pratiquant",
      "Commencez par revendre votre propre matériel puis celui de votre entourage",
      "Créez une page dédiée (Instagram/Vinted Pro) avec des photos et descriptions soignées",
    ],
    potentiel: "10 à 30% de marge par objet revendu, dépend fortement du volume traité",
  },
  {
    id: "cours-particuliers-visio",
    titre: "Cours particuliers en ligne",
    pitch: "Donner des cours de soutien scolaire ou de langue en visioconférence, sans contrainte géographique et avec des créneaux flexibles.",
    sector: "education", budget: "bas", temps: "partiel", competence: "relationnel",
    etapes: [
      "Inscrivez-vous sur une plateforme existante (Superprof, Preply) pour démarrer vite",
      "Constituez 2-3 supports de cours réutilisables sur vos matières fortes",
      "Une fois quelques élèves réguliers, proposez un tarif direct sans commission",
    ],
    potentiel: "20 à 40€/heure, revenu d'appoint fiable dès les premières semaines",
  },
  {
    id: "coaching-reconversion",
    titre: "Coaching reconversion professionnelle",
    pitch: "Accompagner des salariés en questionnement de carrière avec des bilans de compétences et un suivi personnalisé, un besoin en forte croissance.",
    sector: "education", budget: "moyen", temps: "pleintemps", competence: "relationnel",
    etapes: [
      "Faites certifier votre pratique (RNCP bilan de compétences si vous visez le CPF)",
      "Proposez 5 premières séances à tarif réduit pour construire vos témoignages",
      "Référencez-vous sur les plateformes de financement CPF pour un flux régulier",
    ],
    potentiel: "50 à 120€ la séance, ou forfaits bilan complet à 800-1500€ finançables CPF",
  },
  {
    id: "chaine-contenu-ia",
    titre: "Chaîne de vulgarisation IA (TikTok/YouTube)",
    pitch: "Expliquer simplement les outils IA du moment à un public non-technique, avec un format court et régulier, pour construire une audience monétisable.",
    sector: "creatif", budget: "bas", temps: "partiel", competence: "creatif",
    etapes: [
      "Publiez 3 vidéos courtes sur un seul outil IA que vous maîtrisez déjà",
      "Restez régulier (2-3 vidéos/semaine) plutôt que viser la perfection",
      "Ajoutez un lien vers vos propres produits/services une fois une petite audience acquise",
    ],
    potentiel: "Revenu différé (monétisation, affiliation, vente de vos propres produits) — demande de la patience",
  },
  {
    id: "home-staging-photo",
    titre: "Home staging photo pour petites annonces",
    pitch: "Aider particuliers et petits loueurs (Airbnb, Leboncoin) à mettre en valeur leur bien ou objet en vente avec de meilleures photos et une mise en scène simple.",
    sector: "creatif", budget: "bas", temps: "partiel", competence: "creatif",
    etapes: [
      "Constituez un portfolio en photographiant 3-4 biens de votre entourage",
      "Démarchez les agences immobilières locales et hôtes Airbnb du coin",
      "Facturez à la prestation (déplacement + set de photos retouchées)",
    ],
    potentiel: "50 à 150€ par prestation, activité d'appoint flexible",
  },
  {
    id: "delegation-admin",
    titre: "Délégation administrative pour indépendants",
    pitch: "Prendre en charge la paperasse (factures, relances, déclarations URSSAF) d'auto-entrepreneurs débordés qui préfèrent se concentrer sur leur cœur de métier.",
    sector: "local", budget: "bas", temps: "partiel", competence: "organisation",
    etapes: [
      "Formalisez une offre simple (ex: forfait mensuel 'gestion administrative')",
      "Ciblez des indépendants de votre réseau proche pour les premiers clients",
      "Standardisez vos process avec des modèles réutilisables (facture, relance)",
    ],
    potentiel: "80 à 200€/mois par client, plusieurs clients en parallèle possible",
  },
  {
    id: "kit-automatisation-metier",
    titre: "Kit d'automatisation n8n pour un métier précis",
    pitch: "Construire un kit clé-en-main (facturation, relances, prise de rendez-vous) pour un métier précis et le vendre comme produit numérique, sans prestation individuelle.",
    sector: "ia", budget: "bas", temps: "partiel", competence: "technique",
    etapes: [
      "Choisissez un métier avec des tâches répétitives bien identifiables",
      "Construisez et testez le kit sur votre propre cas ou celui d'un proche",
      "Vendez-le en produit numérique avec un guide d'installation clair",
    ],
    potentiel: "15 à 50€ par vente, revenu passif une fois le kit terminé et diffusé",
  },
  {
    id: "sel-numerique",
    titre: "Plateforme d'échange de services entre voisins",
    pitch: "Créer un espace numérique simple (groupe + mini-site) pour organiser l'échange de services entre habitants d'un même quartier (garde d'enfants, bricolage, jardinage).",
    sector: "local", budget: "bas", temps: "partiel", competence: "relationnel",
    etapes: [
      "Lancez un groupe test dans votre propre quartier ou immeuble",
      "Documentez quelques règles simples d'échange (temps contre temps, ou tarif solidaire)",
      "Si ça prend, structurez avec un petit site/formulaire pour élargir la zone",
    ],
    potentiel: "Modèle communautaire — monétisation possible via un abonnement symbolique une fois la communauté établie",
  },
];
