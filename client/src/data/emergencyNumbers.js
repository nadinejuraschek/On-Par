export const emergencyNumbers = {
  headerRows: [
    { cells: [
      { value: "" },
      { value: "Number" },
      { value: "When to Call" },
    ] },
  ],
  contentRows: [
    { cells: [
      { value: "Au Pair in America 24-Hour Emergency Service" },
      { value: "+1 (800) 928-7247" },
      { value: <ul className="ui list">
        <li>Community Counselor can not be reached</li>
        <li>severe issue that needs immediate attention</li>
        <li>legal trouble</li>
        <li>serious medical issue</li>
      </ul> },
    ] },
    { cells: [
      { value: "Ambulance, Police, Fire Department" },
      { value: "911" },
      { value: <ul className="ui list">
        <li>Crime in Progress</li>
        <li>Life-threatening Situation (Medical or Other)</li>
        <li>Fire, Smoke</li>
        <li>Traffic Accident</li>
        <li>Elevator Rescue</li>
        <li>Beach or Water-Related Emergency</li>
      </ul> },
    ] },
    { cells: [
      { value: "Local Police Department" },
      { value: "" },
      { value: "Non-Emergency Situation that requires help from a police officer." },
    ] },
    { cells: [
      { value: "Poison Control" },
      { value: "+1 (800) 222-1222" },
      { value: "Reaches the American Association of Poison Control." },
    ] },
    { cells: [
      { value: "Animal Poison Control" },
      { value: "+1 (888) 426-4435" },
      { value: "Reaches the ASPCA Animal Poison Control Center. Call if the family&apos;s pet may have ingested a poisonous substance." },
    ] },
  ],
};
