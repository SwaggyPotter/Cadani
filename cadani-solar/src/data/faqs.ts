export interface FaqItem {
  question: string;
  answer: string;
}

export const solarFaqs: FaqItem[] = [
  {
    question: 'Wie funktioniert eine Solaranlage?',
    answer:
      'Eine Solaranlage wandelt Sonnenlicht mithilfe von Photovoltaikmodulen in elektrische Energie um. Der erzeugte Strom kann direkt genutzt, in einem Batteriespeicher gespeichert oder ins öffentliche Netz eingespeist werden.',
  },
  {
    question: 'Lohnt sich eine Solaranlage in Deutschland überhaupt?',
    answer:
      'Ja. Auch bei bewölktem Himmel produziert eine Photovoltaikanlage Strom. Dank moderner Technik, gesunkener Anlagenkosten und möglicher Förderungen lohnt sich die Investition besonders langfristig.',
  },
  {
    question: 'Was kostet eine Solaranlage?',
    answer:
      'Die Kosten hängen von der Anlagengröße, dem gewünschten Speicher, der Dachfläche und den baulichen Gegebenheiten ab. Eine genaue Einschätzung ist daher erst nach einer individuellen Beratung sinnvoll.',
  },
  {
    question: 'Was ist der Unterschied zwischen Photovoltaik und Solarthermie?',
    answer: 'Photovoltaik erzeugt Strom. Solarthermie erzeugt Wärme, zum Beispiel für Warmwasser oder Heizung.',
  },
  {
    question: 'Wie lange hält eine Solaranlage?',
    answer:
      'Photovoltaikmodule erreichen häufig eine Lebensdauer von 25 bis 30 Jahren oder länger. Wechselrichter müssen je nach Modell und Nutzung oft früher ersetzt werden.',
  },
  {
    question: 'Muss ich die Anlage warten?',
    answer:
      'Photovoltaikanlagen sind grundsätzlich wartungsarm. Eine regelmäßige Sichtprüfung, Kontrolle der Erträge und bei Bedarf eine Reinigung helfen dabei, die Leistung langfristig zu erhalten.',
  },
];
