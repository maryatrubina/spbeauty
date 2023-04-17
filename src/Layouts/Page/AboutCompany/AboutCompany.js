import Heading from "./Components/Heading";
import General from "./Components/General/General";
import Addresses from "./Components/Addresses/Addresses";
function AboutCompany() {
    return (
        <div>
            <Heading/> {/* Заголовок и кнопка справа */}
            <div class='row'>
              <div class='col-6'><General/></div>  {/* Основная информация вроде названия, типа и телефона */}
              <div class='col-6'><Addresses/></div> {/* Список доступных адресов заведений */}
            </div>
        </div>
    );
}

export default AboutCompany;