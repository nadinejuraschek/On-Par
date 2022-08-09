// STYLES
import styles from './resources.module.css';

// ICONS
import tax from 'images/tax.svg';
import childcare from 'images/childcare.svg';
import app from 'images/app.svg';
import traveling from 'images/traveling.svg';
import education from 'images/education.svg';
import firstAid from 'images/first-aid.svg';
import englishLanguage from 'images/english-language.svg';
import rule from 'images/rule.svg';
import extension from 'images/extension.svg';
import driversLicense from 'images/driver-license.svg';

// COMPONENTS
import Item from './ResourceItem';

const Resources = () => {
  const resources = [
    {
      icon: tax,
      label: 'Paying Taxes',
      link: '/resources/tax',
      active: true,
    },
    {
      icon: childcare,
      label: 'Childcare Activities',
      active: false,
    },
    {
      icon: app,
      label: 'Great Apps to Try',
      active: false,
    },
    {
      icon: traveling,
      label: 'Traveling',
      active: false,
    },
    {
      icon: education,
      label: 'Education',
      active: false,
    },
    {
      icon: firstAid,
      label: 'First Aid',
      active: false,
    },
    {
      icon: englishLanguage,
      label: 'Improving your English Skills',
      active: false,
    },
    {
      icon: rule,
      label: 'Au Pair Rules',
      active: false,
    },
    {
      icon: extension,
      label: 'Extending',
      active: false,
    },
    {
      icon: driversLicense,
      label: "Getting your Driver's License",
      active: false,
    },
  ];

  return (
    <div className={styles.list}>
      {
        resources.map((item, index) => <Item key={index} icon={item.icon} label={item.label} link={item.link} active={item.active} />)
      }
    </div>
  );
};

export default Resources;