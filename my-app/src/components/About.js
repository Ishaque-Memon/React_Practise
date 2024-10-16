import React  from 'react'



export default function About(props) {
    // const [Mystyles, setMystyles] = useState({
    //     color: 'white',
    //     backgroundColor: 'rgb(33, 37, 41)'
    // })
    // const [btnText, setBtnText] = useState('Enable Light Mode')

    // const [BgColor, setBgColor] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })

    // const HandleBgColor = () =>{
        
    //         if(Mystyles.color === 'white' ){

    //             setMystyles({
    //                 color: 'black',
    //                 backgroundColor: 'white'
    //             })
    //             setBtnText('Enable Dark Mode')

    //             setBgColor(
    //                 {
    //                     color: 'white',
    //                     backgroundColor: 'rgb(33, 37, 41)'
    //                 }
                    
    //             )
    //         }
    //         else {

    //             setMystyles({
    //                 color: 'white',
    //                 backgroundColor: 'rgb(33, 37, 41)'
    //                 })
    //                 setBtnText('Enable Light Mode')
                   
    //                 setBgColor(
    //                     {
    //                         color: 'black',
    //                         backgroundColor: 'white'
    //                     }
                        
    //                 )
                   
    //         }

        
    //     }
    
  return (
        <div className="container" style={{backgroundColor: props.mode==='light'?'white':'rgb(33, 37, 41)' }}>
            <h2>About Us</h2>
        <div className="accordion" id="accordionExample" >
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button" style={{backgroundColor: props.mode==='light'? 'white':'rgb(54, 70, 89)', color: props.mode==='light'?'black' : 'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Accordion Item #1 
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={{backgroundColor: props.mode==='light'? 'white':'rgb(237, 78, 103)', color: props.mode==='light'?'black' : 'white'}}>
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{backgroundColor: props.mode==='light'? 'white':'rgb(54, 70, 89)', color: props.mode==='light'?'black' : 'white'}}>
            Accordion Item #2
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={{backgroundColor: props.mode==='light'? 'white':'rgb(237, 78, 103)', color: props.mode==='light'?'black' : 'white'}}>
            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{backgroundColor: props.mode==='light'? 'white':'rgb(54, 70, 89)', color: props.mode==='light'?'black' : 'white'}}>
            Accordion Item #3
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={{backgroundColor: props.mode==='light'? 'white':'rgb(237, 78, 103)', color: props.mode==='light'?'black' : 'white'}}>
            <strong >This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
        </div>
    </div>
    </div>
    {/* <div className="container my-3">
        <button type="button" onClick={HandleBgColor} className="btn btn-primary Clicked">{btnText}</button>
    </div> */}
        </div>
  )
}
