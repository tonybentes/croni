'use client';

import type { Theme, SxProps, Breakpoint } from '@mui/material/styles';

import Alert from '@mui/material/Alert';

import { useBoolean } from 'src/hooks/use-boolean';
import { useResponsive } from 'src/hooks/use-responsive';

import { Section } from './section';
import { Main, Content } from './main';
import { HeaderBase } from '../core/header-base';
import { LayoutSection } from '../core/layout-section';

// ----------------------------------------------------------------------

export type AuthSplitLayoutProps = {
  sx?: SxProps<Theme>;
  children: React.ReactNode;
  section?: {
    title?: string;
    imgUrl?: string;
    subtitle?: string;
  };
};

export function AuthSplitLayout({ sx, section, children }: AuthSplitLayoutProps) {
  const mobileNavOpen = useBoolean();
  const sizeScreenMD = useResponsive('between', 'xs', 'md');

  const layoutQuery: Breakpoint = 'md';
  return (
    <LayoutSection
      headerSection={
        /** **************************************
         * Header
         *************************************** */
        <HeaderBase
          disableElevation
          layoutQuery={layoutQuery}
          onOpenNav={mobileNavOpen.onTrue}
          slotsDisplay={{
            signIn: false,
            account: false,
            purchase: false,
            searchbar: false,
            menuButton: false,
            notifications: false,
          }}
          slots={{
            topArea: (
              <Alert severity="info" sx={{ display: 'none', borderRadius: 0 }}>
                This is an info Alert.
              </Alert>
            ),
          }}
          slotProps={{ container: { maxWidth: false } }}
          sx={{ position: { [layoutQuery]: 'fixed' } }}
        />
      }
      /** **************************************
       * Footer
       *************************************** */
      footerSection={null}
      /** **************************************
       * Style
       *************************************** */
      sx={sx}
      cssVars={{
        '--layout-auth-content-width': '360px',
      }}
    >
      <Main layoutQuery={layoutQuery}>
        <Section
          title={section?.title}
          layoutQuery={layoutQuery}
          imgUrl={section?.imgUrl}
          subtitle={section?.subtitle}
        />
        <Content
          layoutQuery={layoutQuery}
          sx={sizeScreenMD ? styledContent.containerMb : styledContent.container}
        >
          {children}
        </Content>
      </Main>
    </LayoutSection>
  );
}

export const styledContent = {
  container: {
    // borderTopLeftRadius: '20px',
    // borderBottomLeftRadius: '20px',
    zIndex: 7,
    position: 'relative',
    // boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px;',
  },
  containerMb: {
    // borderTopLeftRadius: '20px',
    // borderTopRightRadius: '20px',
    zIndex: 7,
    position: 'relative',
    // boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px;',
  },
};
