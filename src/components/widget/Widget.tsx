import React from 'react';
import WidgetContainer from './WidgetContainer';
import WidgetFooter from './WidgetFooter';
import WidgetHeader from './WidgetHeader';

const Widget = () => {
  return (
    <WidgetContainer>
      <WidgetHeader />
      <WidgetFooter />
    </WidgetContainer>
  );
};

export default Widget;
