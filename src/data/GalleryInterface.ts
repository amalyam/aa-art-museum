export interface Info {
  totalrecordsperquery: number;
  totalrecords: number;
  pages: number;
  page: number;
  next: string;
}

export interface Image {
  date: string | null;
  copyright: string | null;
  imageid: number;
  idsid: number;
  format: string | null;
  description: string | null;
  technique: string | null;
  renditionnumber: string;
  displayorder: number;
  baseimageurl: string;
  alttext: string | null;
  width: number;
  publiccaption: string | null;
  iiifbaseuri: string;
  height: number;
}

export interface Worktype {
  worktypeid: string;
  worktype: string;
}

export interface Color {
  color: string;
  spectrum: string;
  hue: string;
  percent: number;
  css3: string;
}

export interface SeeAlso {
  id: string;
  type: string;
  format: string;
  profile: string;
}

export interface Technical {
  text: string;
  formattedtext: string;
  type: string;
}

export interface Coins {
  reverseinscription: string | null;
  dieaxis: string | null;
  metal: string | null;
  obverseinscription: string | null;
  denomination: string | null;
  dateonobject: string | null;
}

export interface Details {
  technical?: Technical[];
  coins?: Coins;
}

export interface Person {
  role: string;
  birthplace: string | null;
  gender: string;
  displaydate: string | null;
  prefix: string | null;
  culture: string | null;
  displayname: string;
  alphasort: string;
  name: string;
  personid: number;
  deathplace: string | null;
  displayorder: number;
}

export interface GalleryObject {
  copyright?: any;
  contextualtextcount: number;
  creditline: string;
  accesslevel: number;
  dateoflastpageview: string;
  classificationid: number;
  division: string;
  markscount: number;
  publicationcount: number;
  totaluniquepageviews: number;
  contact: string;
  colorcount: number;
  rank: number;
  state?: any;
  id: number;
  verificationleveldescription: string;
  period: string | null;
  images: Image[];
  worktypes: Worktype[];
  imagecount: number;
  totalpageviews: number;
  accessionyear: number | null;
  standardreferencenumber: string | null;
  signed: string | null;
  classification: string;
  relatedcount: number;
  verificationlevel: number;
  primaryimageurl: string | null;
  titlescount: number;
  peoplecount: number;
  style: string | null;
  lastupdate: string;
  commentary: string | null;
  periodid: number | null;
  technique: string | null;
  edition?: any;
  description: string | null;
  medium: string;
  lendingpermissionlevel: number;
  title: string;
  accessionmethod: string | null;
  colors?: Color[];
  provenance: string | null;
  groupcount: number;
  dated: string;
  department: string;
  dateend: number;
  url: string;
  dateoffirstpageview: string;
  century: string;
  objectnumber: string;
  labeltext: string | null;
  datebegin: number;
  culture: string | null;
  exhibitioncount: number;
  imagepermissionlevel: number;
  mediacount: number;
  objectid: number;
  techniqueid?: number | null;
  dimensions: string;
  seeAlso: SeeAlso[];
  details?: Details;
  people?: Person[];
}

export interface GalleryRecord {
  gallerynumber: string;
  labeltext: string | null;
  objectcount: number;
  galleryid: number;
  name: string;
  theme: string | null;
  id: number;
  lastupdate: string;
  floor: number;
  url: string;
  objects: GalleryObject[];
}

export default interface GalleryInterface {
  info: Info;
  records: GalleryRecord[];
}
