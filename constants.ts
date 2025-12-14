
import { Project, FaqItem, ProjectCategory, TableProduct, VisualizationPackage, VisualizationProject } from './types.ts';

export const NAV_LINKS = [
  { name: 'Mize', href: '#offers' },
  { name: 'Vizualizacije', href: '#offers' },
  { name: 'Vinske kleti', href: '#offers' },
];

export const PROOF_CHIPS = ['Ljubljana/EU', 'Premium materiali', 'Jasen proces'];

export const PROJECTS: Project[] = [
  { id: 1, title: 'Masivna hrastova miza', category: 'Mize', imageUrl: 'https://images.unsplash.com/photo-1554104707-a76b270e4bbb?q=80&w=800&auto=format&fit=crop' },
  { id: 2, title: 'Moderna dnevna soba', category: 'Renderji', imageUrl: 'https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=800&auto=format&fit=crop' },
  { id: 3, title: 'Steklena vinska klet', category: 'Vinske kleti', imageUrl: 'https://images.unsplash.com/photo-1585422025193-3f7698799449?q=80&w=800&auto=format&fit=crop' },
  { id: 4, title: 'Kuhinjska vizualizacija', category: 'Renderji', imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop' },
  { id: 5, title: 'Orehova pisalna miza', category: 'Mize', imageUrl: 'https://images.unsplash.com/photo-1611217855111-85b6438b2993?q=80&w=800&auto=format&fit=crop' },
  { id: 6, title: 'Podzemna vinska shramba', category: 'Vinske kleti', imageUrl: 'https://images.unsplash.com/photo-1516594915-795775b74a05?q=80&w=800&auto=format&fit=crop' },
  { id: 7, title: 'Jedilnica z razgledom', category: 'Mize', imageUrl: 'https://images.unsplash.com/photo-1604578762246-41134e37f9cc?q=80&w=800&auto=format&fit=crop' },
  { id: 8, title: 'Hotelski lobi - Render', category: 'Renderji', imageUrl: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=800&auto=format&fit=crop' },
  { id: 9, title: 'Minimalistična vinska stena', category: 'Vinske kleti', imageUrl: 'https://images.unsplash.com/photo-1633563149139-03a72395259b?q=80&w=800&auto=format&fit=crop' },
];

export const TABLE_PRODUCTS: TableProduct[] = [
    { id: 'T-01', name: 'Hrastova miza "Reka"', imageUrl: 'https://www.pngmart.com/files/15/Modern-Dining-Table-PNG-Image.png', startingPrice: 3200 },
    { id: 'T-02', name: 'Orehova miza "Korenina"', imageUrl: 'https://www.pngall.com/wp-content/uploads/2016/04/Table-PNG-Clipart.png', startingPrice: 4500 },
    { id: 'T-03', name: 'Jedilna miza "Krog"', imageUrl: 'https://purepng.com/public/uploads/large/purepng.com-tabletablefurniture-1701527915929l2qnu.png', startingPrice: 2800 },
    { id: 'T-04', name: 'Moderna pisalna miza', imageUrl: 'https://www.pngarts.com/files/1/Table-PNG-Image-with-Transparent-Background.png', startingPrice: 1900 },
    { id: 'T-05', name: 'Masivna klubska miza', imageUrl: 'https://pngimg.com/uploads/table/table_PNG7020.png', startingPrice: 1200 },
    { id: 'T-06', name: 'Miza "Industrija"', imageUrl: 'https://www.pngmart.com/files/7/Dining-Table-PNG-Transparent-Image.png', startingPrice: 2500 },
];

export const VISUALIZATION_PROJECTS: VisualizationProject[] = [
  {
    id: 'VP-01',
    title: 'Stanovanje Bežigrad',
    location: 'Ljubljana, Slovenija',
    description: 'Prenova starega meščanskega stanovanja z osredotočenostjo na odprtost prostora in naravno svetlobo. Cilj je bil ustvariti sodoben, a hkrati topel ambient z uporabo naravnih materialov.',
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    beforeImage: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    layout: 'before-after',
  },
  {
    id: 'VP-02',
    title: 'Kuhinja po meri',
    location: 'Maribor, Slovenija',
    description: 'Načrtovanje in vizualizacija kuhinje v novogradnji. Poudarek na funkcionalnosti, čistih linijah in integraciji pametnih rešitev. Kombinacija matiranih površin in lesnih detajlov.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    layout: 'two-column',
  },
  {
    id: 'VP-03',
    title: 'Hotelski lobi',
    location: 'Portorož, Slovenija',
    description: 'Idejna zasnova za prenovo hotelskega lobija. Ustvarjanje luksuznega in vabljivega prvega vtisa z uporabo žametnih tekstur, medeninastih poudarkov in ambientalne osvetlitve.',
    image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    layout: 'full-width',
  },
];

export const VISUALIZATION_PACKAGES: VisualizationPackage[] = [
  {
    id: 'V-01',
    name: 'Osnovni Paket',
    price: 'od 450€',
    description: 'Idealno za hitro preverjanje postavitve in prostorskih razmerij.',
    features: ['3D tloris', 'Osnovna postavitev pohištva', 'Do 2 reviziji', '2 fotorealistična renderja'],
  },
  {
    id: 'V-02',
    name: 'Celostni Paket',
    price: 'od 800€',
    description: 'Popolna vizualizacija vašega prostora z izbranimi materiali in osvetlitvijo.',
    features: ['Vse iz Osnovnega paketa', 'Izbor materialov in barv', 'Načrt osvetlitve', '5 fotorealističnih renderjev'],
  },
  {
    id: 'V-03',
    name: 'Premium Virtualni Sprehod',
    price: 'po dogovoru',
    description: 'Doživite svoj novi prostor, še preden je zgrajen, s 360° pogledom.',
    features: ['Vse iz Celostnega paketa', '360° virtualni ogled prostora', 'Video animacija', 'Neomejene revizije'],
  },
];

export const PROJECT_CATEGORIES: ProjectCategory[] = ['Mize', 'Renderji', 'Vinske kleti'];

export const WHY_US_POINTS = [
  { title: 'Brezkompromisna kakovost', description: 'Uporabljamo le izbrane, certificirane materiale najvišjega razreda.' },
  { title: 'Popolna prilagoditev', description: 'Vsak kos je unikaten, oblikovan in izdelan po vaših željah in merah prostora.' },
  { title: 'Transparenten proces', description: 'Od prvega pogovora do končne montaže ste seznanjeni z vsakim korakom.' },
  { title: 'Sodelovanje z arhitekti', description: 'Smo zanesljiv partner pri izvedbi najzahtevnejših projektov notranje opreme.' },
  { title: 'Garancija in podpora', description: 'Stojimo za svojim delom z večletno garancijo in zagotovljenim servisom.' },
];

export const PROCESS_STEPS = [
  { number: '01', title: 'Svetovanje in ideja', description: 'Spoznamo vaše želje, prostor in potrebe.' },
  { number: '02', title: 'Oblikovanje in vizualizacija', description: 'Pripravimo 3D izris in uskladimo vse detajle.' },
  { number: '03', title: 'Izdelava v delavnici', description: 'Natančna in strokovna izdelava vašega kosa pohištva.' },
  { number: '04', 'title': 'Dostava in montaža', description: 'Strokovna vgradnja v vašem prostoru, pripravljeno za uporabo.' },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Kakšen je časovni okvir za izdelavo mize po meri?',
    answer: 'Okvirni čas izdelave je od 6 do 10 tednov, odvisno od kompleksnosti in izbranih materialov. Točen rok določimo ob potrditvi naročila.',
  },
  {
    question: 'Ali lahko izdelate pohištvo po načrtih mojega arhitekta?',
    answer: 'Seveda. Specializirani smo za sodelovanje z arhitekti in izvedbo po obstoječih načrtih. Z veseljem se uskladimo z vašim oblikovalcem.',
  },
  {
    question: 'Kakšen je okvirni cenovni razpon za vaše mize?',
    answer: 'Cene za masivne jedilne mize se običajno pričnejo pri 2.500 € in rastejo glede na dimenzije, vrsto lesa, podnožje in končno obdelavo.',
  },
  {
    question: 'Ali ponujate tudi dostavo in montažo izven Slovenije?',
    answer: 'Da, izvajamo projekte po celotni Evropski uniji. Logistiko in montažo organiziramo v dogovoru z vami.',
  },
  {
    question: 'Katere materiale uporabljate?',
    answer: 'Osredotočamo se na masiven les (hrast, oreh, jesen), ki ga kombiniramo s kovino, steklom in kamnom. Vsi materiali so skrbno izbrani in najvišje kakovosti.',
  },
  {
    question: 'Kako poteka plačilo?',
    answer: 'Običajno je plačilo razdeljeno na 50% avansa ob potrditvi naročila in 50% pred dostavo. Pri večjih projektih se lahko dogovorimo za drugačne pogoje.',
  },
];
