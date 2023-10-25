import { useState } from 'react';
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListSubheader,
} from '@mui/material';

import styled from '@emotion/styled';
import { SIZES } from 'pages/theme';
import { useRouter } from 'next/navigation';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import GuildMembers from 'components/GuildMembers';
import GuildProfile from 'components/GuildProfile';
import Purpose from 'components/Purpose';
import UserProfile from 'components/UserProfile';
import Vaults from 'components/Vaults';
import Vote from 'components/Vote';

const MANAGEMENT_CONTENT = {
  USER_PROFILE: 'user-profile',
  GUILD_PROFILE: 'guild-profile',
  GUILD_MEMBERS: 'guild-members',
  PURPOSE: 'purpose',
  VAULTS: 'vaults',
  VOTE: 'vote',
} as const;

type ManagementContent =
  (typeof MANAGEMENT_CONTENT)[keyof typeof MANAGEMENT_CONTENT];

const SidebarSubHeader = styled(ListSubheader)`
  font-size: 1.2rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;
  marginleft: ${SIZES.lineHeight}rem;
`;

const StyledListItemButton = styled(ListItemButton)`
  padding-left: ${SIZES.lineHeight * 2}rem;
`;

type SidebarProps = {
  setSelectedMenuOption: (option: ManagementContent) => void;
  selectedMenuOption: ManagementContent;
};

const Sidebar = ({
  setSelectedMenuOption,
  selectedMenuOption,
}: SidebarProps) => {
  return (
    <Box>
      <List>
        <SidebarSubHeader>
          Profile <ChevronRightIcon />
        </SidebarSubHeader>
        <StyledListItemButton
          selected={selectedMenuOption === MANAGEMENT_CONTENT.USER_PROFILE}
          onClick={() => setSelectedMenuOption(MANAGEMENT_CONTENT.USER_PROFILE)}
        >
          My profile
        </StyledListItemButton>

        <SidebarSubHeader>
          Guild <ChevronRightIcon />
        </SidebarSubHeader>
        <StyledListItemButton
          selected={selectedMenuOption === MANAGEMENT_CONTENT.GUILD_PROFILE}
          onClick={() =>
            setSelectedMenuOption(MANAGEMENT_CONTENT.GUILD_PROFILE)
          }
        >
          Guild profile
        </StyledListItemButton>
        <StyledListItemButton
          selected={selectedMenuOption === MANAGEMENT_CONTENT.GUILD_MEMBERS}
          onClick={() =>
            setSelectedMenuOption(MANAGEMENT_CONTENT.GUILD_MEMBERS)
          }
        >
          Members
        </StyledListItemButton>
        <StyledListItemButton
          selected={selectedMenuOption === MANAGEMENT_CONTENT.VAULTS}
          onClick={() => setSelectedMenuOption(MANAGEMENT_CONTENT.VAULTS)}
        >
          Vaults
        </StyledListItemButton>
        <SidebarSubHeader>
          Governance <ChevronRightIcon />
        </SidebarSubHeader>
        <StyledListItemButton
          selected={selectedMenuOption === MANAGEMENT_CONTENT.VOTE}
          onClick={() => setSelectedMenuOption(MANAGEMENT_CONTENT.VOTE)}
        >
          Vote
        </StyledListItemButton>
        <StyledListItemButton
          selected={selectedMenuOption === MANAGEMENT_CONTENT.PURPOSE}
          onClick={() => setSelectedMenuOption(MANAGEMENT_CONTENT.PURPOSE)}
        >
          Purpose
        </StyledListItemButton>
      </List>
    </Box>
  );
};

const Content = styled('div')`
  padding: 2rem;
  flex: 1;
`;

const Management = () => {
  const [selectedMenuOption, setSelectedMenuOption] =
    useState<ManagementContent>(MANAGEMENT_CONTENT.USER_PROFILE);

  const renderContent = () => {
    switch (selectedMenuOption) {
      case MANAGEMENT_CONTENT.USER_PROFILE:
        return <UserProfile />;
      case MANAGEMENT_CONTENT.GUILD_PROFILE:
        return <GuildProfile />;
      case MANAGEMENT_CONTENT.GUILD_MEMBERS:
        return <GuildMembers />;
      case MANAGEMENT_CONTENT.PURPOSE:
        return <Purpose />;
      case MANAGEMENT_CONTENT.VAULTS:
        return <Vaults />;
      case MANAGEMENT_CONTENT.VOTE:
        return <Vote />;
      default:
        return <div>This could not be a possible option</div>;
    }
  };

  return (
    <Box
      style={{
        textAlign: 'left',
        display: 'flex',
        width: '100vw',
        height: '100vh',
      }}
    >
      <Sidebar
        setSelectedMenuOption={setSelectedMenuOption}
        selectedMenuOption={selectedMenuOption}
      />
      <Content>{renderContent()}</Content>
    </Box>
  );
};

export default Management;
