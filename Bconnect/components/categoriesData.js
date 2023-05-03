

const categoriesData = [
  {
    id: 1,
    title: "Agricultură & Alimentare",
    subcategories: [
      "Animale de crescătorie (zootehnie) și pește",
      "Agricultură și exploatare forestieră",
      "Produse alimentare",
      "Băuturi",
      "Produse ecologice (organice, bio)",
      "Mașini și echipamente agricole și forestiere",
      "Mașini și echipamente pentru industriile: alimentară, a băuturilor, a tutunului și pentru catering",
    ],
    iconPath: require('../assets/categoryIcons/agriculture-irrigation-color-icon.png'),
  },
  {
    id: 2,
    title: "Chimice & Farmaceutice",
    subcategories: [
      "Produse din cauciuc",
      "Produse din plastic",
      "Compuși chimici de bază",
      "Produse chimice",
      "Sănătate, medicină și farmacologie",
      "Echipamente și instalații pentru industria chimică",
      "Echipamente și instalații pentru industria cauciucului și a materialelor plastice",
    ],
    iconPath: require('../assets/categoryIcons/laboratory-test-icon.png'),
  },
  {
    id: 3,
    title: "Construcții",
    subcategories: [
      "Cherestea, produse din lemn, mașini și echipamente pentru industria de prelucrare a lemnului",
      "Mobilier și lenjerie de casă",
      "Construcții metalice pentru industria construcțiilor",
      "Conducte, supape și containere/rezervoare, din metal",
      "Feronerie, cuțite și scule",
      "Echipament de pază și protecție",
      "Echipamente de încălzire, ventilație, condiționare a aerului (HVAC) și refrigerare",
      "Utilaje și echipamente pentru construcții civile și industriale",
      "Contractori de construcții civile și maritime",
      "Construcții",
    ],
    iconPath: require('../assets/categoryIcons/property-color-icon.png'),
  },
  {
    id: 4,
    title: "Educație, Instruire & Organizații",
    subcategories: [
      "Educație și instruire/training",
      "Organizații, administrații și asociații internaționale",
      "Servicii sociale și de îngrijiri medicale, la domiciliu",
    ],
    iconPath: require('../assets/categoryIcons/online-training-icon.png'),
  },
  {
    id: 5,
    title: "Electrice, Electronice & Optice",
    subcategories: [
      "Echipamente electrice, Echipamente nucleare",
      "Echipamente opto-electronice, Echipamente de telecomunicații",
      "Echipamente de măsură și testare",
      "Echipamente optice, fotografice și cinematografice",
    ],
    iconPath: require('../assets/categoryIcons/idea-bulb-icon.png'),
  },
  {
    id: 6,
    title: "Energie, Mediu",
    subcategories: [
      "Energie, combustibili și apă",
      "Echipamente și instalații pentru industria petrolului și gazelor",
      "Servicii de mediu, energii regenerabile",
    ],
    iconPath: require('../assets/categoryIcons/environmental-icon.png'),
  },
  {
    id: 7,
    title: "Hârtie, Tipărire, Publicare",
    subcategories: [
      "Hârtie și carton",
      "Tipărire și editare",
      "Echipamente și instalații de fabricare a hârtiei și cartonului",
      "Echipamente de tipărit, Echipamente de birou și magazin",
    ],
    iconPath: require('../assets/categoryIcons/book-icon.png'),
  },
  {
    id: 8,
    title: "IT, Internet & Cercetare",
    subcategories: [
      "Tehnologia informației (IT) și Internet",
      "Birouri tehnice și consultanță în inginerie, arhitecți",
      "Cercetare și testări",
    ],
    iconPath: require('../assets/categoryIcons/world-map-pin-icon.png'),
  },
  {
    id: 9,
    title: "Metale, Utilaje & Inginerie",
    subcategories: [
      "Produse metalurgice",
      "Motoare și piese mecanice",
      "Mașini și echipamente pentru prelucrarea metalelor",
      "Subcontractori industriali",
    ],
    iconPath: require('../assets/categoryIcons/configuration-icon.png'),
  },
  {
    id: 10,
    title: "Minerale",
    subcategories: [
      "Minereuri și minerale",
      "Rocă de carieră",
      "Sticlă, ciment și ceramică",
      "Utilaje și echipamente pentru minerit, exploatare în carieră și prelucrarea pietrelor naturale",
    ],
    iconPath: require('../assets/categoryIcons/mining-icon.png'),
  },
  {
    id: 11,
    title: "Retail & Comercianți",
    subcategories: [
      "Comercianți în general, depozite angro și magazine de vânzare cu amănuntul",
    ],
    iconPath: require('../assets/categoryIcons/basket-color-icon.png'),
  },
  {
    id: 12,
    title: "Servicii Business",
    subcategories: [
      "Igienă și curățenie",
      "Servicii pentru afaceri",
      "Servicii financiare și de asigurări",
      "Servicii de închiriere",
    ],
    iconPath: require('../assets/categoryIcons/money-receiving-dollar-color-icon.png'),
  },
  {
    id: 13,
    title: "Textile, Confecții, Piele & Bijuterii",
    subcategories: [
      "Piele, blănuri și produsele lor",
      "Textile",
      "Îmbrăcăminte și încălțăminte",
      "Prelucrarea pietrelor prețioase, fabricarea ceasurilor și a bijuteriilor",
      "Mașini și echipamente pentru fabricarea produselor textile, îmbrăcămintei, pielei și încălțămintei",
    ],
    iconPath: require('../assets/categoryIcons/woman-t-shirt-icon.png'),
  },
  {
    id: 14,
    title: "Transport & Logistică",
    subcategories: [
      "Instalații și echipamente de manipulare și depozitare",
      "Mașini, echipamente și servicii de ambalat",
      "Mijloace de transport (Automotive și altele)",
      "Servicii de transport și logistică",
    ],
    iconPath: require('../assets/categoryIcons/parcel-box-package-icon.png'),
  },
  {
    id: 15,
    title: "Turism & Recreere",
    subcategories: [
      "Echipamente pentru sport și agrement",
      "Industriile de turism și ospitalitate hotelieră și de catering",
      "Comunicații (servicii poștale), telecomunicații, radio și televiziune",
      "Odihnă, cultură și agrement",
    ],
    iconPath: require('../assets/categoryIcons/vacation-beach-icon.png'),
  },
];

export default categoriesData;