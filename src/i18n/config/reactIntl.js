import { addLocaleData } from "react-intl";
import csData from "react-intl/locale-data/cs";
import enData from "react-intl/locale-data/en";
import viData from "react-intl/locale-data/vi";

addLocaleData([...csData, ...enData, ...viData]);
