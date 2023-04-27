import { LoadingSpinner, Tabs, Text } from "components";
import { useContext, useMemo, useState } from "react";

import { HostFamilyInfo } from "./HostFamilyInfo";
import { UserContext } from "contexts";
import { UserInfo } from "./UserInfo";
import styles from "./profile.module.css";

const PROFILE_TABS = {
  PROFILE: 0,
  PASSWORD: 1,
  HOST_FAMILY: 2,
  CLUSTER: 3,
}

export const Profile = (): JSX.Element => {
  /* @ts-ignore-next-line */
  const { user } = useContext( UserContext );

  const [activeTab, setActiveTab] = useState(PROFILE_TABS.PROFILE);

  const renderContent = useMemo(() => {
    switch (activeTab) {
      case PROFILE_TABS.HOST_FAMILY:
        return <HostFamilyInfo />;
      case PROFILE_TABS.CLUSTER:
        return null;
      case PROFILE_TABS.PASSWORD:
        return null;
      default:
        return <UserInfo user={user} />;
    }
  }, [activeTab, user]);

  if (!user) {
    return <LoadingSpinner />;
  }

  const tabs = [
    { label: 'Profile', value: PROFILE_TABS.PROFILE },
    { disabled: true, label: 'Password', value: PROFILE_TABS.PASSWORD },
    { disabled: true, label: 'Host Family', value: PROFILE_TABS.HOST_FAMILY },
    { disabled: true, label: 'Cluster', value: PROFILE_TABS.CLUSTER },
  ];

  return (
    <main className={ styles.main }>
      <Text as="h2" size="xl" weight="bold">Your Profile</Text>
      <Tabs activeTab={activeTab} fullWidth handleClick={setActiveTab} tabs={tabs} />
      {renderContent}
    </main>
  );
};
