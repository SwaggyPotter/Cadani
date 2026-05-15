export interface Product {
  name: string;
  description: string;
  datasheetUrl: string;
}

export interface ProductCategory {
  id: string;
  label: string;
  title: string;
  intro: string;
  products: Product[];
}

export const productCategories: ProductCategory[] = [
  {
    id: 'solarmodule',
    label: 'Solarmodule',
    title: 'Solarmodule',
    intro:
      'Solarmodule sind die Grundlage jeder Photovoltaikanlage. Cadani Solarinstallation setzt auf moderne monokristalline Module, Glas-Glas-Module und leistungsstarke All-Black-Varianten für private und gewerbliche Dachflächen.',
    products: [
      {
        name: 'Jinko Solarmodul',
        description: 'All-Black Solarmodul mit moderner Zelltechnologie für hohe Leistung und dezente Optik.',
        datasheetUrl:
          'https://cdn1.site-media.eu/images/document/7546299/05-Tiger_Neo_54HL4R-B_JKM425-445N-54HL4R-B-F2-DE-2.pdf',
      },
      {
        name: 'Trina Solarmodul',
        description: 'Monokristallines Glas-Folie-Modul mit Fokus auf Leistung, Zuverlässigkeit und Ästhetik.',
        datasheetUrl:
          'https://cdn1.site-media.eu/images/document/7546304/Datasheet_VertexS_DE09R.05_EU_DE_2023_A.pdf',
      },
      {
        name: 'JA Solar Modul',
        description: 'Glas-Glas-Modul mit hoher Effizienz und langer Produkt- und Leistungsgarantie.',
        datasheetUrl:
          'https://cdn1.site-media.eu/images/document/7546305/52-JAM54D41_LB_FB_JAM54D41_430-455_LB_Global_EN_20230626A_25_year_warranty.pdf',
      },
      {
        name: 'LONGi Solarmodul',
        description: 'Hochwertiges Modul für private und gewerbliche Aufdachanlagen.',
        datasheetUrl:
          'https://cdn1.site-media.eu/images/document/7546310/16-LR5_54HTH_Hi-MO6_L_Gi_LE_PM_T_PMD_059_F130_LR_5_54_HTH_420_440_M_V1_30_30_and_15_Black_Frame_Explorer_V19_de_WEB_40e90b1663.pdf',
      },
      {
        name: 'Jolywood Black Series',
        description: 'Transparentes Doppelglas-Modul mit hochwertiger Optik und robuster Bauweise.',
        datasheetUrl:
          'https://cdn1.site-media.eu/images/document/9462107/niwa_black_hd108n-r3-430-455w-en_2-0mm_25y_76ffdb6a7f0703e0a4f77a093d0826e0.pdf',
      },
      {
        name: 'Solar Fabrik',
        description: 'Hochwertige Solarmodule für effiziente Photovoltaikanlagen.',
        datasheetUrl:
          'https://cdn1.site-media.eu/images/document/15300654/d_mono_s4_tfb_445-450_hc_108_de-nJM2p5HaVWF96I5jqgcRTQ.pdf',
      },
      {
        name: 'AIKO Neostar 2S+',
        description: 'Doppelglas-Modul mit hoher Effizienz und moderner Zelltechnologie.',
        datasheetUrl:
          'https://cdn1.site-media.eu/images/document/9477363/aiko-a-mah54db_440-460w-neostar_2s.pdf',
      },
    ],
  },
  {
    id: 'stromspeicher',
    label: 'Stromspeicher',
    title: 'Stromspeicher',
    intro:
      'Ein Stromspeicher erhöht den Eigenverbrauch Ihrer Photovoltaikanlage und macht Solarstrom auch abends, nachts oder bei geringerer Sonneneinstrahlung nutzbar. Je nach System können Speicher modular erweitert oder mit Notstromlösungen kombiniert werden.',
    products: [
      {
        name: 'Huawei LUNA2000 Speicher',
        description: 'Modularer Stromspeicher für einfache Installation, Erweiterung und smarte Steuerung.',
        datasheetUrl: 'https://cdn1.site-media.eu/images/document/7546314/14-LUNA2000-S0_LUNA2000-5-15-S0.pdf',
      },
      {
        name: 'Huawei LUNA2000 S1',
        description: 'Smart String Energy Storage System von Huawei für moderne PV-Anlagen.',
        datasheetUrl:
          'https://cdn1.site-media.eu/images/document/9462294/15-LUNA2000-S1_LUNA2000-71421-S1_Datasheet_20240327.pdf',
      },
      {
        name: 'BYD Battery-Box',
        description: 'Erweiterbarer Batteriespeicher mit modularer Bauweise.',
        datasheetUrl:
          'https://cdn1.site-media.eu/images/document/7546317/7-Premium_HVS_210311_BYD_Battery-Box_Premium_HVS_HVM_Datenblatt_V1.5_DE.pdf',
      },
      {
        name: 'SMA Speicher',
        description: 'Zukunftssicherer Stromspeicher für intensive Nutzung und hohe Eigenverbrauchsquote.',
        datasheetUrl: 'https://cdn1.site-media.eu/images/document/7546319/57-HSBM_HS-BM-10-DS-de-11.pdf',
      },
      {
        name: 'Enphase Speicher',
        description: 'All-in-One Speicherlösung mit smarter Steuerung per App.',
        datasheetUrl: 'https://cdn1.site-media.eu/images/document/7846280/WebPage2.pdf',
      },
      {
        name: 'Pylontech',
        description: 'Hochwertiges Batteriesystem für private und gewerbliche PV-Anwendungen.',
        datasheetUrl:
          'https://cdn1.site-media.eu/images/document/9462276/05-Force-H2_2023_Residential_BESS_PY230529_EN.pdf',
      },
      {
        name: 'BMZ Hyperion',
        description: 'Lithium-Ionen-Hochvolt-Speicher für mehr Energieautonomie.',
        datasheetUrl:
          'https://cdn1.site-media.eu/images/document/9477389/3-Hyperion_new_Datenblatt_Hyperion_DE_20220831.pdf',
      },
      {
        name: 'GoodWe Lynx Home',
        description: 'Batteriesystem für PV-Reservestrom und höhere Energieunabhängigkeit.',
        datasheetUrl:
          'https://cdn1.site-media.eu/images/document/9477426/Lynx_F_PLUS_PLUS_GW_Lynx_Home_F_PLUS__Datasheet_EMEA-DE.pdf',
      },
      {
        name: 'Sungrow SBR',
        description: 'Hochspannungs-LFP-Batterie mit hoher Leistung und modularer Erweiterbarkeit.',
        datasheetUrl: 'https://cdn1.site-media.eu/images/document/9477489/speicher_sungrow_sbr_datenblatt.pdf',
      },
      {
        name: 'VARTA Element Backup',
        description: 'Stromspeicherlösung mit Backup-Funktion für ausgewählte Anwendungen.',
        datasheetUrl:
          'https://cdn1.site-media.eu/images/document/9477497/11-_VARTA_element_S5_DB_element_backup_Rebranding.pdf',
      },
      {
        name: 'SolarEdge Home Batterie',
        description: 'DC-gekoppelte Batterie mit hoher Systemeffizienz.',
        datasheetUrl:
          'https://cdn1.site-media.eu/images/document/9477558/25_-_Home_Battery_BAT-05K48M0B-01_solaredge-home-battery-datasheet.pdf',
      },
      {
        name: 'Fox ESS Speicher',
        description: 'Leistungsstarkes und skalierbares Batteriesystem.',
        datasheetUrl:
          'https://cdn1.site-media.eu/images/document/15394446/DE-ECS-2900-Datenblatt-V3.6-11.02-obEn57dhPP35aypk7oU8sQ.pdf',
      },
    ],
  },
  {
    id: 'wallboxen',
    label: 'Wallboxen',
    title: 'Wallboxen',
    intro:
      'Mit einer Wallbox kann überschüssiger Solarstrom direkt zum Laden eines Elektroautos genutzt werden. In Kombination mit einer PV-Anlage lässt sich die Eigenverbrauchsquote erhöhen und das Fahrzeug kostengünstiger laden.',
    products: [
      {
        name: 'Huawei Wallbox',
        description: 'Smart Charger von Huawei für komfortables E-Auto-Laden mit Solarstrom.',
        datasheetUrl:
          'https://cdn1.site-media.eu/images/document/7546320/01-Huawei_Smart_Charger_HUAWEI_Datenblatt_Residential_Smart_Charger_20230808.pdf',
      },
      {
        name: 'Fronius Wattpilot',
        description: 'Intelligente Ladelösung für PV-Überschussladen.',
        datasheetUrl:
          'https://cdn1.site-media.eu/images/document/7546326/16-Wattpilot_Go-Home_J_2.0_SE_DS_Fronius_Wattpilot_DE.pdf',
      },
      {
        name: 'SMA EV Charger',
        description: 'Wallbox mit smarter Integration in das SMA Energiesystem.',
        datasheetUrl: 'https://cdn1.site-media.eu/images/document/7546328/07-000163_DB_SMA_EV_Charger.pdf',
      },
      {
        name: 'GoodWe Wallbox',
        description: 'Nachhaltige Ladelösung für PV-Anlagen und E-Mobilität.',
        datasheetUrl:
          'https://cdn1.site-media.eu/images/document/9477438/GoodWe_HCA_Series_DB_GW_HCA_Series_EV_Charger_V1.1.pdf',
      },
      {
        name: 'SolarEdge Ladestation',
        description: 'E-Auto-Ladelösung mit nahtloser Integration in SolarEdge Systeme.',
        datasheetUrl: 'https://cdn1.site-media.eu/images/document/9477527/SolarEdge_EV_Charger_DB_se-ev-charger_1222.pdf',
      },
      {
        name: 'Growatt Thor Smart EV Charger',
        description: 'Smarte E-Auto-Ladelösung auch für bestehende Systeme.',
        datasheetUrl: 'https://cdn1.site-media.eu/images/document/9477726/Growatt_THOR_11AS-S-P-V1_22AS-S-P-V1_Datenblatt.pdf',
      },
      {
        name: 'KEBA KeContact P30',
        description: 'Robuste Wallbox-Lösung für privates und gewerbliches Laden.',
        datasheetUrl: 'https://cdn1.site-media.eu/images/document/9477734/07-000187_P30_c-series-green_Kabel_dbde.pdf',
      },
    ],
  },
  {
    id: 'wechselrichter',
    label: 'Wechselrichter',
    title: 'Wechselrichter',
    intro:
      'Der Wechselrichter ist das technische Herzstück einer Photovoltaikanlage. Er wandelt den erzeugten Gleichstrom in nutzbaren Wechselstrom um und steuert je nach System Speicher, Wallbox und Energiemanagement.',
    products: [
      {
        name: 'Huawei SUN2000 M1',
        description: 'Smart Energy Controller von Huawei für effiziente Anlagensteuerung.',
        datasheetUrl: 'https://cdn1.site-media.eu/images/document/7546331/5bjF1X-8-SUN2000_-_M1_SUN2000-3-10KTL-M1-HC.pdf',
      },
      {
        name: 'Huawei SUN2000 MB0',
        description: 'Dreiphasiger Huawei Wechselrichter für größere PV-Anlagen.',
        datasheetUrl:
          'https://cdn1.site-media.eu/images/document/9462253/22-SUN2000-12-25K-MB0_SUN2000-12_25K-MB0_Datasheet.pdf',
      },
      {
        name: 'Fronius Symo GEN24 Plus',
        description: 'Hybridwechselrichter mit bedarfsorientierter Notstromoption.',
        datasheetUrl:
          'https://cdn1.site-media.eu/images/document/7546334/01-Symo-GEN24_SE_DS_Fronius_Symo_GEN24_Plus_DE.pdf',
      },
      {
        name: 'SMA Sunny Tripower Smart Energy',
        description: 'Hybridwechselrichter als 2-in-1-Lösung für PV und Speicher.',
        datasheetUrl: 'https://cdn1.site-media.eu/images/document/7546335/54-STP-SE_STPxx-3SE-40-DS-de-11.pdf',
      },
      {
        name: 'Enphase Mikro-Wechselrichter',
        description: 'Leistungsstarke Mikro-Wechselrichter für modulbasierte PV-Systeme.',
        datasheetUrl: 'https://cdn1.site-media.eu/images/document/7846295/WebPage.pdf',
      },
      {
        name: 'GoodWe ET Plus+',
        description: 'Hybridwechselrichter zur Optimierung des Energieertrags.',
        datasheetUrl: 'https://cdn1.site-media.eu/images/document/9462125/ET_PLUS_16A_GW_ET_PLUS__16A_Datasheet_EMEA-DE_24.pdf',
      },
      {
        name: 'Sungrow Hybrid Wechselrichter',
        description: 'Dreiphasiger Hybrid-Wechselrichter für Speicher- und PV-Systeme.',
        datasheetUrl:
          'https://cdn1.site-media.eu/images/document/9477468/hybridwechselrichter_sungrow_sh5_0_6_0_8_0_10rt_20_v11_datenblatt.pdf',
      },
      {
        name: 'SolarEdge Wechselrichter',
        description: 'Dreiphasiger Wechselrichter mit SolarEdge Systemintegration.',
        datasheetUrl:
          'https://cdn1.site-media.eu/images/document/9477510/14-_3P_12.5_-_27.6_mit_SetApp_se-three-phase-inverter-setapp-datasheet-de.pdf',
      },
      {
        name: 'Kostal Plenticore Plus',
        description: 'Hybrid-Wechselrichter mit optional freischaltbarem Batterieeingang.',
        datasheetUrl:
          'https://cdn1.site-media.eu/images/document/9477679/20-PLENTICORE_plus_G2_DB_PLENTICORE_plus-G2_de_-_20220607.pdf',
      },
      {
        name: 'Growatt TL3-XH BP',
        description: 'Dreiphasiger Hybrid-Wechselrichter für moderne PV-Anlagen.',
        datasheetUrl: 'https://cdn1.site-media.eu/images/document/9477705/Growatt_MOD_3-10KTL3-XH_BP_Datenblatt.pdf',
      },
      {
        name: 'Fox ESS H3/AC3-Serie',
        description: 'Dreiphasiger Hybrid- und AC-Wechselrichter.',
        datasheetUrl: 'https://cdn1.site-media.eu/images/document/15394473/DE-H3AC3-Datenblatt-V3.8-11.20-nnv4zwwEd2sLZkkiiX-ECw.pdf',
      },
      {
        name: 'Huawei SUN2000 MAP0',
        description: 'Moderner Huawei Wechselrichter für leistungsstarke PV-Systeme.',
        datasheetUrl:
          'https://cdn1.site-media.eu/images/document/16486733/Datenblatt_Huawei_SUN2000-5-12K-MAP02-EocD2MzrOf8Gb00Dre6dMQ.pdf',
      },
      {
        name: 'GoodWe ET G2 Series',
        description: 'Wechselrichter-Serie für moderne PV- und Speicherlösungen.',
        datasheetUrl:
          'https://cdn1.site-media.eu/images/document/23264418/Datenblatt_GoodWe_GW6000_8000_10K_12K_15K_ET_Wechselrichter-gpQUrfg_Im_gAiZSif8cqQ.pdf',
      },
    ],
  },
  {
    id: 'energiemanagement-backup',
    label: 'Energiemanagement & Backup',
    title: 'Energiemanagement, Backup & Leistungsoptimierung',
    intro:
      'Energiemanagement, Smart Meter, Backup-Boxen und Leistungsoptimierer helfen dabei, den Solarstrom effizient zu verteilen, Verbrauchsdaten zu erfassen und die Anlage bei besonderen Anforderungen zu erweitern.',
    products: [
      {
        name: 'Huawei Backup Box',
        description: 'Backup-Lösung für ausgewählte Huawei Systeme bei Stromausfall.',
        datasheetUrl: 'https://cdn1.site-media.eu/images/document/7546338/14-LUNA2000-S0_20210330Backup_Box_DE_final.pdf',
      },
      {
        name: 'Huawei Smart Power Sensor',
        description: 'Smart Meter zur Erfassung und Steuerung von Energieflüssen.',
        datasheetUrl: 'https://cdn1.site-media.eu/images/document/7546344/7-ZB_SPS_HUAWEI_SmartPowerSensor_DT_DE.pdf',
      },
      {
        name: 'Huawei Leistungsoptimierer',
        description: 'Leistungsoptimierer für höhere Erträge bei anspruchsvollen Dachbedingungen.',
        datasheetUrl: 'https://cdn1.site-media.eu/images/document/7546347/22-MERC-1x00-P_Optimizer_MERC-1100-1300W-P_Datasheet_EN-EU.pdf',
      },
      {
        name: 'Huawei EMMA-A02',
        description: 'Energy Management Assistant für intelligentes Energiemanagement.',
        datasheetUrl: 'https://cdn1.site-media.eu/images/document/15394581/25_EMMA_A01_A02_EMMA-A02-XP953fKHqBEZfFgztEMrkA.pdf',
      },
      {
        name: 'Huawei SmartGuard',
        description: 'Dreiphasiger Ersatzstrom für das ganze Haus.',
        datasheetUrl:
          'https://cdn1.site-media.eu/images/document/15394608/34-SmartGuard-63A-T0_DB027_HUA2407_02897_Datenblatt_SmartGuard_63A_T0-s1vrtUVT6eCN1HHafgrcEg.pdf',
      },
      {
        name: 'Fox ESS EPS Box',
        description: 'Dreiphasige EPS-Box für Backup-Anwendungen.',
        datasheetUrl: 'https://cdn1.site-media.eu/images/document/15394657/EPS-BOX-TP-Datenblatt-5V1XkLiNs9Bb4_Xe52oSYw.pdf',
      },
    ],
  },
  {
    id: 'montagesysteme',
    label: 'Montagesysteme',
    title: 'Montagesysteme',
    intro:
      'Ein sicheres Montagesystem ist entscheidend für Stabilität, Dachschutz und Langlebigkeit einer Photovoltaikanlage. Je nach Dachart kommen unterschiedliche Unterkonstruktionen und Befestigungssysteme zum Einsatz.',
    products: [
      {
        name: 'novotegra',
        description: 'Montagesysteme für unterschiedliche Dacharten und Anforderungen.',
        datasheetUrl: 'https://cdn1.site-media.eu/images/document/7546350/novotegra-montagesystemkatalog-de.pdf',
      },
      {
        name: 'K2 Systems',
        description: 'Montagesysteme für Solaranlagen, insbesondere für Schrägdächer.',
        datasheetUrl: 'https://cdn1.site-media.eu/images/document/15394681/K2-pitched-roof-systems-de-fui6Uk4Phf5WdLwkmFnNYw.pdf',
      },
      {
        name: 'Würth Solar-Befestigungssysteme',
        description: 'Sichere und innovative Befestigungssysteme für Solaranlagen.',
        datasheetUrl: 'https://cdn1.site-media.eu/images/document/15394704/solar-befestigungssystem-X4w2Bt96J9cxP56CFW_uSw.pdf',
      },
    ],
  },
];

export const productCategoryCount = productCategories.length;
export const productCount = productCategories.reduce((count, category) => count + category.products.length, 0);

