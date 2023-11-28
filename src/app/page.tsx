'use client'
import NewCard from '@/components/NewCard';
import { useState } from 'react';

export default function Home() {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvcCode, setCvcCode] = useState('');
  const [showCardDetails, setShowCardDetails] = useState(false);
  const [showBackSide, setShowBackSide] = useState(false);

  const handleCardNumberChange = (e: any) => {
    setCardNumber(e.target.value);
  };

  const handleCardHolderNameChange = (e: any) => {
    setCardHolderName(e.target.value);
  };

  const handleExpiryDateChange = (e: any) => {
    setExpiryDate(e.target.value);
  };

  const handleCvcCode = (e: any) => {
    setCvcCode(e.target.value)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setShowCardDetails(true);
  };

  const handleShowBackSide = () => {
    setShowBackSide(!showBackSide);
  };

  return (
    <>
      <div className="container mx-auto">
        {showCardDetails ? <NewCard cardNumber={cardNumber} cardHolderName={cardHolderName} expiryDate={expiryDate} cvcCode={cvcCode} />
          : <form onSubmit={handleSubmit}>
            {
              showBackSide ? <>
                <div className="min-h-screen flex flex-col justify-center items-center">
                  <h1 className="text-4xl font-bold text-center mb-10">Generate Your Visa Card</h1>
                  <div className="card w-[354px] bg-base-100 shadow-xl image-full">
                    <figure><img src="https://img.freepik.com/free-vector/abstract-realistic-technology-particle-background_23-2148429738.jpg?w=996&t=st=1701177433~exp=1701178033~hmac=3017f9a26ac908e8b2e89ab00e37dc744a5be37196254e0040885873e9beb7d3" alt="Shoes" /></figure>
                    <div className="card-body">
                      <div className="flex justify-between items-center">
                        <img src="imgOne.svg" alt="img one" />
                        <img src="visaLogo.svg" alt="visa logo" />
                      </div>
                      <input type="number" placeholder="CVC" className="input input-ghost input-sm w-full mt-12" value={cvcCode} onChange={handleCvcCode} required />
                    </div>
                  </div>
                  <input type="submit" className="btn btn-outline btn-primary rounded-full mt-5" value="Create My Visa Card!" />
                </div>
              </>
                :
                <div className="min-h-screen flex flex-col justify-center items-center">
                  <h1 className="text-4xl font-bold text-center mb-10">Generate Your Visa Card</h1>
                  <div className="card w-[354px] bg-base-100 shadow-xl image-full">
                    <figure><img src="https://img.freepik.com/free-vector/abstract-realistic-technology-particle-background_23-2148429738.jpg?w=996&t=st=1701177433~exp=1701178033~hmac=3017f9a26ac908e8b2e89ab00e37dc744a5be37196254e0040885873e9beb7d3" alt="Shoes" /></figure>
                    <div className="card-body">
                      <div className="flex justify-between items-center">
                        <img src="imgOne.svg" alt="img one" />
                        <img src="visaLogo.svg" alt="visa logo" />
                      </div>
                      <input type="number" placeholder="Card Number" className="input input-ghost input-sm w-full mt-5" value={cardNumber} onChange={handleCardNumberChange} required />
                      <div className="flex justify-between items-center mt-5">
                        <div>
                          <p>Card Holder Name</p>
                          <input type="text" placeholder="Your Name" className="input input-ghost input-sm w-32" value={cardHolderName} onChange={handleCardHolderNameChange} required />
                        </div>
                        <div>
                          <p>Expiry Date</p>
                          <input type="date" placeholder="Date" className="input input-ghost input-sm w-24" value={expiryDate} onChange={handleExpiryDateChange} required />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="btn btn-outline btn-primary rounded-full mt-5" onClick={handleShowBackSide}>Flip Back</button>
                </div>
            }
          </form>
        }
      </div>
    </>
  )
}