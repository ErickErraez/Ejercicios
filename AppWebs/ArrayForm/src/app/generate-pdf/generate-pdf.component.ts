import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-generate-pdf',
  templateUrl: './generate-pdf.component.html',
  styleUrls: ['./generate-pdf.component.css']
})
export class GeneratePdfComponent implements OnInit {
  texto: any;
  texto2: any;
  textoTotal: any;
  lines: any;
  rows: any;
  format: any;
  fontSize: any;
  dimtext: any;
  ht: any
  wt: any
  x: any = 15;
  y: any = 25;
  count: any;
  dimensionArray: any;

  constructor() { }

  ngOnInit() {
    this.crearPdf();
  }

  crearPdf() {
    // tslint:disable-next-line: max-line-length
    this.texto = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac cursus tortor. Morbi in finibus metus. Vivamus placerat nisi id augue molestie suscipit. Praesent eget consectetur libero. Nam feugiat accumsan quam volutpat vulputate. Sed ultricies ante quis arcu condimentum, sed ultricies neque aliquet. Quisque gravida erat eget est efficitur, vitae finibus enim tempor. Cras vel ex velit. Nulla tortor ante, tristique non ultricies interdum, dapibus vitae lorem. Morbi tincidunt bibendum augue in bibendum. Cras vel neque id dui blandit viverra. Suspendisse diam arcu, fermentum sit amet dolor sed, pulvinar tempor augue. Maecenas non sem et nisi ultrices dignissim non id nunc. Donec velit est, sollicitudin sit amet turpis in, blandit venenatis elit. Fusce mi nibh, sagittis vitae felis quis, mollis iaculis est. Donec at lorem ex. Nam at consectetur sem. Aliquam viverra magna lorem, eu efficitur risus imperdiet vitae. Vivamus sit amet leo vitae augue scelerisque maximus ac et dui. Praesent semper mauris malesuada mi molestie sagittis. Nulla porta elementum risus at imperdiet. Donec eu nisl sit amet turpis tincidunt venenatis et id purus. Donec iaculis tellus ut neque rhoncus venenatis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam ex eros, volutpat ut nulla ac, hendrerit gravida orci. Aenean eget mattis libero, eu lobortis eros. Etiam sodales scelerisque elit, et vestibulum purus tincidunt volutpat. Pellentesque pulvinar enim luctus orci fringilla, quis malesuada ipsum sollicitudin. Cras sapien sem, viverra ut nulla ut, facilisis iaculis nisl. Vivamus vel est lacinia, blandit nisl quis, sollicitudin augue. Curabitur hendrerit gravida fermentum. Pellentesque malesuada, orci eu varius mattis, augue metus eleifend erat, at dictum lorem erat quis nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut et eros nunc. Integer aliquet diam vitae felis sodales, sed ornare nisl vestibulum. Vestibulum hendrerit ipsum at semper consectetur. Mauris efficitur mi ac ligula aliquet, vestibulum ultrices leo mattis. Suspendisse tempus, purus vel tincidunt ultrices, purus magna gravida nulla, non pellentesque massa sapien et leo. Donec convallis ipsum id odio vulputate, ac cursus risus tincidunt. Ut placerat rhoncus ipsum at tincidunt. Donec quis malesuada lectus, eu condimentum augue. Nunc hendrerit massa orci. Etiam nec augue ultricies, hendrerit erat quis, consequat metus. Pellentesque eu tempus orci, et hendrerit urna. Morbi sit amet purus eu dolor eleifend vulputate. Sed sollicitudin eu dolor vitae scelerisque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sagittis, dolor pretium maximus accumsan, purus magna fringilla nisl, id imperdiet lacus dui eget nibh. Morbi mollis, dolor sed placerat condimentum, nisl ipsum dictum libero, sit amet convallis nunc diam at magna. Curabitur leo justo, sollicitudin eleifend tincidunt ut, ullamcorper eu leo. Cras porttitor aliquam blandit. Nunc lorem ipsum, eleifend et lobortis sit amet, auctor a elit. Sed leo turpis, molestie eget massa in, egestas bibendum quam. Fusce pretium, risus et suscipit pulvinar, sapien neque luctus felis, pharetra pulvinar sapien mi fringilla ex. Duis sollicitudin est nec erat consequat euismod. Vivamus at eleifend ipsum. Praesent ex diam, elementum id imperdiet quis, ultricies nec enim. Maecenas quam nunc, dictum id nisl iaculis, aliquam mollis urna. Cras ac leo eget dui facilisis dapibus. Sed ac vestibulum eros. Phasellus efficitur scelerisque nunc, eget interdum quam venenatis nec. Mauris ut aliquam velit. Fusce ullamcorper, libero et ultricies venenatis, leo leo suscipit urna, vitae dictum massa nunc id est. Suspendisse eu porta diam. Proin tincidunt eleifend dolor nec iaculis. Donec volutpat ultrices odio gravida varius. Duis venenatis nisl volutpat porta tincidunt. Aliquam nec metus nec risus maximus vestibulum consectetur ac leo.Maecenas et mi pretium, sodales est ut, interdum tortor. Nunc molestie quam eget nulla tincidunt, vitae egestas mauris interdum. Sed accumsan est nec sem maximus, eu lobortis tellus cursus. Suspendisse volutpat a neque luctus posuere. Aliquam tincidunt pulvinar augue vitae venenatis. Proin pharetra nulla quis turpis porttitor tincidunt. Fusce sollicitudin at neque at pretium. Proin porta ligula nec pulvinar posuere. Donec a tellus in lorem rhoncus tempor. Maecenas orci ex, egestas et elit sit amet, mattis sagittis dui. Duis vitae lorem nibh. Aliquam volutpat facilisis dolor, sit amet feugiat nisi ullamcorper non. Curabitur bibendum ut sapien in consectetur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus iaculis non odio a finibus. Cras ornare non dolor vitae feugiat.';
    // tslint:disable-next-line: max-line-length
    this.texto2 = 'In interdum semper tempor. Sed pretium nisl ut nisl sodales, eu vestibulum lorem commodo. Sed eu mollis nisl. Duis in orci a nunc aliquet dignissim. Quisque imperdiet urna augue. Mauris pharetra, augue vitae tincidunt aliquet, nisi dolor posuere augue, vehicula maximus ligula metus ut risus. Donec condimentum tellus gravida tellus mattis sollicitudin. Curabitur id enim at justo vestibulum congue.Nullam blandit commodo erat, et rutrum nisl mollis ac. Maecenas nec felis sit amet dui suscipit pretium. Proin vel elementum urna, et vestibulum dui. Vivamus ac eros in dui iaculis auctor sodales at sem. Aliquam ullamcorper pellentesque purus, et interdum est posuere et. Aliquam erat volutpat. Nunc ac consequat lacus. Vivamus vel malesuada justo, ac imperdiet neque. Pellentesque nec lacus aliquam, molestie lectus sagittis, finibus neque. Ut eleifend nulla eu erat rhoncus varius. Sed ut laoreet purus, a iaculis nibh. Integer pharetra libero non dolor rutrum, eget sollicitudin turpis pharetra. Maecenas at diam nec nisi suscipit sollicitudin in sit amet felis.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum varius luctus tellus nec porta. Proin ultricies porta nibh sed porta. Pellentesque feugiat leo sed nibh eleifend, eu consequat nunc tempus. Nulla tempus, nibh eu iaculis ultricies, arcu tortor euismod purus, id consequat quam elit consectetur neque. Sed at mi lacus. Cras sodales commodo mauris, vitae volutpat libero volutpat et. Etiam ullamcorper et nibh ac scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam iaculis tellus leo, et bibendum risus sollicitudin nec. Mauris vestibulum ex a nisl pulvinar, quis egestas massa imperdiet. Sed sem neque, cursus ut iaculis eget, tempus at risus. Ut vulputate nulla elit, sed posuere ligula fringilla in. Nam non ligula ex. Cras pellentesque tempor lacus, quis hendrerit nisi tempus eget. Aliquam faucibus ut felis eget vehicula. Cras auctor pretium dui non lobortis. Donec laoreet nisl vel vestibulum faucibus.';
    this.textoTotal = this.texto + this.texto2
    this.rows = 4;
    this.format = 'a4';
    this.fontSize = 12;
    const doc = new jsPDF('p', 'mm', this.format, true);
    doc.setFontSize(this.fontSize);
    doc.setFontStyle('arial');
    this.ht = doc.internal.pageSize.height;
    this.wt = doc.internal.pageSize.width;
    let columnWidth = (this.wt / this.rows) - (this.rows === 1 ? 30 : 10);
    this.lines = doc.splitTextToSize(this.textoTotal, columnWidth);
    this.dimtext = doc.getTextDimensions(this.textoTotal);
    let count = 0;
    let totalRows = this.rows;
    let dimensionArray;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.lines.length; i++) {
      count += 1;
      dimensionArray = this.dimtext.h * count;
      if (dimensionArray < this.ht - 50) {
        doc.text(this.lines[i], this.x, this.y);
        this.y += this.dimtext.h;
      } else {
        if (this.rows === 1 || totalRows === 1) {
          doc.addPage();
          doc.text(this.lines[i], 15, 25);
          this.y = 25;
          this.y += this.dimtext.h;
          count = 1;
          totalRows = this.rows;
          this.x = 15
        } else {
          this.x += columnWidth + 3;
          this.y = 25;
          count = 1;
          doc.text(this.lines[i], this.x, this.y);
          this.y += this.dimtext.h;
          totalRows -= 1;
        }
      }
    }
    doc.save('prueba.pdf');
  }

}

