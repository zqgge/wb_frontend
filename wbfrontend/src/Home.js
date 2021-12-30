import About from './Home_modules/About'
import Me from './Home_modules/Me'
import ProjectList from './Home_modules/ProjectList'
import Skills from './Home_modules/Skills'

export default function Home() {

    return (
        <div className='Home'>
            <div className='Me'>
                <Me/>
            </div>
            <div className='Skills'>
                <Skills/>
            </div>
            <div className='ProjectList'>
                <ProjectList/>
            </div>
            <div className='About'>
                <About/>
            </div>
        </div>
    )
}