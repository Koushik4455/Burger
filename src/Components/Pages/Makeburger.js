import React, { useState } from 'react'

const Makeburger = () => {
    const [num, setNum] = useState(0);
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [num3, setNum3] = useState(0);
    const [num4, setNum4] = useState(0);
    const [num5, setNum5] = useState(0);
    const [num6, setNum6] = useState(0);
    const [num7, setNum7] = useState(0);



    const increment = () => {
        setNum(num+1)
    };
    const decrement = () => {
        if(num > 0 ){
        setNum (num-1);
    }else{
        alert('You have Not Added  Any Item')
        setNum(0);
    }
     }
     const increment1 = () => {
        setNum1(num1+1)
    };
    const decrement1 = () => {
        if(num1 > 0 ){
        setNum1 (num1-1);
    }else{
        alert('You have Not Added  Any Item')
        setNum1(0);
    }
}

    const increment2 = () => {
        setNum2(num2+1)
    };
    const decrement2 = () => {
        if(num2 > 0 ){
        setNum2 (num2-1);
    }else{
        alert('You have Not Added  Any Item')
        setNum2(0);
    }
}

    const increment3 = () => {
        setNum3(num3+1)
    };
    const decrement3 = () => {
        if(num3 > 0 ){
        setNum3 (num3-1);
    }else{
        alert('You have Not Added  Any Item')
        setNum3(0);
    }
}

    const increment4 = () => {
        setNum4(num4+1)
    };
    const decrement4 = () => {
        if(num4 > 0 ){
        setNum4 (num4-1);
    }else{
        alert('You have Not Added  Any Item')
        setNum4(0);
    }
}

    const increment5 = () => {
        setNum5(num5+1)
    };
    const decrement5 = () => {
        if(num5 > 0 ){
        setNum5 (num5-1);
    }else{
        alert('You have Not Added  Any Item')
        setNum5(0);
    }
}
    const increment6 = () => {
        setNum6(num6+1)
    };
    const decrement6 = () => {
        if(num6 > 0 ){
        setNum6 (num6-1);
    }else{
        alert('You have Not Added  Any Item')
        setNum6(0);
    }
}

    const increment7 = () => {
        setNum7(num7+1)
    };
    const decrement7 = () => {
        if(num7 > 0 ){
        setNum7 (num7-1);
    }else{
        alert('You have Not Added  Any Item')
        setNum7(0);
    }
}
    

  return (
    <div className='makebrg'>
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-sm-2'>
                    <h1>Make</h1>
                    <h1>Your</h1>
                    <h1>Burger</h1>
                </div>
                <div className='col-sm-5 mt-5'>
                    <div className='text-center'>
                        
                    <img src='./Images/Burgerdown.png'></img>
                    </div>
                </div>
                <div className='col-sm-5'>
                    <div className=' ' >
                    <h3>Summary</h3>
                    <hr/>
                    <p><span className='mkvle' >$0.00</span>  <button className='btn mybbtn'>Checkout</button></p><br/>
                    <p>Build a <span style={{color:'red'}}>$10</span> Burger and Get fift</p><br/>
                    <div className='row bgclr m-auto p-2'>
                        <div className='col-sm-4 mkigwt m-auto'>
                            <img src='./Images/clock.png'width='50%'></img><span>0 min</span> 
                        </div>
                        <div className='col-sm-4 mkigwt m-auto'>
                        <img src='./Images/tem.png'width='50%'></img><span>0 oz</span>
                        </div>
                        <div className='col-sm-4 mkigwt m-auto'>
                        <img src='./Images/fire.png'width='50%'></img><span>0 kcal</span>
                        </div>
                    </div>
                   
                    </div>
                </div>
                <div className='col-sm-12 mt-5'>
                    <div className='container'>
                    <div className='row'>
                    {/* <div className='col-sm-1'></div>
                    <div className='col-sm-1'></div> */}

                    <div className='col-sm-1.1 p-1'>
                        <div className='card  '>
                            <div className='card-image  '>
                                <img src='./Images/cutlet.png'width='100%' ></img>
                            </div>
                            <div className='card-body mkbrctlt'>
                                <div>
                                <button onClick={decrement} className='mkbrbtn'>-</button>
                                {num}
                                <button onClick={increment} className='mkbrbtn'>+</button>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-1.5 p-1'>
                        <div className='card  '>
                            <div className='card-image  '>
                                <img src='./Images/bun.png'width='100%' ></img>
                            </div>
                            <div className='card-body'>
                                <div>
                                <button onClick={decrement1}className='mkbrbtn'>-</button>
                                {num1}
                                <button onClick={increment1}className='mkbrbtn'>+</button>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-1.5 p-1'>
                        <div className='card  '>
                            <div className='card-image  '>
                                <img src='./Images/cheese.png'width='100%' ></img>
                            </div>
                            <div className='card-body mkbrches'>
                                <div>
                                <button onClick={decrement2}className='mkbrbtn'>-</button>
                                {num2}
                                <button onClick={increment2}className='mkbrbtn'>+</button>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-1.5 p-1'>
                        <div className='card  '>
                            <div className='card-image  '>
                                <img src='./Images/mayo.png'width='100%' ></img>
                            </div>
                            <div className='card-body mkbrmaya'>
                                <div>
                                <button onClick={decrement3}className='mkbrbtn'>-</button>
                                {num3}
                                <button onClick={increment3}className='mkbrbtn'>+</button>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-1.5 p-1'>
                        <div className='card  '>
                            <div className='card-image  '>
                                <img src='./Images/onion.png'width='100%' ></img>
                            </div>
                            <div className='card-body mkbronn'>
                                <div>
                                <button onClick={decrement4}className='mkbrbtn'>-</button>
                                {num4}
                                <button onClick={increment4}className='mkbrbtn'>+</button>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-1.5 p-1'>
                        <div className='card  '>
                            <div className='card-image  '>
                                <img src='./Images/salad.png'width='100%' ></img>
                            </div>
                            <div className='card-body mkbrsld'>
                                <div>
                                <button onClick={decrement5}className='mkbrbtn'>-</button>
                                {num5}
                                <button onClick={increment5}className='mkbrbtn'>+</button>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-1.5 p-1'>
                        <div className='card  '>
                            <div className='card-image  '>
                                <img src='./Images/tamato.png'width='100%' ></img>
                            </div>
                            <div className='card-body mkbrtmto'>
                                <div>
                                <button onClick={decrement6}className='mkbrbtn'>-</button>{num6}
                                
                                <button onClick={increment6}className='mkbrbtn'>+</button>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-1.1 '>
                        <div className='card  '>
                            <div className='card-image  '>
                                <img src='./Images/cucumber.png'width='100%' ></img>
                            </div>
                            <div className='card-body mkbrcucmb'>
                                <div className='mkbrin'>
                                <button onClick={decrement7}className='mkbrbtn'>-</button>{num7}
                               
                                <button onClick={increment7}className='mkbrbtn'>+</button>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Makeburger