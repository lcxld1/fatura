const currencies = {
  AFA: { name: 'Afghan Afghani', symbol: '؋', id: 1 },
  ALL: { name: 'Albanian Lek', symbol: 'Lek', id: 2 },
  DZD: { name: 'Algerian Dinar', symbol: 'دج', id: 3 },
  AOA: { name: 'Angolan Kwanza', symbol: 'Kz', id: 4 },
  ARS: { name: 'Argentine Peso', symbol: '$', id: 5 },
  AMD: { name: 'Armenian Dram', symbol: '֏', id: 6 },
  AWG: { name: 'Aruban Florin', symbol: 'ƒ', id: 7 },
  AUD: { name: 'Australian Dollar', symbol: '$', id: 8 },
  AZN: { name: 'Azerbaijani Manat', symbol: 'm', id: 9 },
  BSD: { name: 'Bahamian Dollar', symbol: 'B$', id: 10 },
  BHD: { name: 'Bahraini Dinar', symbol: '.د.ب', id: 11 },
  BDT: { name: 'Bangladeshi Taka', symbol: '৳', id: 12 },
  BBD: { name: 'Barbadian Dollar', symbol: 'Bds$', id: 13 },
  BYR: { name: 'Belarusian Ruble', symbol: 'Br', id: 14 },
  BEF: { name: 'Belgian Franc', symbol: 'fr', id: 15 },
  BZD: { name: 'Belize Dollar', symbol: '$', id: 16 },
  BMD: { name: 'Bermudan Dollar', symbol: '$', id: 17 },
  BTN: { name: 'Bhutanese Ngultrum', symbol: 'Nu.', id: 18 },
  BTC: { name: 'Bitcoin', symbol: '฿', id: 19 },
  BOB: { name: 'Bolivian Boliviano', symbol: 'Bs.', id: 20 },
  BAM: { name: 'Bosnia-Herzegovina Convertible Mark', symbol: 'KM', id: 21 },
  BWP: { name: 'Botswanan Pula', symbol: 'P', id: 22 },
  BRL: { name: 'Brazilian Real', symbol: 'R$', id: 23 },
  GBP: { name: 'British Pound Sterling', symbol: '£', id: 24 },
  BND: { name: 'Brunei Dollar', symbol: 'B$', id: 25 },
  BGN: { name: 'Bulgarian Lev', symbol: 'Лв.', id: 26 },
  BIF: { name: 'Burundian Franc', symbol: 'FBu', id: 27 },
  KHR: { name: 'Cambodian Riel', symbol: 'KHR', id: 28 },
  CAD: { name: 'Canadian Dollar', symbol: '$', id: 29 },
  CVE: { name: 'Cape Verdean Escudo', symbol: '$', id: 30 },
  KYD: { name: 'Cayman Islands Dollar', symbol: '$', id: 31 },
  XOF: { name: 'CFA Franc BCEAO', symbol: 'CFA', id: 32 },
  XAF: { name: 'CFA Franc BEAC', symbol: 'FCFA', id: 33 },
  XPF: { name: 'CFP Franc', symbol: '₣', id: 34 },
  CLP: { name: 'Chilean Peso', symbol: '$', id: 35 },
  CNY: { name: 'Chinese Yuan', symbol: '¥', id: 36 },
  COP: { name: 'Colombian Peso', symbol: '$', id: 37 },
  KMF: { name: 'Comorian Franc', symbol: 'CF', id: 38 },
  CDF: { name: 'Congolese Franc', symbol: 'FC', id: 39 },
  CRC: { name: 'Costa Rican ColÃ³n', symbol: '₡', id: 40 },
  HRK: { name: 'Croatian Kuna', symbol: 'kn', id: 41 },
  CUC: { name: 'Cuban Convertible Peso', symbol: '$, CUC', id: 42 },
  CZK: { name: 'Czech Republic Koruna', symbol: 'Kč', id: 43 },
  DKK: { name: 'Danish Krone', symbol: 'Kr.', id: 44 },
  DJF: { name: 'Djiboutian Franc', symbol: 'Fdj', id: 45 },
  DOP: { name: 'Dominican Peso', symbol: '$', id: 46 },
  XCD: { name: 'East Caribbean Dollar', symbol: '$', id: 47 },
  EGP: { name: 'Egyptian Pound', symbol: 'ج.م', id: 48 },
  ERN: { name: 'Eritrean Nakfa', symbol: 'Nfk', id: 49 },
  EEK: { name: 'Estonian Kroon', symbol: 'kr', id: 50 },
  ETB: { name: 'Ethiopian Birr', symbol: 'Nkf', id: 51 },
  EUR: { name: 'Euro', symbol: '€', id: 52 },
  FKP: { name: 'Falkland Islands Pound', symbol: '£', id: 53 },
  FJD: { name: 'Fijian Dollar', symbol: 'FJ$', id: 54 },
  GMD: { name: 'Gambian Dalasi', symbol: 'D', id: 55 },
  GEL: { name: 'Georgian Lari', symbol: 'ლ', id: 56 },
  DEM: { name: 'German Mark', symbol: 'DM', id: 57 },
  GHS: { name: 'Ghanaian Cedi', symbol: 'GH₵', id: 58 },
  GIP: { name: 'Gibraltar Pound', symbol: '£', id: 59 },
  GRD: { name: 'Greek Drachma', symbol: '₯, Δρχ, Δρ', id: 60 },
  GTQ: { name: 'Guatemalan Quetzal', symbol: 'Q', id: 61 },
  GNF: { name: 'Guinean Franc', symbol: 'FG', id: 62 },
  GYD: { name: 'Guyanaese Dollar', symbol: '$', id: 63 },
  HTG: { name: 'Haitian Gourde', symbol: 'G', id: 64 },
  HNL: { name: 'Honduran Lempira', symbol: 'L', id: 65 },
  HKD: { name: 'Hong Kong Dollar', symbol: '$', id: 66 },
  HUF: { name: 'Hungarian Forint', symbol: 'Ft', id: 67 },
  ISK: { name: 'Icelandic KrÃ³na', symbol: 'kr', id: 68 },
  INR: { name: 'Indian Rupee', symbol: '₹', id: 69 },
  IDR: { name: 'Indonesian Rupiah', symbol: 'Rp', id: 70 },
  IRR: { name: 'Iranian Rial', symbol: '﷼', id: 71 },
  IQD: { name: 'Iraqi Dinar', symbol: 'د.ع', id: 72 },
  ILS: { name: 'Israeli New Sheqel', symbol: '₪', id: 73 },
  ITL: { name: 'Italian Lira', symbol: 'L,£', id: 74 },
  JMD: { name: 'Jamaican Dollar', symbol: 'J$', id: 75 },
  JPY: { name: 'Japanese Yen', symbol: '¥', id: 76 },
  JOD: { name: 'Jordanian Dinar', symbol: 'ا.د', id: 77 },
  KZT: { name: 'Kazakhstani Tenge', symbol: 'лв', id: 78 },
  KES: { name: 'Kenyan Shilling', symbol: 'KSh', id: 79 },
  KWD: { name: 'Kuwaiti Dinar', symbol: 'ك.د', id: 80 },
  KGS: { name: 'Kyrgystani Som', symbol: 'лв', id: 81 },
  LAK: { name: 'Laotian Kip', symbol: '₭', id: 82 },
  LVL: { name: 'Latvian Lats', symbol: 'Ls', id: 83 },
  LBP: { name: 'Lebanese Pound', symbol: '£', id: 84 },
  LSL: { name: 'Lesotho Loti', symbol: 'L', id: 85 },
  LRD: { name: 'Liberian Dollar', symbol: '$', id: 86 },
  LYD: { name: 'Libyan Dinar', symbol: 'د.ل', id: 87 },
  LTL: { name: 'Lithuanian Litas', symbol: 'Lt', id: 88 },
  MOP: { name: 'Macanese Pataca', symbol: '$', id: 89 },
  MKD: { name: 'Macedonian Denar', symbol: 'ден', id: 90 },
  MGA: { name: 'Malagasy Ariary', symbol: 'Ar', id: 91 },
  MWK: { name: 'Malawian Kwacha', symbol: 'MK', id: 92 },
  MYR: { name: 'Malaysian Ringgit', symbol: 'RM', id: 93 },
  MVR: { name: 'Maldivian Rufiyaa', symbol: 'Rf', id: 94 },
  MRO: { name: 'Mauritanian Ouguiya', symbol: 'MRU', id: 95 },
  MUR: { name: 'Mauritian Rupee', symbol: '₨', id: 96 },
  MXN: { name: 'Mexican Peso', symbol: '$', id: 97 },
  MDL: { name: 'Moldovan Leu', symbol: 'L', id: 98 },
  MNT: { name: 'Mongolian Tugrik', symbol: '₮', id: 99 },
  MAD: { name: 'Moroccan Dirham', symbol: 'MAD', id: 100 },
  MZM: { name: 'Mozambican Metical', symbol: 'MT', id: 101 },
  MMK: { name: 'Myanmar Kyat', symbol: 'K', id: 102 },
  NAD: { name: 'Namibian Dollar', symbol: '$', id: 103 },
  NPR: { name: 'Nepalese Rupee', symbol: '₨', id: 104 },
  ANG: { name: 'Netherlands Antillean Guilder', symbol: 'ƒ', id: 105 },
  TWD: { name: 'New Taiwan Dollar', symbol: '$', id: 106 },
  NZD: { name: 'New Zealand Dollar', symbol: '$', id: 107 },
  NIO: { name: 'Nicaraguan CÃ³rdoba', symbol: 'C$', id: 108 },
  NGN: { name: 'Nigerian Naira', symbol: '₦', id: 109 },
  KPW: { name: 'North Korean Won', symbol: '₩', id: 110 },
  NOK: { name: 'Norwegian Krone', symbol: 'kr', id: 111 },
  OMR: { name: 'Omani Rial', symbol: '.ع.ر', id: 112 },
  PKR: { name: 'Pakistani Rupee', symbol: '₨', id: 113 },
  PAB: { name: 'Panamanian Balboa', symbol: 'B/.', id: 114 },
  PGK: { name: 'Papua New Guinean Kina', symbol: 'K', id: 115 },
  PYG: { name: 'Paraguayan Guarani', symbol: '₲', id: 116 },
  PEN: { name: 'Peruvian Nuevo Sol', symbol: 'S/.', id: 117 },
  PHP: { name: 'Philippine Peso', symbol: '₱', id: 118 },
  PLN: { name: 'Polish Zloty', symbol: 'zł', id: 119 },
  QAR: { name: 'Qatari Rial', symbol: 'ق.ر', id: 120 },
  RON: { name: 'Romanian Leu', symbol: 'lei', id: 121 },
  RUB: { name: 'Russian Ruble', symbol: '₽', id: 122 },
  RWF: { name: 'Rwandan Franc', symbol: 'FRw', id: 123 },
  SVC: { name: 'Salvadoran ColÃ³n', symbol: '₡', id: 124 },
  WST: { name: 'Samoan Tala', symbol: 'SAT', id: 125 },
  SAR: { name: 'Saudi Riyal', symbol: '﷼', id: 126 },
  RSD: { name: 'Serbian Dinar', symbol: 'din', id: 127 },
  SCR: { name: 'Seychellois Rupee', symbol: 'SRe', id: 128 },
  SLL: { name: 'Sierra Leonean Leone', symbol: 'Le', id: 129 },
  SGD: { name: 'Singapore Dollar', symbol: '$', id: 130 },
  SKK: { name: 'Slovak Koruna', symbol: 'Sk', id: 131 },
  SBD: { name: 'Solomon Islands Dollar', symbol: 'Si$', id: 132 },
  SOS: { name: 'Somali Shilling', symbol: 'Sh.so.', id: 133 },
  ZAR: { name: 'South African Rand', symbol: 'R', id: 134 },
  KRW: { name: 'South Korean Won', symbol: '₩', id: 135 },
  XDR: { name: 'Special Drawing Rights', symbol: 'SDR', id: 136 },
  LKR: { name: 'Sri Lankan Rupee', symbol: 'Rs', id: 137 },
  SHP: { name: 'St. Helena Pound', symbol: '£', id: 138 },
  SDG: { name: 'Sudanese Pound', symbol: '.س.ج', id: 139 },
  SRD: { name: 'Surinamese Dollar', symbol: '$', id: 140 },
  SZL: { name: 'Swazi Lilangeni', symbol: 'E', id: 141 },
  SEK: { name: 'Swedish Krona', symbol: 'kr', id: 142 },
  CHF: { name: 'Swiss Franc', symbol: 'CHf', id: 143 },
  SYP: { name: 'Syrian Pound', symbol: 'LS', id: 144 },
  STD: { name: 'São Tomé and Príncipe Dobra', symbol: 'Db', id: 145 },
  TJS: { name: 'Tajikistani Somoni', symbol: 'SM', id: 146 },
  TZS: { name: 'Tanzanian Shilling', symbol: 'TSh', id: 147 },
  THB: { name: 'Thai Baht', symbol: '฿', id: 148 },
  TOP: { name: "Tongan Pa'anga", symbol: '$', id: 149 },
  TTD: { name: 'Trinidad & Tobago Dollar', symbol: '$', id: 150 },
  TND: { name: 'Tunisian Dinar', symbol: 'ت.د', id: 151 },
  TRY: { name: 'Turkish Lira', symbol: '₺', id: 152 },
  TMT: { name: 'Turkmenistani Manat', symbol: 'T', id: 153 },
  UGX: { name: 'Ugandan Shilling', symbol: 'USh', id: 154 },
  UAH: { name: 'Ukrainian Hryvnia', symbol: '₴', id: 155 },
  AED: { name: 'United Arab Emirates Dirham', symbol: 'إ.د', id: 156 },
  UYU: { name: 'Uruguayan Peso', symbol: '$', id: 157 },
  USD: { name: 'US Dollar', symbol: '$', id: 158 },
  UZS: { name: 'Uzbekistan Som', symbol: 'лв', id: 159 },
  VUV: { name: 'Vanuatu Vatu', symbol: 'VT', id: 160 },
  VEF: { name: 'Venezuelan BolÃvar', symbol: 'Bs', id: 161 },
  VND: { name: 'Vietnamese Dong', symbol: '₫', id: 162 },
  YER: { name: 'Yemeni Rial', symbol: '﷼', id: 163 },
  ZMK: { name: 'Zambian Kwacha', symbol: 'ZK', id: 164 },
};

export type CurrencyTypes = keyof typeof currencies;

export default currencies;
