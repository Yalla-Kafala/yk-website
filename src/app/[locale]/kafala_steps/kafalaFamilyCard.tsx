import React from "react";
import SectionTitle from "./sectionTitle";
import SectionList from "./sectionList";
import { useLocale } from "next-intl";

const KafalaFamilyCard = () => {
  const locale = useLocale();
  const englishFamilyCardSteps = [
    "Kafala parent/s make an insurance number for the child from the nearest insurance office that gets this number using the national ID number present in the electronic birth certificate of the child.",
    "Kafala parent/s open a bank account in 'Nasser's Social bank' under the name of the child.",
    "Kafala parent/s deposit 200 EGP in account number 21812 under 'Nasser's Social bank'; Cairo branch under the name of the Kafala parent/s. Another way to deposit the amount is through Fawry using the same bank information.",
    "Kafala parent/s then go to the social administration in their district in order to receive copies of their personal national ID numbers; a receipt to open an account; a recent 6x4 picture of the child and both parents.",
    "The company in contract with the ministry issues the card after sending all the documents to the ministry and hands it over the courier company.",
    "The courier company then delivers the card to the provided address.",
  ];
  const englishFamilyCardStepsTitle =
    "Steps to Issue Family Card for Kafala Families";
  const arabicFamilyCardSteps = [
    "اﻟﺬﻫﺎب اﻟﻰ اﻻدارة اﻻﺟﺘﻤﺎﻋﻴﺔ ﻓﻲ ﻣﺤﻴﻂ ﺳﻜﻦ اﻻﺳﺮة اﻟﺒﺪﻳﻠﺔ اﻟﻜﺎﻓﻠﺔ، ﺣﻴﺚ ﻳﺘﻢ ﺗﺴﻠﻴﻢ ﺻﻮر اﻷرﻗﺎم اﻟﻘﻮﻣﻴﺔ ﻟﻠﻮاﻟﺪﻳﻦ اﻟﻜﺎﻓﻠﻴﻦ، وإﻳﺼﺎل ﻓﺘﺢ اﻟﺤﺴﺎب، وإﻳﺼﺎل دﻓﻊ ٢٠٠ ﺟﻨﻴﻪ وﺻﻮر ﺣﺪﻳﺜﺔ ٤*٦ ﻟﻠﻄﻔﻞ اﻟﻤﻜﻔﻮل وﻟﻠﻮاﻟﺪﻳﻦ اﻟﻜﺎﻓﻠﻴﻦ ٥",
    "ﺗﺴﺪد اﻷﺳﺮة اﻟﺒﺪﻳﻠﺔ اﻟﻜﺎﻓﻠﺔ ﻣﺒﻠﻎ ٢٠٠ ﺟﻨﻴﻪ ﻋﻠﻰ رﻗﻢ اﻟﺤﺴﺎب ( ٢١٨١٢ ) اﻟﺘﺎﺑﻊ ﻟﺒﻨﻚ ﻧﺎﺻﺮ اﻹﺟﺘﻤﺎﻋﻲ ﻓﺮع اﻟﻘﺎﻫﺮة ﺑﺎﺳﻢ اﻷﺳﺮ اﻟﺒﺪﻳﻠﺔ أو ﻣﻦ ﺧﻼل اﻟﺪﻓﻊ اﻟﻔﻮري ﻟﺬات اﻟﺤﺴﺎب",
    " ﺗﺴﺘﺨﺮج اﻷﺳﺮة اﻟﺒﺪﻳﻠﺔ اﻟﻜﺎﻓﻠﺔ اﻟﺮﻗﻢ اﻟﺘﺄﻣﻴﻨﻲ ﻟﻠﻄﻔﻞ ﻣﻦ أﻗﺮب ﻣﻜﺘﺐ ﺗﺄﻣﻴﻨﺎت اﻟﺬي ﻳﻘﻮم ﺑﺪوره ﺑﺎﺳﺘﺨﺮاﺟﻪ ﺑﺎﺳﺘﺨﺪام اﻟﺮﻗﻢ اﻟﻘﻮﻣﻲ اﻟﻮارد ﺑﺸﻬﺎدة اﻟﻤﻴﻼد اﻟﻤﻤﻴﻜﻨﺔ ﻟﻠﻄﻔﻞ",
    "تقوم اﻟﺸﺮﻛﺔ اﻟﻤﺘﻌﺎﻗﺪة ﻣﻊ اﻟﻮزارة ﺑﺎﺳﺘﺨﺮاج اﻟﺒﻄﺎﻗﺔ ﺑﻌﺪ ارﺳﺎل اﻟﺒﻴﺎﻧﺎت واﻟﻤﺴﺘﻨﺪات ﻟﻬﺎ ﺑﻤﻌﺮﻓﺔ اﻟﻮزارة وﺗﺴﻠﻴﻤﻬﺎ اﻟﻰ ﺷﺮﻛﺔ ﺷﺤﻦ ﻟﺘﻮﺻﻴﻠﻬﺎ ﻟﻤﺤﻞ ﺳﻜﻦ اﻷﺳﺮة اﻟﺒﺪﻳﻠﺔ اﻟﻜﺎﻓﻠﺔ",
    "ﺗﻘﻮم اﻷﺳﺮة اﻟﺒﺪﻳﻠﺔ اﻟﻜﺎﻓﻠﺔ ﺑﻔﺘﺢ ﺣﺴﺎب ﺑﻨﲄ ﻟﺪى ﺑﻨﻚ ﻧﺎﺻﺮ اﻻﺟﺘﻤﺎﻋﻲ ﺑﺈﺳﻢ اﻟﻄﻔﻞ اﻟﻤﻜﻔﻮل",
    "ﺗﻘﻮم اﻟﺸﺮﻛﺔ اﻟﻤﺘﻌﺎﻗﺪ ﻣﻌﻬﺎ ﺑﺘﻮﺻﻴﻞ اﻟﺒﻄﺎﻗﺔ ﻣﺒﺎﺷﺮة ﻟﻸﺳﺮة اﻟﺒﺪﻳﻠﺔ اﻟﻜﺎﻓﻠﺔ ﺑﻤﺤﻞ ﺳﻜﻨﻬﺎ",
  ];

  const arabicFamilyCardStepsTitle =
    "ﺧﻄﻮات إﺳﺘﺨﺮاج اﻟﻜﺎرت ﻟﻸﺳﺮ اﻟﺒﺪﻳﻠﺔ اﻟﻜﺎﻓﻠﺔ";

  return (
    <>
      <SectionTitle
        title={
          locale === "en"
            ? englishFamilyCardStepsTitle
            : arabicFamilyCardStepsTitle
        }
      />
      <SectionList
        content={
          locale === "en" ? englishFamilyCardSteps : arabicFamilyCardSteps
        }
      />
    </>
  );
};

export default KafalaFamilyCard;
