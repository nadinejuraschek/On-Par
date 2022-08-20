import Header from 'components/Header';

const EmergencyNumbers = () => {
  return (
    <main>
        <Header header='Emergency Numbers' />

        <div className='costum-container'>
          <table className='ui selectable celled table'>
            <thead>
              <tr>
                <th></th>
                <th>Number</th>
                <th>When to Call</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Au Pair in America 24-Hour Emergency Service</td>
                <td>+1 (800) 928-7247</td>
                <td>
                  <ul className='ui list'>
                    <li>Community Counselor can not be reached</li>
                    <li>severe issue that needs immediate attention</li>
                    <li>legal trouble</li>
                    <li>serious medical issue</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Ambulance, Police, Fire Department</td>
                <td>911</td>
                <td>
                  <ul className='ui list'>
                    <li>Crime in Progress</li>
                    <li>Life-threatening Situation (Medical or Other)</li>
                    <li>Fire, Smoke</li>
                    <li>Traffic Accident</li>
                    <li>Elevator Rescue</li>
                    <li>Beach or Water-Related Emergency</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Local Police Department</td>
                <td></td>
                <td>
                  Non-Emergency Situation that requires help from a police
                  officer.
                </td>
              </tr>
              <tr>
                <td>Poison Control</td>
                <td>+1 (800) 222-1222</td>
                <td>Reaches the American Association of Poison Control.</td>
              </tr>
              <tr>
                <td>Animal Poison Control</td>
                <td>+1 (888) 426-4435</td>
                <td>
                  Reaches the ASPCA Animal Poison Control Center. Call if the
                  family's pet may have ingested a poisonous substance.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    </main>
  );
};

export default EmergencyNumbers;
