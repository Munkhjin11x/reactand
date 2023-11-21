import DrawFourth from "./DrawFourth"
export default function FourthMain(){
    return (
        <>
      <div className='marginTop96px' >
            <p className='textalign'>
                Skills
            </p>
            <p className='textalign'>
            The skills, tools and technologies I am really good at:
            </p>
           <div className="flex   spaceBwn">
           <DrawFourth/>
           <div >
            <h2 >Sr. Frontend Developer</h2>
            <ul className="flex directionColumn gap24px">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>

                <li>Sed quis justo ac magna.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>

            </ul>
         
           </div>
           <h2>Nov 2021 - Present</h2>
           </div>
        </div>
        </>
    )
}