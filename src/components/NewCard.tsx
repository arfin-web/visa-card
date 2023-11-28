const NewCard = ({ cardNumber, cardHolderName, expiryDate }: any) => {
    return (
        <div className="container mx-auto">
            <div className="flex min-h-screen flex-col justify-center items-center">
                <h1 className="text-4xl font-bold text-center mb-10">Your Visa Card is Ready!</h1>
                <div className="card w-[354px] bg-base-100 shadow-xl image-full hover:skew-y-12 transition-all">
                    <figure><img src="https://img.freepik.com/free-vector/abstract-realistic-technology-particle-background_23-2148429738.jpg?w=996&t=st=1701177433~exp=1701178033~hmac=3017f9a26ac908e8b2e89ab00e37dc744a5be37196254e0040885873e9beb7d3" alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="flex justify-between items-center">
                            <img src="imgOne.svg" alt="img one" />
                            <img src="visaLogo.svg" alt="visa logo" />
                        </div>
                        <h2 className="text-xl font-bold mt-5">{cardNumber}</h2>
                        <div className="flex justify-between items-center mt-5">
                            <div>
                                <p className="text-sm">Card Holder Name</p>
                                <h2 className="text-xl font-bold">{cardHolderName}</h2>
                            </div>
                            <div>
                                <p className="text-sm">Expiry Date</p>
                                <h2 className="text-xl font-bold">{expiryDate}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewCard