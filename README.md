# Angular Concepts

## Components

Angular-Anwendungen bestehen aus Komponenten - den Haupt-Bausteinen.
Eine Komponente ist eine Codeklasse, die dekoriert wird als `Component`
mit einem zugeordneten HTML-Template und optional einem Selektor in
den Metadaten.

## Modules

Ein Modul ist eine Codeklasse dekoriert als `NgModule`.
Damit eine Komponente benutzt werden kann, muss sie in einem Modul
deklariert werden. Dies geschieht im Dekorator der zusammengefasst
folgende Deklarationen enthält:

- Komponenten, die dieses Modul deklariert</li>
- Importierte Module, die von diesem Modul benutzt werden</li>
- Komponenten, die dieses Modul zur Verwendung in anderen Modulen exportiert
- Bootstrap-Komponenten (die zum Anwendungsstart benötigt werden)

Der Anwendungsstart erfolgt, indem ein Hauptmodul von der jeweiligen
Angular-Plattform gebootstrapt wird. Dieses Hauptmodul definiert die
Bootstrap-Komponente, die von Angular in der`index.html` gerendert wird.
