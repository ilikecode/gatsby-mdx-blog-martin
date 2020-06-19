import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

// Import Components
import Layout from '../components/layout'
import SEO from '../components/SEO'

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Container>
    <h1>About Me, Martin.</h1>
    <p>I'm a SoCal-based security analyst that's good at finding holes and things. Previously I knew nothing, but then I looked some stuff up on the internet and went to college. Now I got the smarts.</p>
    <section>
      <div>
        <h2>Education</h2>
        <p>Content Need: Education history and achievements.</p>
        <h3>Associates of Science in Cyber Security</h3>
        <p>Coastline Community College | Fountain Valley, California</p>
        <p>July 2019 to May 2020</p>
        <p>Coastline College is a designated Center for Academic Excellence in Information Assurance and Cyber Defense for two-year institutions (CAE2Y) by the National Security Agency (NSA) and the Department of Homeland Security (DHS).</p>
        <h4>Program Certificates</h4>
        <ul>
          <li>Certificate of Achievement Penetration Testing</li>
          <li>Certificate of Achievement CyberSecurity</li>
          <li>Certificate of Achievement CyberSecurity and Computer Network</li>
          <li>Certificate of Achievement CyberSecurity Fundamentals</li>
          <li>Certificate of Achievement Network Technician</li>
        </ul>
        <h3>CIS: Computer Networking</h3>
        <p>Orange Coast College | Orange, California</p>
        <p>September 2001 to May 2003</p>
        <ul>
        <li>Certificate of Computer Networking</li>
        </ul>
      </div>
    </section>
    <section>
      <div>
        <h2>Organizations and Achievements</h2>
        <h3>National Cyber League (NCL)</h3>
        <p>In the spring of 2020 I particapted in the NCL Spring 2020 Individual Game Competition. At the beginning of the NCL 2020 Spring Season, 5900 students/players and 415 faculty/coaches from more than 460 two- and four-year schools across all 50 U.S. states registered to play.</p>
        <p>To view complete results, please <a href="mailto:hello@martin-guzman.com" aria-label="Email Martin Guzman">contact me</a> or view on my <a href="https://www.linkedin.com/in/martin-guzman-ca/" aria-label="Martin's LinkedIn Profile">LinkedIn page</a>.</p>
        <h5>Placement Hightlight Results:</h5>
        <p>Top 16 percentile. Ranked 877 out of 5357 competitors.</p>
        <h5>Open Source Intelligence:</h5>
        <p>Top 1.5 percentile. Ranked 85th out of 5357 competitors.</p>
        <h5>Network Traffic Analysis:</h5>
        <p>Top 5 percentile. Ranked 300th out of 5357 competitors.</p>
        <h5>Password Cracking:</h5>
        <p>Top 10 percentile. Ranked 570th out of 5357 competitors.</p>
        <h5>Scanning (Network/Wireless):</h5>
        <p>Top 9 percentile. Ranked 506th out of 5357 competitors.</p>
        <br />          
        <h3>Xploit Cybersecurity Club</h3>
        <p>While at college, I was a member of Coastline College's Xploit Cybersecurity Club. A weekly meeting where students would learn and share cybersecurity techniques.</p>
      </div>
    </section>
    <Link to="/">Go back to the homepage</Link>
    </Container>
  </Layout>
)

export default AboutPage

const Container = styled.div`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: .25rem;
  display: flex;
  flex-direction: column;
`