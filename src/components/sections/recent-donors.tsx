"use client";

const donorsList = [
  { name: 'Amrita Patnaik', date: '18-01-2026 07:01:19' },
  { name: 'Pawan Joshi', date: '18-01-2026 07:00:07' },
  { name: 'Nilesh Gohel', date: '18-01-2026 07:00:05' },
  { name: 'Rajeshree Singh', date: '18-01-2026 06:59:55' },
  { name: 'DR AMIT KUMAR YADAV', date: '18-01-2026 05:32:52' },
  { name: 'Rachana', date: '18-01-2026 05:32:18' },
  { name: 'Barkha Verma', date: '18-01-2026 05:28:56' },
  { name: 'Ranjith Ramachandran', date: '18-01-2026 05:25:30' },
  { name: 'Dhanush', date: '18-01-2026 03:41:04' },
  { name: 'Pardeep Kumar', date: '18-01-2026 03:41:01' },
  { name: 'Pawan Govindlal Varma', date: '18-01-2026 03:38:32' },
  { name: 'Late Rita Sanan', date: '18-01-2026 03:38:16' },
];

export default function DonorsAndPayment() {
  return (
    <section className="py-20 bg-[#FFF5F5]">
      <div className="container mx-auto px-4 max-w-[1320px]">
        <div className="flex flex-wrap -mx-4 items-start">
          <div className="w-full lg:w-7/12 px-4 mb-8 lg:mb-0">
            <div className="mb-6 flex items-center gap-2">
              <span className="text-[#800000] text-xl">◆</span>
              <h2 className="text-[28px] font-bold text-[#4A2311] font-serif">Recent Donors:-</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {donorsList.map((donor, index) => (
                <div 
                  key={index} 
                  className="bg-white p-4 rounded-2xl flex items-center gap-4 border border-[#DCDCDC] shadow-[0_4px_15px_rgba(0,0,0,0.05)] transition-transform hover:scale-[1.02]"
                >
                  <div className="w-12 h-12 rounded-full bg-[#FFD580] flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#800000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div className="overflow-hidden">
                    <h5 className="text-[15px] font-bold text-[#4A2311] text-ellipsis overflow-hidden whitespace-nowrap leading-tight">
                      {donor.name}
                    </h5>
                    <p className="text-[13px] text-[#666666] mt-1">
                      {donor.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-5/12 px-4 sticky top-24">
            <div className="bg-white p-8 rounded-[2rem] border border-[#DCDCDC] shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              <div className="text-center mb-6">
                <p className="text-[14px] text-[#2D1A12] leading-relaxed mb-4">
                  Tax exempted under section 80G(5)(iii) of Income tax vide registration No <span className="font-bold">ABMCS4770KF20241</span>
                </p>
                <p className="text-[13px] text-[#666666] bg-[#f8f8f8] py-2 rounded-lg">
                  Sankalp video for contribution above Rs 2000
                </p>
              </div>

              <div className="mb-6">
                <button className="w-full bg-[#800000] text-white py-4 rounded-full font-bold text-lg shadow-lg hover:bg-[#600000] transition-colors mb-4">
                  Add Your Sewa
                </button>
                <p className="text-center text-[12px] text-[#666666] mb-4">All Cards & Net banking Accepted</p>
              </div>

              <div className="border-t border-dashed border-[#800000] pt-6 mt-6">
                <h4 className="text-[15px] font-bold text-[#800000] mb-4 text-center">You can pay via QR code / UPI / Bank Transfer</h4>
                
                <div className="grid grid-cols-2 gap-4 h-full">
                  <div className="border border-[#DCDCDC] p-4 rounded-xl flex flex-col items-center">
                    <span className="text-[12px] font-bold text-[#4A2311] mb-2">QR Code / UPI</span>
                    <div className="relative w-full aspect-square bg-[#f9f9f9] rounded-lg border border-[#eee] flex items-center justify-center group cursor-pointer overflow-hidden">
                      <div className="p-2">
                         <div className="w-24 h-24 bg-white p-1 border border-primary/20 flex items-center justify-center">
                            <span className="text-4xl">📱</span>
                         </div>
                      </div>
                      <div className="absolute inset-0 bg-[#800000]/90 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                         <span className="text-[10px] font-bold px-2 text-center">Generate QR</span>
                      </div>
                    </div>
                  </div>

                  <div className="border border-[#DCDCDC] p-4 rounded-xl flex flex-col items-center justify-between">
                    <span className="text-[12px] font-bold text-[#4A2311] mb-2">Bank A/C Number</span>
                    <div className="w-full py-4 px-2 bg-[#f9f9f9] rounded-lg border border-[#eee] flex items-center justify-center">
                       <span className="text-[#800000] font-bold text-sm">AXIS BANK</span>
                    </div>
                    <button className="mt-auto bg-[#FFB340] text-[#4A2311] px-3 py-1.5 rounded-md text-[10px] font-bold hover:bg-[#FFD580] transition-colors">
                      Bank Account
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
