import React from 'react'
const Footer = () => {
  return (
    <div>
      <div className="mt-5">
        <div className="">
          <div className="row">
            <div className="col-sm-8 m-auto ftrft">
              <p className="ml-4">            
                2022. Make Your Burger
                <span className="text11">
                  <a href=""> Privacy Policy <span style={{color:'black'}}>|</span>  Terms and Conditions</a>
                </span>
              </p>
            </div>
            <div className="col-sm-4 ftrflt">
              <div className="row ftricon">
                <div className="col-2 col-md-2   ftrbdr   m-auto ">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png"
                    width="70%  "
                  ></img>
                </div>
                <div className="col-2 col-md-2   ftrbdr   m-auto mb-5">
                  <img
                    src="data:image/png;base64,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"
                    width="70%  "
                  ></img>
                </div>
              
              <div className="col-2 col-md-2   ftrbdr   m-auto ">
                <img
                  src="https://images.livemint.com/img/2021/07/09/1600x900/Google-Pay-4_5d8472821722c_1589536494425_1589536494709_1625826806470.jpg"
                  width="70%  "
                ></img>
              </div>
              <div className="col-2 col-md-2   ftrbdr   m-auto ">
                <img
                  src="data:image/png;base64,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"
                  width="100%  "
                ></img>
              </div>
              <div className="col-2 col-md-2   ftrbdr   m-auto ">
                <img
                  src="https://adyen.getbynder.com/m/62f27541191c1e60/webimage-pmx-logo-paypal.jpg"
                  width="70%  "
                ></img>
              </div>
              <div className="col-2 col-md-2   ftrbdr   m-auto ">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiG85WKOxHZFxK9z9WlUVm5Z4bnoLwh1E0gzrTjXTIQwF4TuSen8yv9z6GK0L9Bzl78XE&usqp=CAU"
                  width="70%  "
                ></img>
              </div>
                </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
