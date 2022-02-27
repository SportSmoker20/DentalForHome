import React from "react";
import Faq from "react-faq-component";

function HomeFAQ() {
  const data = {
    rows: [
      {
        title: "How do I contact Dental for Home for any queries?",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
                  ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
                  In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
                  Fusce sed commodo purus, at tempus turpis.`,
      },
      {
        title: "How do I contact Dental for Home for any queries?",
        content:
          "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
      },
      {
        title: "How do I contact Dental for Home for any queries?",
        content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
                Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
                Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
                Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
      },

      {
        title: "How do I contact Dental for Home for any queries?",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
                  ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
                  In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
                  Fusce sed commodo purus, at tempus turpis.`,
      },
      {
        title: "How do I contact Dental for Home for any queries?",
        content:
          "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
      },
      {
        title: "How do I contact Dental for Home for any queries?",
        content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
                Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
                Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
                Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
      },
      {
        title: "How do I contact Dental for Home for any queries?",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
          ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
          In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
          Fusce sed commodo purus, at tempus turpis.`,
    },
    {
        title: "How do I contact Dental for Home for any queries?",
        content:
            "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
    },
    {
        title: "How do I contact Dental for Home for any queries?",
        content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
        Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
        Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
        Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
    },
   
    ],
  };
  const styles = {
    // bgColor: 'white',
    titleTextColor: "rgb(118, 224, 224)",
    rowTitleColor: "rgb(81, 82, 82)",
    rowContentColor: "rgb(81, 82, 82)",
    arrowColor: "rgb(4,64,102)",
  };
  const config = {
    animate: true,
    // arrowIcon: "V",
    arrowColor: "rgb(4,64,102)",
    tabFocus: true,
  };

  return (
    <div id="home-faq" className="faq-container">
      <div className="faq-title">
        <p>FAQ</p>
      </div>
      <div className="faq-content">
        <Faq data={data} styles={styles} config={config} />
      </div>
    </div>
  );
}

export default HomeFAQ;
