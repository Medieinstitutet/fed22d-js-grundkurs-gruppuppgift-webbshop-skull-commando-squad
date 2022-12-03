Formuläret:

- Om faktura valts som betalsätt ska ett formulärfält för svenskt personnummer visas. Även detta fält ska valideras innan formuläret går att skicka iväg, dvs. att man fyllt i korrekt personnummer.
  Om kort väljs som betalsätt, visas fält för kortnummer, datum/år och CVC. Dessa behöver inte valideras!
  Checkbox för godkännande av behandling av personuppgifter
  Checkbox för beställning av nyhetsbrev (ska vara iklickad som default)
  Samtliga formulärfält ska valideras och formuläret/beställningen ska inte gå att skicka om det finns några fel
  Felen ska markeras och kommuniceras tydligt (t.ex. ej enbart med röd färg, tag i beaktande a11y)
  När formuläret är korrekt ifyllt ska Skicka-/Beställ-knappen aktiveras, innan det är den utgråad
  Det ska finnas en "Rensa beställning"-knapp som återställer samtliga formulärfält liksom eventuella beställda munkar/produkter (alltså antalet återställs till 0)
  Det ska finnas ett fält för att mata in en rabattkod.

Extra för formuläret:

x finns i varukorgen
x öppnas när man trycker på beställningsknappen

- här finns en sammanställning ink rabattkoder och övriga rabatter
- om kunden har beställt för mer än 800kr så kan man inte betala med faktura (disabled)
- när kunden har fyllt i allt och är klarbetald så ska kunden få en leveransbekräftelse

Rabatter med datumvillkor och timers:

x På måndagar innan kl. 10 ges 10 % rabatt på hela beställningssumman. Detta visas i varukorgssammanställningen som en rad med texten "Måndagsrabatt: 10 % på hela beställningen".

- På fredagar efter kl. 15 och fram till natten mellan söndag och måndag kl. 03.00 tillkommer ett helgpåslag på 15 % på alla munkar. Detta ska inte framgå för kunden att munkarna är dyrare, utan priset ska bara vara högre i "utskriften" av munkarna.

- Om kunden har beställt för totalt mer än 800 kr ska det inte gå att välja faktura som betalsätt.

- Om kunden har beställt minst 10 munkar av samma sort, ska munkpriset för just denna munksort rabatteras med 10 %

- Om kunden beställer totalt mer än 15 munkar så blir frakten gratis. I annat fall är fraktsumman 25 kr plus 10% av totalbeloppet i varukorgen.

- Om kunden inte har lagt beställningen inom 15 minuter så ska beställningsformuläret tömmas/rensas och kunden ska meddelas att denne är för långsam.

Extra uppgifter för rabatterna:

- Om det är jämn vecka och tisdag, så får man 25 kr rabatt på beställningen förutsatt att totalsumman överstiger 25 kr.
- Om det är luciadagen, så läggs det automatiskt till en luciamunk i beställningen.
- Om det är julafton, så ska alla priser visas med röd text och bakgrundsbilden på sidan ska ha jultema.
- Om rabattkoden a_damn_fine-cup_of-coffee matas in, blir hela beställningen 0 kr oavsett övriga gällande specialregler.
  Generellt levereras beställningar 30 minuter från då beställningen läggs, med följande undantag:Om det är helg så levereras munkarna istället om 1,5 h
- Om det är mitt i natten, så sker leverans om 45 min
- Om beställningen läggs någon gång på fredag mellan kl. 11 och 13 (då har personalen veckomöte) så är leveranstiden kl. 15.
