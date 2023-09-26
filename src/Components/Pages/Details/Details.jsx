import swal from 'sweetalert';

const Details = ({ idDetail }) => {
    const { id, title, description, image, amount, text_color } = idDetail || {}



    const handleDonate = () => {
        const donatedMoneyArray = [];
        const donatedMoney = JSON.parse(localStorage.getItem('donated'));
        if (!donatedMoney) {
            donatedMoneyArray.push(idDetail);
            localStorage.setItem('donated', JSON.stringify(donatedMoneyArray));
            swal({
                title: "Thank You!",
                text: "You have donated successfully",
                icon: "success",
            });
        }
        else {
            const isExist = donatedMoney.find(item => item.id == id)
            if (!isExist) {
                donatedMoneyArray.push(...donatedMoney, idDetail);
                localStorage.setItem('donated', JSON.stringify(donatedMoneyArray));
                swal({
                    title: "Thank You!",
                    text: "You have donated successfully",
                    icon: "success",
                });
            }
            else{
                swal({
                    title: "Please donate in other options",
                    text: "You already donated in this option",
                    icon: "error",
                });
            }


        }
    }
    return (
        <div>
            <div className="min-w-fulls">
                <img className="min-w-full rounded-md" src={image} alt="" />
                <div className=" bg-black bg-opacity-40 p-1 md:p-6 rounded-b-lg absolute -mt-9 md:-mt-[92px]">
                    <button onClick={handleDonate} className="text-white font-bold text-sm p-1 md:p-3 rounded-md" style={{ backgroundColor: text_color }}>Donate ${amount}</button>
                </div>
                <div className="pt-6 space-y-4 pb-10">
                    <p className="text-3xl font-medium">{title}</p>
                    <p className="text-sm">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Details;