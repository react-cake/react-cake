import * as React from 'react';
import Tabs from '@mui/material/Tabs';

function testOnChange() {
  function handleTabsChange(event: React.SyntheticEvent, tabsValue: unknown) {}
  <Tabs onChange={handleTabsChange} />;

  function handleElementChange(event: React.ChangeEvent) {}
  <Tabs
    // @ts-expect-error internally it's either FocusEvent or ClickEvent
    onChange={handleElementChange}
  />;
}

function TabTest() {
  return <Tabs TabIndicatorProps={{ style: { backgroundColor: 'green' } }} />;
}

function TabIndicatorSxTest() {
  return <Tabs TabIndicatorProps={{ sx: {} }} />;
}
