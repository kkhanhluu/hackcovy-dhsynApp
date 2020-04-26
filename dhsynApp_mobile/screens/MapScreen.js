import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { ListItem } from 'react-native-elements';
import Accordion from 'react-native-collapsible/Accordion';

const MapScreen = (props) => {
  const SECTIONS = [
    {
      title: '1. Khu cách ly A',
      content:
        'https://i.pinimg.com/originals/06/3a/fd/063afd0fde5b8f268038fe5e69e9d362.jpg',
    },
    {
      title: '2. Khu cách ly B',
      content:
        'https://www.brilliantstudent.in/wp-content/uploads/2019/11/free-complete-house-plans-pdf-download-lovely-simple-two-bedroom-house-plans-pdf-house-plan-ezzy-collection-in-2019-of-free-complete-house-plans-pdf-download.jpg',
    },
    {
      title: '3. Khu cách ly C',
      content:
        'https://media.istockphoto.com/vectors/architecture-plan-with-furniture-house-floor-plan-vector-id903309398?k=6&m=903309398&s=612x612&w=0&h=u_3LB256Uhg7K0xrIEew4S9zVXZ7EZ1LGgdYjpcnne8=',
    },
  ];

  const [activeSections, setActiveSections] = useState([]);

  const renderSectionTitle = (section) => {
    return <View></View>;
  };

  const renderHeader = (section) => {
    return (
      <View>
        <ListItem
          title={section.title}
          titleStyle={{
            fontWeight: '200',
            marginBottom: 20,
          }}
          bottomDivider
          chevron
        />
      </View>
    );
  };

  const renderContent = (section) => {
    return (
      <View
        style={{
          padding: 20,
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: '#fff',
        }}
      >
        <Image
          source={{ uri: section.content }}
          style={{ width: 300, height: 300 }}
        />
      </View>
    );
  };

  const updateSections = (activeSections) => {
    setActiveSections(activeSections);
  };

  return (
    <Accordion
      sections={SECTIONS}
      activeSections={activeSections}
      renderSectionTitle={renderSectionTitle}
      renderHeader={renderHeader}
      renderContent={renderContent}
      onChange={updateSections}
    />
  );
};

export default MapScreen;
