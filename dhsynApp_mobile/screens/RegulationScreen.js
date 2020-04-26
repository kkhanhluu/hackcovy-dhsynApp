import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import Accordion from 'react-native-collapsible/Accordion';

const RegulationScreen = (props) => {
  const SECTIONS = [
    {
      title: '1. Đối với các đối tượng thực hiện cách ly',
      content: [
        'Tôn trọng pháp luật, thực hiện những quy định của khu vực cách ly.',
        'Không mang vũ khí, chất cháy nổ vào khu vực cách ly; Không tự ý mang tái sản của khu vực cách ly ra ngoài; Tự giữ tư trang tiền bạc và vật dụng cá nhân.',
        'Thực hiện nếp sống văn minh; đi nhẹ, nói khẽ; giữ vệ sinh chung. Tôn trọng với nhân viên y tế; không xúc phạm danh dự nhân phẩm tính mạng của nhân viên y tế.',
        'Không hút thuốc lá, chơi cờ bạc, uống rượu bia và chất gây nghiện.',
        'Không được tự ý đi ra khỏi khu vực cách ly khi chưa hết thời gian cách ly.',
        'Sử dụng khẩu trang đúng cách khi tiếp xúc với người khác. Không khạc nhổ bừa bãi; Che miệng khi ho, hắt hơi, tốt nhất bằng khăn để giảm phát tán dịch tiết đường hô hấp ra ngoài.',
      ],
    },
    {
      title: '2. Đối với cán bộ nhân viên phục vụ',
      content: [
        'Chấp hành đúng nội quy, quy định khu vực cách ly.',
        'Đeo khẩu trang khi tiếp xúc với mọi người.',
        'Hòa nhã vui vẻ, không phân biệt đối xử với người thực hiện cách ly.',
        'Thực hiện nghiêm túc, đúng quy trình chức trách nhiệm vụ được giao. Chấp hành nghiêm chỉnh sự phân công của Lãnh đạo. Không tự ý rời vị trí làm việc khi không được sự đồng ý của cấp có thẩm quyền.',
        'Thường trực 24/24h tại cơ sở cách ly.',
      ],
    },
    {
      title: '3. Đối với người ra vào khu vực cách ly',
      content: [
        'Chỉ những người có nhiệm vụ mới được ra vào khu vực cách ly.',
        'Mọi đối tượng ra vào khu vực cách ly đều phải ghi tên vào danh sách, phải thực hiện khử khuẩn tay và mang phòng hộ cá nhân (khẩu trang y tế, găng tay, mũ áo…)',
        'Mọi đối tượng ra khỏi khu vực cách ly phải cởi bỏ phòng hộ cá nhân đúng quy định, khử khuẩn tay và được theo dõi sức khỏe trong vòng 14 ngày.',
        'Sau mỗi lần tiếp xúc người được cách ly phải rửa tay xà phòng hoặc dung dịch sát khuẩn, sử dụng các thuốc sát khuẩn mũi họng.',
        'Hạn chế tối đa việc tiếp xúc với người thực hiện cách ly.',
      ],
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
      <View style={{ padding: 20 }}>
        {section.content.map((item, i) => (
          <Text style={{ marginBottom: 15 }}>{`${i + 1}. ${item}`}</Text>
        ))}
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

export default RegulationScreen;
