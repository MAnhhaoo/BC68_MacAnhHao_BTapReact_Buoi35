import React from 'react';

const Shose = (props) => {
  // Hàm để kiểm tra nếu ghế đã được chọn
  const isSelected = (soGhe) => {
    return props.selectedSeats.some(s => s.soGhe === soGhe);
  };

  return (
    <div className="mx-auto p-4">
      {props.arrChongoi.map((item, index) => (
        <div className='flex flex-row items-center py-2 gap-9' key={index}>
          <h2 className="font-bold text-xl mt-1 rowNumber bookingMovie">{item.hang}</h2>
          <div className="grid grid-cols-12 gap-2">
            {item.danhSachGhe.map((ghe, idx) => (
              <button
                disabled={ghe.daDat}
                onClick={() => props.handleChoNgoi(ghe)}
                className={`text-center ghe mx-2 bookingMovie ${ghe.daDat ? 'gheDuocChon ' : ''} ${isSelected(ghe.soGhe) ? 'gheDangChon' : ''}`}
              >
                {ghe.soGhe}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shose;
