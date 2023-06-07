import axios from 'axios';
import React, { useEffect, useState } from 'react';

const SideDetail = ({ detailId, setShowDetails }) => {
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    // eski uçağı siler
    setDetail(null);
    // apiden ilgili uçuş verisini çekmek için gerekli ayarlar
    const options = {
      method: 'GET',
      url: 'https://flight-radar1.p.rapidapi.com/flights/detail',
      params: { flight: detailId },
      headers: {
        'X-RapidAPI-Key':
          '75dc092df0msh3c03138e5cc1ea2p19035ejsn916bcc592247',
        'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com',
      },
    };
    // veri çekme isteği
    axios
      .request(options)
      .then((res) => setDetail(res.data));
  }, [detailId]);

  return (
    <div className="detail">
      <div className="detail-inner">
        <p
          className="close-icon"
          onClick={() => setShowDetails(false)}
        >
          <span>X</span>
        </p>
        {!detail ? (
          'Loading...'
        ) : (
          <>
            <h2>{detail?.aircraft?.model?.text}</h2>
            <p>
              Model Kodu: {detail?.aircraft?.model?.code}
            </p>
            <p>
              Kuyruk Numarası:{' '}
              {detail?.aircraft?.registration}
            </p>
            <img
              src={detail?.aircraft?.images?.large[0]?.src}
            />

            <p>
              Kalkış:
              <a href={detail?.airport?.origin?.website}>
                {detail?.airport?.origin?.name}
              </a>
            </p>
            <p>
              Hedef:
              <a
                href={detail?.airport?.destination?.website}
              >
                {detail?.airport?.destination?.name}
              </a>
            </p>

            <p>Durum: {detail?.status?.text}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default SideDetail;
