import PrimaryButton from "../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../Components/SecondaryButton";
function Heading() {
    return (
        <div className='d-flex flex-row justify-content-between mt-5 ms-5'>
            <h1 className='large-title '>Данные о компании</h1>
           <div className='px-3 py-2'><SecondaryButton>Закрыть запись</SecondaryButton></div>
        </div>
    );
}

export default Heading;