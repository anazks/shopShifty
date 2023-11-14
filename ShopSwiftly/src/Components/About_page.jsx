import React from 'react'
import './About_page.css'
import About_section_one from '../Images/jason-goodman-Oalh2MojUuk-unsplash.jpg'

function About_page() {
  return (
    <>
        <section className='about_section_one'>
            <div className='section_image'>
                <img src={About_section_one} alt="" />
            </div>
            <div className="section_one_content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ullam ipsam aliquid harum aperiam, repellendus dicta delectus vel suscipit culpa minima iure consectetur aut quasi modi dignissimos atque! Nam, voluptatibus?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos voluptas, dolorum eius tempora vel aliquam veniam culpa quas error fugiat officia at totam commodi nostrum sed doloremque illum temporibus explicabo. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed ab veritatis nostrum accusamus voluptas porro nam laborum ipsa ducimus delectus exercitationem expedita culpa quidem blanditiis id reprehenderit, nihil provident harum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi veritatis non nobis asperiores officiis veniam necessitatibus, amet libero dolor sunt! Tenetur fugit voluptas illum cumque, corrupti tempore doloremque praesentium necessitatibus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda fuga necessitatibus non repellat tenetur qui atque vero provident ratione culpa voluptas ut natus impedit, deleniti, aperiam enim optio porro? Explicabo.
                </p>
            </div>
        </section>
    </>
  )
}

export default About_page