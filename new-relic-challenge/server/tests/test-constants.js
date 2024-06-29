// This is the array of customers in the database. Saved here
// for convenience purposes

const customers =  [
  {
    id: 1,
    first_name: 'GYPXT',
    last_name: 'LJMUH',
    company: 'RTGJV Inc.'
  },
  {
    id: 2,
    first_name: 'SIADA',
    last_name: 'CYBPC',
    company: 'TYUNH Inc.'
  },
  {
    id: 3,
    first_name: 'CMBAR',
    last_name: 'XVKGL',
    company: 'GUCMN Inc.'
  },
  {
    id: 4,
    first_name: 'XSDDP',
    last_name: 'YJQSG',
    company: 'TQDYA Inc.'
  },
  {
    id: 5,
    first_name: 'UFGSS',
    last_name: 'GSLGH',
    company: 'WJPPF Inc.'
  },
  {
    id: 6,
    first_name: 'LFWUK',
    last_name: 'VCMHM',
    company: 'AMNLO Inc.'
  },
  {
    id: 7,
    first_name: 'CGETB',
    last_name: 'YXKGV',
    company: 'NTTAW Inc.'
  },
  {
    id: 8,
    first_name: 'QFVFK',
    last_name: 'PUFHN',
    company: 'VFQKX Inc.'
  },
  {
    id: 9,
    first_name: 'VFADS',
    last_name: 'VCTNI',
    company: 'SDKLM Inc.'
  },
  {
    id: 10,
    first_name: 'SPJXW',
    last_name: 'QJOYD',
    company: 'LAVRP Inc.'
  },
  {
    id: 11,
    first_name: 'FMXXM',
    last_name: 'XDGLI',
    company: 'SNPHN Inc.'
  },
  {
    id: 12,
    first_name: 'MUVEP',
    last_name: 'TYUDM',
    company: 'KFVBG Inc.'
  },
  {
    id: 13,
    first_name: 'WWJTD',
    last_name: 'SFXUF',
    company: 'TEDQB Inc.'
  },
  {
    id: 14,
    first_name: 'HMLCL',
    last_name: 'VBNIC',
    company: 'CHYVV Inc.'
  },
  {
    id: 15,
    first_name: 'FOPXC',
    last_name: 'XFPXA',
    company: 'QWSDY Inc.'
  },
  {
    id: 16,
    first_name: 'UDEPP',
    last_name: 'KYSPY',
    company: 'YJGIL Inc.'
  },
  {
    id: 17,
    first_name: 'OOFRF',
    last_name: 'HMNDF',
    company: 'QGEJV Inc.'
  },
  {
    id: 18,
    first_name: 'CQDPR',
    last_name: 'LOBNR',
    company: 'FBVLH Inc.'
  },
  {
    id: 19,
    first_name: 'JNXBM',
    last_name: 'IGVAX',
    company: 'VUBIT Inc.'
  },
  {
    id: 20,
    first_name: 'FCNKO',
    last_name: 'BTYLT',
    company: 'SKHRX Inc.'
  },
  {
    id: 21,
    first_name: 'MGQTF',
    last_name: 'OQTEA',
    company: 'AJJIE Inc.'
  },
  {
    id: 22,
    first_name: 'CIGSG',
    last_name: 'IAXLY',
    company: 'RPTIC Inc.'
  },
  {
    id: 23,
    first_name: 'AXTCQ',
    last_name: 'NYBTP',
    company: 'CKCUD Inc.'
  },
  {
    id: 24,
    first_name: 'PIHGB',
    last_name: 'DOBDO',
    company: 'PPEEK Inc.'
  },
  {
    id: 25,
    first_name: 'NBOWD',
    last_name: 'CQSEW',
    company: 'XQXGX Inc.'
  },
  {
    id: 26,
    first_name: 'KTTGL',
    last_name: 'BTVKF',
    company: 'YVYPR Inc.'
  },
  {
    id: 27,
    first_name: 'EHRXS',
    last_name: 'BQFFM',
    company: 'NJGQR Inc.'
  },
  {
    id: 28,
    first_name: 'MBQEF',
    last_name: 'UYORO',
    company: 'EEWNE Inc.'
  },
  {
    id: 29,
    first_name: 'SXTKM',
    last_name: 'OFOCE',
    company: 'JQWFC Inc.'
  },
  {
    id: 30,
    first_name: 'AOVCM',
    last_name: 'GDVEA',
    company: 'DPBGV Inc.'
  },
  {
    id: 31,
    first_name: 'FDIMN',
    last_name: 'NBXBX',
    company: 'AEBWX Inc.'
  },
  {
    id: 32,
    first_name: 'CKDNK',
    last_name: 'LBRHB',
    company: 'RWFPJ Inc.'
  },
  {
    id: 33,
    first_name: 'APDLY',
    last_name: 'EHAFS',
    company: 'GUXQG Inc.'
  },
  {
    id: 34,
    first_name: 'MCGFR',
    last_name: 'AXTXG',
    company: 'QPBBB Inc.'
  },
  {
    id: 35,
    first_name: 'NRGGH',
    last_name: 'QPTWX',
    company: 'GMQFW Inc.'
  },
  {
    id: 36,
    first_name: 'LOBCF',
    last_name: 'OGJMG',
    company: 'EDKAT Inc.'
  },
  {
    id: 37,
    first_name: 'VXPRJ',
    last_name: 'VPBNN',
    company: 'NYHOD Inc.'
  },
  {
    id: 38,
    first_name: 'UGWQR',
    last_name: 'VXVVB',
    company: 'VEGYR Inc.'
  },
  {
    id: 39,
    first_name: 'NHJEG',
    last_name: 'DPVFH',
    company: 'PKNFL Inc.'
  },
  {
    id: 40,
    first_name: 'TRGQG',
    last_name: 'QABFR',
    company: 'JMSKS Inc.'
  },
  {
    id: 41,
    first_name: 'ISIDN',
    last_name: 'WUTUR',
    company: 'MLGIH Inc.'
  },
  {
    id: 42,
    first_name: 'ITVMR',
    last_name: 'FWKYI',
    company: 'UCLLN Inc.'
  },
  {
    id: 43,
    first_name: 'NTBPI',
    last_name: 'AJLYW',
    company: 'CKNOT Inc.'
  },
  {
    id: 44,
    first_name: 'EFRNB',
    last_name: 'MWCCQ',
    company: 'WQAVI Inc.'
  },
  {
    id: 45,
    first_name: 'GFOQW',
    last_name: 'MPQGT',
    company: 'CHIQT Inc.'
  },
  {
    id: 46,
    first_name: 'UMWAJ',
    last_name: 'DSGMH',
    company: 'QRJFD Inc.'
  },
  {
    id: 47,
    first_name: 'HUQAI',
    last_name: 'NWVNI',
    company: 'XGCHE Inc.'
  },
  {
    id: 48,
    first_name: 'UQHWF',
    last_name: 'SYLVJ',
    company: 'NTBBP Inc.'
  },
  {
    id: 49,
    first_name: 'RSRGY',
    last_name: 'KXYVE',
    company: 'NQEGE Inc.'
  },
  {
    id: 50,
    first_name: 'GXLWQ',
    last_name: 'EVQOP',
    company: 'IDOQM Inc.'
  },
  {
    id: 51,
    first_name: 'UPIAM',
    last_name: 'DQAGX',
    company: 'DKPHC Inc.'
  },
  {
    id: 52,
    first_name: 'FJEQP',
    last_name: 'AYFAM',
    company: 'NHSYN Inc.'
  },
  {
    id: 53,
    first_name: 'FQDQS',
    last_name: 'XHPIN',
    company: 'VCKTB Inc.'
  },
  {
    id: 54,
    first_name: 'EYXGJ',
    last_name: 'YONOY',
    company: 'UPKNB Inc.'
  },
  {
    id: 55,
    first_name: 'LUQIG',
    last_name: 'XTVQT',
    company: 'KKNGS Inc.'
  },
  {
    id: 56,
    first_name: 'PFSDU',
    last_name: 'SAGRL',
    company: 'TFTXS Inc.'
  },
  {
    id: 57,
    first_name: 'FSHPJ',
    last_name: 'LMBJS',
    company: 'XCNVF Inc.'
  },
  {
    id: 58,
    first_name: 'WCHWU',
    last_name: 'FLGLW',
    company: 'HJVED Inc.'
  },
  {
    id: 59,
    first_name: 'PLAMP',
    last_name: 'YGYIO',
    company: 'PWKBR Inc.'
  },
  {
    id: 60,
    first_name: 'GGKXA',
    last_name: 'PUTQC',
    company: 'QGJNC Inc.'
  },
  {
    id: 61,
    first_name: 'LMKLS',
    last_name: 'SPTRJ',
    company: 'IMDTD Inc.'
  },
  {
    id: 62,
    first_name: 'HWCYD',
    last_name: 'ADFLU',
    company: 'CRHPV Inc.'
  },
  {
    id: 63,
    first_name: 'BHRUX',
    last_name: 'VIIDX',
    company: 'GYGJD Inc.'
  },
  {
    id: 64,
    first_name: 'HOOKI',
    last_name: 'WPUTR',
    company: 'JUCKT Inc.'
  },
  {
    id: 65,
    first_name: 'ESXTJ',
    last_name: 'JCJEV',
    company: 'IDUWD Inc.'
  },
  {
    id: 66,
    first_name: 'PCKRS',
    last_name: 'WTNVH',
    company: 'TEKGQ Inc.'
  },
  {
    id: 67,
    first_name: 'RFFFM',
    last_name: 'BQESW',
    company: 'GPPKU Inc.'
  },
  {
    id: 68,
    first_name: 'LQQJQ',
    last_name: 'FGHMR',
    company: 'FFGGG Inc.'
  },
  {
    id: 69,
    first_name: 'BOGCA',
    last_name: 'OIKUN',
    company: 'QOUQS Inc.'
  },
  {
    id: 70,
    first_name: 'XOLQP',
    last_name: 'LJVEJ',
    company: 'JNIIJ Inc.'
  },
  {
    id: 71,
    first_name: 'MSTHC',
    last_name: 'QEJOL',
    company: 'PVAMP Inc.'
  },
  {
    id: 72,
    first_name: 'PBIVC',
    last_name: 'MAIGQ',
    company: 'PCLWQ Inc.'
  },
  {
    id: 73,
    first_name: 'VTISV',
    last_name: 'STBHH',
    company: 'FJMUI Inc.'
  },
  {
    id: 74,
    first_name: 'FPJEW',
    last_name: 'TOWNI',
    company: 'BDVWM Inc.'
  },
  {
    id: 75,
    first_name: 'GHXMJ',
    last_name: 'VLYGT',
    company: 'GADMR Inc.'
  },
  {
    id: 76,
    first_name: 'OOXSF',
    last_name: 'MEAIO',
    company: 'AQFQU Inc.'
  },
  {
    id: 77,
    first_name: 'WYBIJ',
    last_name: 'DOGBV',
    company: 'TDCRN Inc.'
  },
  {
    id: 78,
    first_name: 'GLAPN',
    last_name: 'JLEKV',
    company: 'JFSEF Inc.'
  },
  {
    id: 79,
    first_name: 'EGVRU',
    last_name: 'EAEMJ',
    company: 'SYASJ Inc.'
  },
  {
    id: 80,
    first_name: 'XRXSR',
    last_name: 'IFTHF',
    company: 'XFXTP Inc.'
  },
  {
    id: 81,
    first_name: 'VGCVV',
    last_name: 'PRHWC',
    company: 'BWCKP Inc.'
  },
  {
    id: 82,
    first_name: 'PNRPM',
    last_name: 'QNQXS',
    company: 'VXABV Inc.'
  },
  {
    id: 83,
    first_name: 'RYLNJ',
    last_name: 'JPJVR',
    company: 'FHWBF Inc.'
  },
  {
    id: 84,
    first_name: 'LVAVO',
    last_name: 'YHFCA',
    company: 'WGKXS Inc.'
  },
  {
    id: 85,
    first_name: 'HRYYK',
    last_name: 'ANWPS',
    company: 'CXMIP Inc.'
  },
  {
    id: 86,
    first_name: 'EQSXF',
    last_name: 'BLFMK',
    company: 'JUGXU Inc.'
  },
  {
    id: 87,
    first_name: 'DSARO',
    last_name: 'GBGEW',
    company: 'LAESH Inc.'
  },
  {
    id: 88,
    first_name: 'NDAUC',
    last_name: 'XLCCG',
    company: 'SMWSO Inc.'
  },
  {
    id: 89,
    first_name: 'TVOFE',
    last_name: 'GOHYB',
    company: 'QQSUM Inc.'
  },
  {
    id: 90,
    first_name: 'OSTLU',
    last_name: 'PFKMN',
    company: 'MNGRV Inc.'
  },
  {
    id: 91,
    first_name: 'QLJBQ',
    last_name: 'KSLRF',
    company: 'SBAKN Inc.'
  },
  {
    id: 92,
    first_name: 'HBBIC',
    last_name: 'PLTUP',
    company: 'QFPLR Inc.'
  },
  {
    id: 93,
    first_name: 'MWOVT',
    last_name: 'CAXWL',
    company: 'LIIDO Inc.'
  },
  {
    id: 94,
    first_name: 'BVWBI',
    last_name: 'ROOYD',
    company: 'HLCGC Inc.'
  },
  {
    id: 95,
    first_name: 'MSTYP',
    last_name: 'TAIWA',
    company: 'GUPCV Inc.'
  },
  {
    id: 96,
    first_name: 'WPLLD',
    last_name: 'IVHII',
    company: 'BRJOE Inc.'
  },
  {
    id: 97,
    first_name: 'QDMVJ',
    last_name: 'SONTX',
    company: 'YJHAY Inc.'
  },
  {
    id: 98,
    first_name: 'AGWOW',
    last_name: 'NDSNH',
    company: 'CDYXM Inc.'
  },
  {
    id: 99,
    first_name: 'WAGTC',
    last_name: 'XRQOA',
    company: 'RUFPL Inc.'
  },
  {
    id: 100,
    first_name: 'SGRLO',
    last_name: 'PDHSU',
    company: 'JCRFK Inc.'
  }
];

module.exports = customers;
