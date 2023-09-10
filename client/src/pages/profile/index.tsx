import { Header, LoadingSpinner, Tabs } from "components";
import { useUserContext } from "contexts";
import { useMemo, useState } from "react";
import { HostFamilyInfo } from "./HostFamilyInfo";
import { Grid } from "./styled";
import { UserInfo } from "./UserInfo";

const PROFILE_TABS = {
  PROFILE: 0,
  PASSWORD: 1,
  HOST_FAMILY: 2,
  CLUSTER: 3,
}

const Profile = (): JSX.Element => {
  const [{ user }] = useUserContext();

  const [ activeTab, setActiveTab ] = useState<number | string>(PROFILE_TABS.PROFILE);

  const renderContent = useMemo(() => {
    if (!user) return null;

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
    { label: "Profile", value: PROFILE_TABS.PROFILE },
    { disabled: true, label: "Password", value: PROFILE_TABS.PASSWORD },
    { disabled: true, label: "Host Family", value: PROFILE_TABS.HOST_FAMILY },
    { disabled: true, label: "Cluster", value: PROFILE_TABS.CLUSTER },
  ];

  return (
    <>
      <Header pageTitle="Profile" />
      <Grid>
        <Tabs activeTab={activeTab} fullWidth handleClick={setActiveTab} tabs={tabs} variant="secondary" />
        {renderContent}
      </Grid>
    </>
  );
};

export default Profile;