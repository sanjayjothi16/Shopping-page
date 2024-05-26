import React,{useState} from 'react'


let data=[{
    title : "JBL",
    img : "public/JBL.jpg",
    Oprice : "$40.00",
    Pirce: "$30.00",
    },
    {
    title : "Sony",
    img : "https://cdn.mos.cms.futurecdn.net/DUqFmZkj5CJA69ikY8sxti.jpg",
    Oprice : "$290.00",
    Pirce: "$250.00",
    },
    {
    title : "Apple",
    img : "https://emrge.ca/cdn/shop/files/EMRGE-MaxHeadphonesSilver.jpg?v=1683908354",
    Oprice : "$500.00",
    Pirce: "$450.00",
    },
    {
    title : "Marshall",
    img : "https://www.bhphotovideo.com/images/images2500x2500/marshall_audio_04091743_monitor_bluetooth_headphones_black_1330058.jpg",
    Oprice : "$300.00",
    Pirce: "$299.00",
    },
]

function Cards({ setCart }) {
    const [toggles, setToggles] = useState(Array(data.length).fill(false));
  
    // Function to handle toggling the cart status
    const handleToggle = (i) => {
      const newToggles = [...toggles];
      newToggles[i] = !newToggles[i];
      setToggles(newToggles);
      setCart((count) => (newToggles[i] ? count + 1 : count - 1));
    };
  return <>
    <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {data.map((e,i)=>(
                <div className="col mb-5" key={i}>
                        <div className="card h-100">
                            {/* <!-- Sale badge--> */}
                            <div className="badge bg-dark text-white position-absolute" style={{top:"0.5rem", right: "0.5rem"}}>Sale</div>
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src={e.img}alt={e.title} />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">{e.title}</h5>
                                    {/* <!-- Product reviews--> */}
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
                                    {/* <!-- Product price--> */}
                                    <span className="text-muted text-decoration-line-through">{e.Oprice}</span>
                                    {e.Pirce}
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><button
                  className="btn btn-outline-dark mt-auto"
                  onClick={() => handleToggle(i)}
                >
                  {toggles[i] ? 'Remove from Cart' : 'Add to Cart'}
                </button></div>
                            </div>
                        </div>
                    </div>
                ))
            }
                </div>
            </div>
        </section>
  </>
}

export default Cards
