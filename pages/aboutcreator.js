import Head from 'next/head'
import styles from '../styles/Home.module.css'
import GenLayout from "../components/genlayout/genlayout"
import Leftbar from '../components/leftbar/leftbar';
import Smolcard from '../components/smolcard/smolcard'

export default function Home() {
  const h1style = {
    display: 'inline-block',
    fontFamily: 'Audiowide-Reg',
  };
  const h1back = {
    display: 'inline-block',
    fontFamily: 'Audiowide-Reg',
    //backgroundColor: '#ff4000',
    fontSize: '3em',
    display: 'inline-block',
    width: '100%',
    marginBottom: '0.5em',
  }
  return (
    <GenLayout>
      <Head>
        <title>About the Creator - Aux Étoiles!</title>
      </Head>

      <Leftbar padding='13em' style={{overflow: 'hidden', marginBottom: '10em'}}>
      <img src='/images/profile.jpg' style={{width: '13em', display: 'inline-block', marginLeft: '3em'}} />
      <div style={{display: 'inline-block', marginLeft: '3em', width: '70%', position: 'relative'}}>
        <h1 style={h1style}>About the Creator (Preet Mistry)</h1><br />
        <p>
          One of the most defining things about me is that I crave something better. Whether it be something as simple as changing around the spacings on this very website, to aiming for something better for our future (big and vague, I know :P), it’s something I want to do. In the next few years, I hope to be doing something I love. It may be working under a company where I can have a critical role in the decisions made, or creating my own firm, charged with my ambition and goals. One of my principle dreams is to make everything free for all humans, whether it be freedom of information, to basic liberties such as the right to a good life.
        </p>
      </div>
      </Leftbar>

      <Leftbar padding='20em' style={{overflow: 'hidden'}} color='#aa00ff' top='3em'>
      <div style={{display: 'inline-block', position: 'relative', marginLeft: '3em'}}>
        <h1 style={h1style}>My Interests</h1><br />
        <p>
          I must say, my interests do revolve strongly around STEM and building things. I have strong interests in space exploration and astronomy.
          I love robotics, and I have a strong interest in AI. Sometimes, I end up trying to craft things out of scrap metal.
          However, not everything has to be productive! I must say that one of the best decisions I ever made was joining the dragon boating team that the engineers have at my university.          
          Going back to one of the main points in my introduction, I have a strong interest in reaching for something better. This manifests itself in me as
           my interest in futurism, such as potential new technologies, and the way humans may live in the future.
        </p>
        <Smolcard text='Dragon Boating'/>
        <Smolcard text='Space Exploration' color='#0331fc' tcolor='white'/>
        <Smolcard text='Astronomy' color='#03fc84' />
        <Smolcard text='Metal Crafting' color='#fc4903' tcolor='white'/>
        <Smolcard text='Artificial Intelligence' width='15em' color='#f25eff' />
        <Smolcard text='Robotics' color='#03ffee' />
        <Smolcard text='Futurism' color='#fc4903' />
      </div>
      </Leftbar>

      <Leftbar padding='8em' style={{overflow: 'hidden', marginBottom: '10em'}}>
      <div style={{display: 'inline-block', marginLeft: '3em', width: '90%', position: 'relative'}}>
        <h1 style={h1back}>Employers Section!</h1><br />
        <p>Yanno, skills, experience, projects, blah blah...</p>
      </div>
      </Leftbar>

      <Leftbar padding='15em' color='#00f2ff' style={{overflow: 'hidden', marginBottom: '10em'}}>
      <div style={{display: 'inline-block', marginLeft: '3em', width: '90%', position: 'relative'}}>
        <h1 style={h1style}>Main Skills</h1><br />
        <Smolcard text='C++' tcolor='white' color='#fc4903' />
        <Smolcard text='Python' tcolor='white' color='#fc4903' />
        <Smolcard text='Javascript' tcolor='white' color='#fc4903' />
        <Smolcard text='Java' tcolor='white' color='#fc4903' />
        <Smolcard text='C#' tcolor='white' color='#fc4903' />
        <Smolcard text='ReactJS' tcolor='white' color='#fc4903' />
        <Smolcard text='Verilog' tcolor='white' color='#fc4903' />
        <Smolcard text='Git' tcolor='white' color='#fc4903' />
        <Smolcard text='Android App Development' tcolor='white' width='14em' color='#fc4903' />
        <Smolcard text='Debugging' tcolor='white' color='#fc4903' />
      </div>
      </Leftbar>

      <Leftbar padding='50em' color='#88ff00' style={{overflow: 'hidden', marginBottom: '10em'}}>
      <div style={{display: 'inline-block', marginLeft: '3em', width: '100%', position: 'relative'}}>
        <h1 style={h1style}>Experience</h1><br />
        <ul style={{listStyle: 'none'}}>
          <li>
            <div style={{width: '100%'}}>
              <div style={{display: 'inline-block'}}>
                <h2 style={{marginBottom: '0'}}>Software Developer and Engagement Associate</h2>
                <h3 style={{marginTop: '0.5em', color: '#555555'}}>STEM Powering</h3>
                <p>July 2020 - September 2020</p>
                <p style={{marginTop: '0em', fontStyle: 'italic', fontSize: '0.85em'}}>Charity with the core motive of democratizing STEM for all students</p>
              </div>

              <img src='/reslogos/stempowering.png' 
                style={{ display: 'inline-block', width: '10em', marginLeft: '3em', marginBottom: '2em'}}/>
            </div>

            <ul style={{listStyleType: 'disc', display: 'inline-block'}}>
              <li style={{marginTop: '0.85em'}}>Designed and created an educational space exploration and orbit simulation game (Javascript, HTML, CSS)</li>
              <li style={{marginTop: '0.85em'}}>Developed an orbit solver from scratch that solves Kepler’s equations for the above game</li>
              <li style={{marginTop: '0.85em'}}>Designed and created an educational circuit game in collaboration with 1 other colleague (Javascript)</li>
              <li style={{marginTop: '0.85em'}}>Created the circuit simulator for the above game which uses linear equations and circuit theory</li>
              <li style={{marginTop: '0.85em'}}>Developed an email recording system to track downloads of experiment PDFs on the main website (PHP, Javascript, HTML, CSS)</li>
            </ul>

          </li>
          <li>
            <div style={{width: '100%'}}>
              <div style={{display: 'inline-block'}}>
                <h2 style={{marginBottom: '0'}}>Rocket Avionics Software Developer</h2>
                <h3 style={{marginTop: '0.5em', color: '#555555'}}>University of Toronto Aerospace Team</h3>
                <p>August 2018 - November 2019</p>
                <p style={{marginTop: '0em', fontStyle: 'italic', fontSize: '0.85em'}}>Student-run organization that executes a multitude of aerospace projects</p>
              </div>

              <img src='/reslogos/utat.jpg' 
                style={{ display: 'inline-block', width: '10em', marginLeft: '3em'}}/>
            </div>

            <ul style={{listStyleType: 'disc', display: 'inline-block'}}>
              <li style={{marginTop: '0.85em'}}>Collaborated with 4 members to implement a GUI on ground station (Javascript) using React</li>
              <li style={{marginTop: '0.85em'}}>Overhauled rocket software running on Arduino (C++) - Improved software to perform telemetry operations in a highly efficient manner</li>
              <li style={{marginTop: '0.85em'}}>Created documentation regarding above rocket software overhaul for easy maintainability by future members</li>
              <li style={{marginTop: '0.85em'}}>Incorporated an assortment of new sensors into rocket software loop using a highly test-driven approach</li>
              <li style={{marginTop: '0.85em'}}>Collaborated closely with other team members to perform above software changes in a rapid and highly iterative manner</li>
            </ul>

          </li>
        </ul>
      </div>
      </Leftbar>

      <Leftbar padding='52em' color='#4cdffc' style={{overflow: 'hidden', marginBottom: '10em'}}>
      <div style={{display: 'inline-block', marginTop: '1em', marginLeft: '3em', width: '100%', position: 'relative', top: '-2em'}}>
        <h1 style={h1style}>Projects</h1><br />
        <ul style={{listStyle: 'none'}}>
          <li>
            <div style={{width: '100%'}}>
              <div style={{display: 'inline-block'}}>
                <h2 style={{marginBottom: '0'}}>Orbit Simulator FPGA Project (Verilog)</h2>
                <p>September 2019 - December 2019</p>
              </div>
            </div>

            <ul style={{listStyleType: 'disc', display: 'inline-block',}}>
              <li style={{marginTop: '0.85em'}}>Designed and developed orbit simulator game in a group of 2 members</li>
              <li style={{marginTop: '0.85em'}}>Lead role for development of orbit simulation physics</li>
              <li style={{marginTop: '0.85em'}}>Created Newtonian mechanics and numerical integration system to solve orbit pathways</li>
            </ul>

          </li>
          
          <li>
            <div style={{width: '100%', marginTop: '3em'}}>
              <div style={{display: 'inline-block'}}>
                <h2 style={{marginBottom: '0'}}>Google Maps Course Project (C++)</h2>
                <p>January 2020 - May 2020</p>
              </div>
            </div>

            <ul style={{listStyleType: 'disc', display: 'inline-block'}}>
              <li style={{marginTop: '0.85em'}}>Developed city mapping and navigation software in a team of 3 members</li>
              <li style={{marginTop: '0.85em'}}>Lead role for graphics rendering development using GTK library</li>
              <li style={{marginTop: '0.85em'}}>Maintained a weekly status report and technical documentation regarding new code changes</li>
            </ul>

          </li>

          <li>
            <div style={{width: '100%', marginTop: '3em'}}>
              <div style={{display: 'inline-block'}}>
                <h2 style={{marginBottom: '0'}}>Android Phone Trackpad System (Java, Python)</h2>
                <p> November 2017 – December 2017</p>
              </div>
            </div>

            <ul style={{listStyleType: 'disc', display: 'inline-block'}}>
              <li style={{marginTop: '0.85em'}}>Designed and built system to facilitate trackpad-style control of a PC</li>
              <li style={{marginTop: '0.85em'}}>Utilized socket programming to facilitate Bluetooth data transfer</li>
              <li style={{marginTop: '0.85em'}}>Developed Android application (Java) and PC-side script (Python)</li>
            </ul>
          </li>
        </ul>
      </div>
      <div style={{padding: '1em', fontSize: '1.2em', color: '#3333cc'}}>
        <a href='https://github.com/pmistry9597' target='_blank'>Check out my GitHub for source code and more projects!</a>
      </div>
      </Leftbar>

    </GenLayout>
  )
}
