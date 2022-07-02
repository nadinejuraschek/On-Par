import styles from "./flag.module.css";

const Flag = ( { country } ) => {
  let countryName;
  let countryFlag = country + " flag";

  if ( country === "ar" ) {
    countryName = "Argentina";
    countryFlag = country + " flag";
  } else if ( country === "au" ) {
    countryName = "Australia";
  } else if ( country === "at" ) {
    countryName = "Austria";
  } else if ( country === "bo" ) {
    countryName = "Bolivia";
  } else if ( country === "ba" ) {
    countryName = "Bosnia";
  } else if ( country === "br" ) {
    countryName = "Brazil";
  } else if ( country === "ca" ) {
    countryName = "Canada";
  } else if ( country === "cl" ) {
    countryName = "Chile";
  } else if ( country === "cn" ) {
    countryName = "China";
  } else if ( country === "co" ) {
    countryName = "Colombia";
  } else if ( country === "cr" ) {
    countryName = "Costa Rica";
  } else if ( country === "hr" ) {
    countryName = "Croatia";
  } else if ( country === "cz" ) {
    countryName = "Czech Republic";
  } else if ( country === "dk" ) {
    countryName = "Denmark";
  } else if ( country === "ec" ) {
    countryName = "Ecuador";
  } else if ( country === "sv" ) {
    countryName = "El Salvador";
  } else if ( country === "ee" ) {
    countryName = "Estonia";
  } else if ( country === "fi" ) {
    countryName = "Finland";
  } else if ( country === "fr" ) {
    countryName = "France";
  } else if ( country === "de" ) {
    countryName = "Germany";
  } else if ( country === "gt" ) {
    countryName = "Guatemala";
  } else if ( country === "hu" ) {
    countryName = "Hungary";
  } else if ( country === "ie" ) {
    countryName = "Ireland";
  } else if ( country === "il" ) {
    countryName = "Israel";
  } else if ( country === "it" ) {
    countryName = "Italy";
  } else if ( country === "lv" ) {
    countryName = "Latvia";
  } else if ( country === "mx" ) {
    countryName = "Mexico";
  } else if ( country === "nl" ) {
    countryName = "Netherlands";
  } else if ( country === "nz" ) {
    countryName = "New Zealand";
  } else if ( country === "pa" ) {
    countryName = "Panama";
  } else if ( country === "pe" ) {
    countryName = "Peru";
  } else if ( country === "pl" ) {
    countryName = "Poland";
  } else if ( country === "pt" ) {
    countryName = "Portugal";
  } else if ( country === "ru" ) {
    countryName = "Russia";
  } else if ( country === "cs" ) {
    countryName = "Serbia";
  } else if ( country === "sk" ) {
    countryName = "Slovakia";
  } else if ( country === "za" ) {
    countryName = "South Africa";
  } else if ( country === "kr" ) {
    countryName = "South Korea";
  } else if ( country === "es" ) {
    countryName = "Spain";
  } else if ( country === "se" ) {
    countryName = "Sweden";
  } else if ( country === "ch" ) {
    countryName = "Switzerland";
  } else if ( country === "th" ) {
    countryName = "Thailand";
  } else if ( country === "tr" ) {
    countryName = "Turkey";
  } else if ( country === "ua" ) {
    countryName = "Ukraine";
  } else if ( country === "gb" ) {
    countryName = "United Kingdom";
  }
  return (
    <div className={ styles.field }>
      <div className={ styles.label }>
        <i className={ countryFlag }></i>
        Home Country:
      </div>
      <p>{ countryName }</p>
    </div>
  );
};

export default Flag;
