import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ServicesArticle.css'

function ServicesArticle() {
    window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
       });
  return (
    <Container className='services-article-container' fluid>
        <Row className='services-article-row'>
            <Col className='services-article-span' xxl={1}></Col>
            <Col className='services-article-Content'>
                <h2 className='services-article-title'>
                What is a Penetration Test?
                </h2>
                <p className='services-article-description'>
                Penetration Test, also known as "Offensive Security" is the process of imitating real-life electronic attacks (be it remote or local) against the client for the sole purpose of detecting vulnerabilities and possible active exploitations of the client's network to provide the client with a fully detailed report, technical and narrative, describing the findings and recommending the most effective remediation and mitigation for every detected vulnerability; Once the patching is complete on the client's side, it is the duty of the penetration tester to re-assess the security state of the targeted network to make sure all vulnerabilities are properly mitigated and no new vulnerabilities have been accidentally created in the process.
                </p>
                <h3 className='services-article-title'>Why is Penetration Test Necessary?</h3>
                <p className='services-article-description'>
                Since we live in a world built on Data flows and Data processing, and since every business and company relies on its Data to properly run their operations and keep their privacy and the privacy of their clients intact, any breach or infiltration against any layer of the client's online presence poses a huge risk against the client's reputation and threatens to completely disrupt the targeted business and even completely wipe off any hacked database or application (be it web or local), and since such risks can ONLY be detected by Offensive Penetration Test, imitating real-life attacks using the most advanced techniques known to hackers, Penetration Tests have become a necessity to any business, company, data center, or even an online shop or email relay, to detect and mitigate the client's exploitability before it becomes known to black-hat hackers who will not hesitate to infiltrate their target and cause as much damage as it is in their capabilities, stealing as much as possible in the process for their own personal profit.
                </p>
                <h3 className='services-article-title'>Types of Penetration Tests</h3>
                <p className='services-article-description'>
                Penetration Tests are mainly divided into two main categories, each is divided into three paths.
                </p>
                <ol className='pen-types-list'>
                    <li className='pen-type-list-item'>Cyber/Remote Penetration Test
                    <ol className='pen-box-list'>
                            <li className='pen-box-list-item'>Blackbox.</li>
                            <li className='pen-box-list-item'>Greybox.</li>
                            <li className='pen-box-list-item'>Whitebox.</li>
                        </ol>
                    </li>
                    <li className='pen-type-list-item'>Local Penetration Test
                        <ol className='pen-box-list'>
                            <li className='pen-box-list-item'>Blackbox.</li>
                            <li className='pen-box-list-item'>Greybox.</li>
                            <li className='pen-box-list-item'>Whitebox.</li>
                        </ol>
                    </li>
                </ol>
                <p className='services-article-description'>
                    While a Cyber/Remote Penetration Test will target the client's online presence through their Public IP, Host, Website, Web Application, Mail Relay, Online Backup... or any platform used by the client to run their business and operations over the internet; Local Penetration Test will target the client's local network and infrastructure hitting every device owned and operating for the client on every possible layer, be it Network Layer Attacks or OS Layer Attacks.
                    Blackbox, Greybox, and Whitebox are similar in both categories and completely depend on the privilege granted by the client to the Penetration Tester.
                </p>



                
                <h3 className='services-article-title'>How is Local Penetration Test Performed</h3>
                <p className='services-article-description'>
                A local Penetration Test is when the tester plugs into the local network/infrastructure of the client and performs many steps which will be described below to make sure any active exploitation is detected and disabled and every vulnerability is identified, reported, and mitigated.
                </p>
                <p className='services-article-description'>
                    A Local Penetration Test should be run manually and through automated engines since each has its own benefits.
                </p>
                <p className='services-article-description'>
                    While Automated engines will save time, the cost is the accuracy of the tests.
                </p>
                <p className='services-article-description'>
                    Hence, manual attacks will sweep through every bit of the targeted network/infrastructure leaving no stone unturned, at the cost of time.
                </p>
                <p className='services-article-description'>
                    The Penetration Tester will first plug his device into the targeted network or infrastructure and will run an automated script first that will scan all the connected devices’ ports ranging from 1 to 65535 and detect all open ports then identify the services running within each port and then the Penetration Tester will manually attempt to infiltrate each device using either well-known vulnerabilities or zero-days discovered on the spot. The Penetration Tester is also expected to detect, report, and disable any active exploitation, backdoor, or any malicious activity detected in the process.
                </p>
                <h6 className='services-article-sub-title'>Local Network Attacks are mainly as follows:</h6>
                <ul className='local-attack-list'>
                    <li className='local-attack-list-item'>Authentication Bypass.</li>
                    <li className='local-attack-list-item'>Database Leak (if applicable).</li>
                    <li className='local-attack-list-item'>OS Takeover.</li>
                    <li className='local-attack-list-item'>Credentials Bruteforce.</li>
                    <li className='local-attack-list-item'>Default Credentials Detection.</li>
                    <li className='local-attack-list-item'>Layer 4 Denial of Service.</li>
                    <li className='local-attack-list-item'>FTP/SSH/Telnet Infiltrations.</li>
                    <li className='local-attack-list-item'>MITM (Man In The Middle) combined with SSL/TLS stripping attacks.</li>
                    <li className='local-attack-list-item'>Other Miscellaneous Attacks.</li>
                </ul>
                <p className='services-article-description'>
                The Penetration Tester is then expected to provide the client with an accurate and precise report explaining every attack performed on the network along with POC of any successful attack and malicious detection. The Provided report must contain a technical part explaining the entire technical process of the whole Penetration Test performed on-site, a narrative part explaining the whole operation to any non-technical person involved in the hierarchy of the client, a remediation and recommendation part, and finally, it is the Penetration Tester's duty to provide a re-assessment to the client whenever the client notifies that his patching is completely done to make sure that all the addressed vulnerabilities have been fixed, all malicious activities have been disabled, and no new vulnerabilities have been generated in the patching process.  
                </p>     
                <h2 className='services-article-title'>How is Remote/Cyber Penetration Test Performed</h2>
                <p className='services-article-description'>
                Remote/Cyber Penetration Test is when the tester attacks the client remotely over the internet targeting the client's online presence and any online service used by the client, be it a website, a web application, an online data backup, an online shop, and so on...

                </p>
                <p className='services-article-description'>
                    Remote/Cyber Penetration Test should be run manually and through automated engines since each has its own benefits.

                </p>
                <p className='services-article-description'>
                While Automated engines will save time, the cost is the accuracy of the tests.

                </p>
                <p className='services-article-description'>
                Hence, manual attacks will sweep through every bit of the target leaving no stone unturned, at the cost of time.

                </p>
                <h3 className='services-article-sub-title'>
                Remote/Cyber Attacks Are Mainly as Follows:
                </h3>
                <ul className='cyber-attack-list'>
                    <li className='cyber-attack-kist-item'>XSS (Cross Server Scripting).</li>
                    <li className='cyber-attack-kist-item'>
                        SQL Injections (of all types - listed below).
                        <ul className='cyber-attack-sub-list'>
                            <li className='cyber-attack-sub-list-item'>- Union-Based SQL Injection.</li>
                            <li className='cyber-attack-sub-list-item'>- Error-Based SQL Injection.</li>
                            <li className='cyber-attack-sub-list-item'>- Boolean-Based Blind SQL Injection.</li>
                            <li className='cyber-attack-sub-list-item'>- Time-Based Blind SQL Injection.</li>
                            <li className='cyber-attack-sub-list-item'>- Stacked Queries SQL Injection.</li>
                        </ul>
                    </li>
                    <li className='cyber-attack-kist-item'>Database Leak.</li>
                    <li className='cyber-attack-kist-item'>Database Takeover.</li>
                    <li className='cyber-attack-kist-item'> Admin Takeover.</li>
                    <li className='cyber-attack-kist-item'>Authentication Bypass.</li>
                    <li className='cyber-attack-kist-item'>Unrestricted Upload/Filter Bypass.</li>
                    <li className='cyber-attack-kist-item'>Credentials Bruteforce</li>
                    <li className='cyber-attack-kist-item'>Layer 7 Denial of Service.</li>
                    <li className='cyber-attack-kist-item'>Hash Decryption (if applicable).</li>
                    <li className='cyber-attack-kist-item'>LFI (Local File Include).</li>
                    <li className='cyber-attack-kist-item'>RFI (Remote File Include).</li>
                    <li className='cyber-attack-kist-item'>Other Miscellaneous Attacks.</li>
                </ul>
                <p className='services-article-description'>
                The Penetration Tester is then expected to provide the client with a very detailed report explaining every attack performed against the target along with POC of any successful attack and malicious detection. The Provided report must contain a technical part explaining the entire technical process of the whole Penetration Test performed, a narrative part explaining the whole operation to any non-technical person involved in the hierarchy of the client, a remediation and recommendation part, and finally, it is the Penetration Tester's duty to provide re-assessment to the client whenever the client notifies that his patching is completely done to make sure all addressed vulnerabilities have been fixed, all malicious activities have been disabled and no new vulnerabilities have been generated in the patching process.
                </p>
            </Col>
            <Col className='services-article-span' xxl={1}></Col>
        </Row>
    </Container>
  )
}

export default ServicesArticle