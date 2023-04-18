import Avatar from "./Avatar";
function Profile() {
    return (
        <div className='d-inline-flex flex-row'>
            <Avatar/>
            <div className='ms-4 gap-2 d-inline-flex flex-column justify-content-center'>
                <div className='mb-2 title'>SPBEAUTY</div>
                <div className='gap-1'>
                <div className="mb-1 text-rg text_gray">Салон красоты</div>
                <div className="mb-1 text-rg text_gray">Санкт-Петербург, Невский пр-т. 28</div>
                </div>
            </div>                  
        </div>
    );
}

export default Profile;