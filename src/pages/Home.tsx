import { SignUpForm } from "../components/SignUpForm";

export function Home(props: any) {
    const linkedInUrl = 'https://www.linkedin.com/in/ricardo-gonzalez-732765129/'

    function downloadResume() {
        fetch(process.env.PUBLIC_URL + '/assets')
            .then(response => {
                response.blob().then(blob => {
                    let url = window.URL.createObjectURL(blob);
                    let a = document.createElement('a');
                    a.href = url;
                    a.download = 'RicardoResume2023.pdf';
                    a.click();
                });
            })
    };


    return (
        <>
            <div className="home-container" style={{
                backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/record.jpg'})`
            }}>
                <div className='project-info'>
                    <div style={{ marginTop: 0, marginBottom: 0 }}>
                        <div>
                            <h1 >EcoCart</h1>
                            <h4>By: Ricardo Gonzalez</h4>
                            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                <a href={linkedInUrl}>
                                    <button className="user-buttons">LinkedIn</button>
                                    <div style={{ width: '0', height: '0' }}>
                                    </div>
                                </a>
                                <button className="user-buttons" onClick={() => { downloadResume() }}>Download Resume</button>
                            </div>
                        </div>

                        <h2>Libraries & Fonts Used</h2>
                        <ul style={{ float: "left" }}>
                            <li>React Router DOM</li>
                            <li>@fontsource/syne</li>
                        </ul>
                    </div>
                    <div className="hello-world">
                        <h4>Hi! This is a bit over engineered for what the problem statement asked,
                            but I want to incorporate different utilities that React has to offer!
                            I limited myself to a few hours per Nates 'few our' suggestion on our initial call.
                            So I didn't quite get to mobile screens or adding tests.</h4>
                            <h4>Thank you for taking the time to review me a bit!</h4>
                    </div>
                </div>

            </div>
            <SignUpForm loginIsShown={props.loginIsShown} handleLoginClick={props.handleLoginClick} />
        </>
    )
}